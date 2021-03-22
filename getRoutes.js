const wordpress = require("./src/api");

const getRoutes = async () => {
    const data = await wordpress.getPosts();
    const numOfPages = Math.round(data.length / 2);

    let articlePages = {};

    data.map((item) => {
        articlePages[`/article/${item.slug}`] = {
            page: "/article",
            query: {
                id: item.id,
            },
        };
    });

    let customPages = {};

    for (let i = 1; i <= numOfPages; i++) {
        if (i === 1) {
            customPages["/"] = {
                page: "/",
                query: {
                    currPage: 1,
                    pages: numOfPages,
                },
            };
        } else {
            customPages[`/page/${i}`] = {
                page: "/",
                query: {
                    currPage: i,
                    pages: numOfPages,
                },
            };
        }
    }

    const pages = {
        ...customPages,
        ...articlePages,
    };

    console.log(pages);

    return pages;
};

module.exports = getRoutes;
