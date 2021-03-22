const fetch = require("isomorphic-unfetch");
const WORDPRESS_ENDPOINT = process.env.WORDPRESS_ENDPOINT;

const fetchWP = async ({ source, referenceId, page, filter }) => {
    const resp = await fetch(
        `${WORDPRESS_ENDPOINT}/${source}${
            referenceId ? "/" + referenceId : ""
        }${page ? `?page=${page}&per_page=2` : ""}${filter ? `${filter}` : ""}`
    );
    if (resp.ok) {
        const data = await resp.json();
        return data;
    } else {
        throw Error("something went wrong");
    }
};

const wordpress = {
    getPosts: async (page) => {
        try {
            const result = await fetchWP({ source: "posts", page });
            const processedPosts = await Promise.all(
                result.map((item) => wordpress.getPost(item.id))
            );
            return processedPosts;
        } catch (e) {
            return e.message;
        }
    },
    getCategory: async (id) => {
        try {
            const category = await fetchWP({
                source: "categories",
                referenceId: id,
            });
            return category;
        } catch (e) {
            return e.message;
        }
    },
    getPostCategories: async (categoriesArr) => {
        try {
            const categories = await Promise.all(
                categoriesArr.map((item) => wordpress.getCategory(item))
            );
            return categories;
        } catch (e) {
            return e.message;
        }
    },
    getPost: async (id) => {
        try {
            const post = await fetchWP({ source: "posts", referenceId: id });
            const author = await await fetchWP({
                source: "users",
                referenceId: post.author,
            });
            let featuredMedia = null;

            if (post.featured_media) {
                featuredMedia = await fetchWP({
                    source: "media",
                    referenceId: post.featured_media,
                });
            }

            const categories = await wordpress.getPostCategories(
                post.categories
            );

            return { ...post, author, featuredMedia, categories };
        } catch (e) {
            return e.message;
        }
    },

    getAllCategories: async () => {
        try {
            const categories = await fetchWP({ source: "categories" });
            const allPages = await wordpress.getPosts();

            let processedCategories = categories.map((category) => {
                return matchCategories(category, allPages);
            });

            return processedCategories;
        } catch (e) {
            return e.message;
        }
    },

    getFeaturedPosts: async () => {
        try {
            const categories = await fetchWP({ source: "categories" });
            let featuredCategory = categories.filter(
                (category) => category.name === "Featured"
            )[0];

            const featuredPosts = await fetchWP({
                source: "posts",
                filter: `?categories=${featuredCategory.id}`,
            });

            const processedPosts = await Promise.all(
                featuredPosts.map((item) => wordpress.getPost(item.id))
            );

            return processedPosts;
        } catch (e) {
            return e.message;
        }
    },

    getHomePage: async () => {
        try {
            const page = await fetchWP({
                source: "pages",
                filter: "?slug=home",
            });
            return page;
        } catch (e) {
            return e.message;
        }
    },
};

const matchCategories = (category, allPages) => {
    try {
        let count = 0;

        allPages.map((page) => {
            page.categories.map((pageCategory) => {
                if (pageCategory.name === category.name) {
                    count = count + 1;
                }
            });
        });

        return {
            ...category,
            pagesCount: count,
        };
    } catch (e) {
        return {
            ...category,
            pagesCount: 0,
        };
    }
};

module.exports = wordpress;
