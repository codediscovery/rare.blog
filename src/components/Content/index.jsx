import ReactMarkdown from "react-markdown";
import styles from "./styles.module.scss";

const types = {
    excerpt: "excerpt",
    content: "content",
};

export const Content = ({ content, type }) => {
    return (
        <div
            className={`${styles.content} ${
                type === types.excerpt
                    ? styles.content__excerpt
                    : styles.content__content
            }`}
        >
            <ReactMarkdown children={content} allowDangerousHtml />
        </div>
    );
};
