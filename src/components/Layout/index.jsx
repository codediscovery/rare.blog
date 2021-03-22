import Footer from "../Footer/Footer";
import { Header } from "../Header";
import { SeoHead } from "../SeoHead";

export const Layout = ({ children, seo }) => {
    return (
        <div>
            <SeoHead seo={seo} />
            <Header />
            {children}
            <Footer />
        </div>
    );
};
