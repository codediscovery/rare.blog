import React from "react";
import "../../public/fonts.css";
import "../assets/index.scss";
import "../assets/normalize.css";
import "../assets/pagination.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
