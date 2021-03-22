import wordpress from "../api";
import { BlogArchive } from "../components/BlogArchive";
import { BlogCategories } from "../components/BlogCategories";
import { BlogHeader } from "../components/BlogHeader";
import { BlogNavigator } from "../components/BlogNavigator";
import { BlogPost } from "../components/BlogPost";
import { BlogSearch } from "../components/BlogSearch";
import { Container } from "../components/Container";
import { FeaturedEditorial } from "../components/FeaturedEditorial";
import { Layout } from "../components/Layout";
import styles from "./styles.module.scss";

const Index = ({ page, posts, pages, currPage, sidebar }) => {
    const renderPosts = () =>
        posts.length &&
        posts.map((post, key) => <BlogPost key={key} post={post} />);
    return (
        <Layout seo={page.yoast_head}>
            <Container>
                <div className={styles.layout}>
                    <div className={styles.layout__content}>
                        <BlogHeader />
                        {renderPosts()}
                        <BlogNavigator pages={pages} currPage={currPage} />
                    </div>
                    <div className={styles.layout__sidebar}>
                        {/* <BlogSearch /> */}
                        <FeaturedEditorial posts={sidebar.featuredPosts} />
                        <BlogCategories categories={sidebar.categories} />
                        {/* <BlogArchive /> */}
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

Index.getInitialProps = async ({ query: { currPage, pages } }) => {
    const data = await wordpress.getPosts(currPage);
    const categories = await wordpress.getAllCategories();
    const featuredPosts = await wordpress.getFeaturedPosts();
    const page = await wordpress.getHomePage();

    return {
        page: page.length ? page[0] : null,
        posts: data,
        pages,
        currPage,
        sidebar: { categories, featuredPosts },
    };
};

export default Index;
