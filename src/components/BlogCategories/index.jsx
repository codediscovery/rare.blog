import React from "react";
import styles from "./styles.module.scss";

export const BlogCategories = ({ categories }) => {

    const renderCategories = () =>
        categories.length &&
        categories.map((category, key) => (
            <a key={key} href="#">
                {category.name} ({category.pagesCount})
            </a>
        ));
    return (
        <div className={styles.categories}>
            <h2 className={styles.categories__title}>Categories</h2>

            <div className={styles.categories__list}>{renderCategories()}</div>
        </div>
    );
};
