import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { formatDate } from "../../helpers/dateFormatter";

export const FeaturedEditorial = ({ posts }) => {
    const renderPosts = () =>
        posts.map((post, key) => {
            return (
                <div key={key} className={styles.featured__article}>
                    <Link href={`/article/${post.slug}`}>
                        <h3 className={styles.featured__article__title}>
                            {post.title.rendered}
                        </h3>
                    </Link>
                    <div className={styles.featured__article__info}>
                        <span>By {post.author.name}</span>
                        <span>{formatDate(post.date)}</span>
                    </div>
                </div>
            );
        });
    return (
        <div className={styles.featured}>
            <h2 className={styles.featured__title}>Featured editorial</h2>

            {renderPosts()}
        </div>
    );
};
