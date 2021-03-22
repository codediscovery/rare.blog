import { Container } from "../Container";
import { Layout } from "../Layout";
import styles from "./styles.module.scss";

export const ErrorPage = () => {
    return (
        <Layout>
            <Container>
                <div className={styles.error}>
                    <h2 className={styles.error__message}>ooops.....</h2>
                    <h1 className={styles.error__title}>404</h1>

                    <div className={styles.error__container}>
                        <div className={styles.error__container__left}>
                            <a
                                className={styles.error__container__link}
                                href="!#"
                            >
                                <img
                                    src="/icons/arrow-left-light.svg"
                                    alt="go-back"
                                />
                                Go back
                            </a>
                        </div>
                        <div className={styles.error__container__right}>
                            <h3 className={styles.error__container__title}>
                                Page not found
                            </h3>
                            <p className={styles.error__container__text}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vestibulum suscipit nisi et
                                pellentesque maximus. Nunc ornare tincidunt
                                egestasLorem ipsum
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};
