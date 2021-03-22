import React from "react";
import styles from "./styles.module.scss";
import { ArticleShare } from "../../components/ArticleShare";
import { Layout } from "../../components/Layout";
import { Container } from "../../components/Container";
import { Content } from "../../components/Content";
import { formatDate } from "../../helpers/dateFormatter";
import wordpress from "../../api";
import ReactMarkdown from "react-markdown";

const Article = ({ post }) => {
    const renderCategories = () =>
        post &&
        post.categories.length &&
        post.categories.map((category) => category.name).join(", ");
    return (
        <Layout seo={post.yoast_head}>
            <Container>
                <div className={styles.article}>
                    <h1 className={styles.article__title}>
                        {post.title.rendered}
                    </h1>
                    <div className={styles.article__info}>
                        <span>
                            By <b>{post.author.name}</b>
                        </span>
                        <span>{formatDate(post.date)}</span>
                        <span>{renderCategories()}</span>
                    </div>
                    {post.featuredMedia && post.featuredMedia.source_url && (
                        <>
                            <img
                                className={styles.article__previewImg}
                                src={post.featuredMedia.source_url}
                                alt={post.featuredMedia.alt}
                            />

                            <div className={styles.article__previewImgText}>
                                <ReactMarkdown
                                    allowDangerousHtml
                                    children={
                                        post.featuredMedia.caption.rendered
                                    }
                                />
                            </div>
                        </>
                    )}

                    <ArticleShare />
                    <div className={styles.article__content}>
                        <Content content={post.content.rendered} />
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

Article.getInitialProps = async ({ query: { id } }) => {
    const post = await wordpress.getPost(id);
    return { post };
};

export default Article;
