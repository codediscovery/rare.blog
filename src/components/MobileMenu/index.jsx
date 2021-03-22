import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

export const MobileMenu = ({ isOpened }) => {
    return (
        <div
            className={`${styles.menu} ${isOpened ? styles.menu__opened : ""}`}
        >
            <div className={styles.menu__list}>
                <div className={styles.menu__list__mobile}>
                    <Link href="/artists">
                        <a className={`${styles.menu__list__link}`}>Artists</a>
                    </Link>
                    <Link href="/artists">
                        <a className={`${styles.menu__list__link}`}>
                            Collections
                        </a>
                    </Link>
                    <Link href="/artists">
                        <a className={`${styles.menu__list__link}`}>Auctions</a>
                    </Link>
                </div>
                <Link href="/artists">
                    <a className={`${styles.menu__list__link}`}>Mission</a>
                </Link>
                <Link href="/artists">
                    <a className={`${styles.menu__list__link}`}>Submissions</a>
                </Link>
                <Link href="/artists">
                    <a className={`${styles.menu__list__link}`}>Process</a>
                </Link>
                <Link href="/artists">
                    <a className={`${styles.menu__list__link}`}>Contact</a>
                </Link>
            </div>
        </div>
    );
};
