import React from "react";
import styles from "./styles.module.scss";

export const BlogSearch = () => {
    return (
        <div className={styles.inputGroup}>
            <input
                className={styles.inputGroup__input}
                type="text"
                placeholder="Search"
            />
            <img
                className={styles.inputGroup__icon}
                src={"/icons/search.svg"}
                alt="search"
            />
        </div>
    );
};
