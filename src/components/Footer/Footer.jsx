import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Container } from "../Container";

// const socBrandsArr = [
//     "twitter",
//     "telegram plane",
//     "discord",
//     "medium",
//     "reddit",
// ];

const brandsArr = [
    "/images/brand_1.png",
    "/images/brand_2.png",
    "/images/brand_3.png",
    "/images/brand_4.png",
    "/images/brand_5.png",
    "/images/brand_6.png",
];

const Footer = () => {
    const renderSocBrands = () =>
        socBrandsArr.map((item, i) => (
            <a key={i} href="/">
                <Icon name={item} />
            </a>
        ));

    const renderBrands = () =>
        brandsArr.map((item, i) => (
            <a key={i} href="/">
                <img
                    className={styles.footer__brands__img}
                    src={item}
                    alt="brand"
                />
            </a>
        ));
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.footer__wrapper}>
                    <nav className={styles.footer__topNav}>
                        <Link href="/artists">
                            <a className={styles.footer__topNav__link}>
                                Artists
                            </a>
                        </Link>
                        <Link
                            className={styles.footer__topNav__link}
                            href="/collections"
                        >
                            <a className={styles.footer__topNav__link}>
                                Collections
                            </a>
                        </Link>
                        \
                        <Link
                            className={styles.footer__topNav__link}
                            href="/auctions"
                        >
                            <a className={styles.footer__topNav__link}>
                                Auctions
                            </a>
                        </Link>
                    </nav>
                    <div className={styles.footer__socBrands}>
                        {/* {renderSocBrands()} */}
                    </div>
                </div>
                <div className={styles.footer__wrapper}>
                    <div>
                        <img src={"/images/logo_inverted.png"} />
                        <div
                            className={`${styles.footer__socBrands} ${styles.footer__socBrandsMobile}`}
                        >
                            {/* {renderSocBrands()} */}
                        </div>
                        <div
                            className={`${styles.footer__brands} ${styles.footer__brandsMobile}`}
                        >
                            {renderBrands()}
                        </div>
                        <p className={styles.footer__copyright}>
                            Copyright © 2021 Rare.marketTheme by Puro
                        </p>
                        <nav className={styles.footer__bottomNav}>
                            <a
                                className={styles.footer__bottomNav__link}
                                href="/"
                            >
                                Privacy Policy
                            </a>
                            <a
                                className={styles.footer__bottomNav__link}
                                href="/"
                            >
                                Terms of Use
                            </a>
                            <a
                                className={styles.footer__bottomNav__link}
                                href="/"
                            >
                                Security
                            </a>
                            <a
                                className={styles.footer__bottomNav__link}
                                href="/"
                            >
                                Biscuits
                            </a>
                        </nav>
                    </div>
                    <div className={styles.footer__brands}>
                        {renderBrands()}
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
