import React from "react";
import styles from "./styles.module.scss";

export const ArticleShare = () => {
    return (
        <div className={styles.share}>
            <button
                className={`${styles.share__button} ${styles.share__button__fb}`}
            >
                <span className={styles.share__button__icon}>
                    <img src="/icons/facebook.svg" />
                </span>
                share post
            </button>
            <button
                className={`${styles.share__button} ${styles.share__button__tw}`}
            >
                <span className={styles.share__button__icon}>
                    <img src="/icons/twitter.svg" />
                </span>
                tweet post
            </button>
            <button
                className={`${styles.share__button} ${styles.share__button__in}`}
            >
                <span className={styles.share__button__icon}>
                    <img src="/icons/instagram.svg" />
                </span>
                share post
            </button>
        </div>
    );
};
