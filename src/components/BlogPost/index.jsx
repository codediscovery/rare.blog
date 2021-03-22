import React from "react";
import { formatDate } from "../../helpers/dateFormatter";
import styles from "./styles.module.scss";
import { Content } from "../Content";
import Link from "next/link";

export const BlogPost = ({ post }) => {
    const renderCategories = () =>
        post &&
        post.categories.length &&
        post.categories.map((category) => category.name).join(", ");

    const excerptReplaced = post.excerpt.rendered.replace(
        /<p class="link-more">[\s\S]*?<\/p>/,
        ""
    );

    return (
        <div className={styles.post}>
            {post.featuredMedia && post.featuredMedia.source_url && (
                <img
                    className={styles.post__img}
                    src={post.featuredMedia.source_url}
                    alt="preview"
                />
            )}
            <div className={styles.post__info}>
                <span>
                    By <b>{post.author.name}</b>
                </span>
                <span>{formatDate(post.date)}</span>
                <span>{renderCategories()}</span>
            </div>
            <Link href={`/article/${post.slug}`}>
                <h2 className={styles.post__title}>{post.title.rendered}</h2>
            </Link>
            <Content type="excerpt" content={excerptReplaced} />
            <Link href={`/article/${post.slug}`}>
                <a className={styles.post__link}>Read more</a>
            </Link>
        </div>
    );
};
