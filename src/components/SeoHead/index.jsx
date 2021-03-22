import React from "react";
import Head from "next/head";
import parse from "html-react-parser";

export const SeoHead = ({ seo }) => {
    const metaData = seo && parse(seo);
    return (
        <Head>
            {seo && metaData}
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@900&display=swap"
                rel="stylesheet"
            />
        </Head>
    );
};
