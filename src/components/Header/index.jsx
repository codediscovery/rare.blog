import React, { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import { Container } from "../Container";
import { MobileMenu } from "../MobileMenu";

export const Header = () => {
    const [isMobileMenuOpened, toggleMobileMenu] = useState(false);
    const handleToggleMobileMenu = () => toggleMobileMenu(!isMobileMenuOpened);
    return (
        <>
            <div className={`${styles.header}`}>
                <Container>
                    <div className={styles.header__container}>
                        <div className={styles.header__left}>
                            <a href="/">
                                <img className={styles.header__logo} src="/images/logo.png" alt="logo" />
                            </a>
                            <nav className={styles.header__nav}>
                                <Link href="/artists">
                                    <a
                                        className={`${styles.header__nav__link}`}
                                    >
                                        Artists
                                    </a>
                                </Link>
                                <Link href="/collections">
                                    <a
                                        className={`${styles.header__nav__link}`}
                                    >
                                        Collections
                                    </a>
                                </Link>
                                <Link href="/auctions">
                                    <a
                                        className={`${styles.header__nav__link}`}
                                    >
                                        Auctions
                                    </a>
                                </Link>
                            </nav>
                        </div>

                        <div>
                            <div className={styles.header__nav__buttons}>
                                <button
                                    onClick={handleToggleMobileMenu}
                                    className={`${styles.header__menuButton} ${
                                        isMobileMenuOpened
                                            ? styles.header__menuButton__active
                                            : ""
                                    }`}
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <MobileMenu isOpened={isMobileMenuOpened} />
        </>
    );
};
