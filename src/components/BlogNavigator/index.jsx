import ReactPaginate from "react-paginate";
import styles from "./styles.module.scss";

let firstRender = true;

export const BlogNavigator = ({ pages, currPage }) => {
    const handlePageClick = (event) => {
        if (!firstRender) {
            event.selected === 0
                ? window.location.replace("/")
                : window.location.replace(`/page/${event.selected + 1}`);
        }
        firstRender = false;
    };
    return (
        <div className={styles.navigation}>
            <ReactPaginate
                previousClassName={styles.prevButton}
                nextClassName={styles.nextButton}
                previousLabel={""}
                nextLabel={""}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                onPageChange={(e) => handlePageClick(e)}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
                initialPage={currPage - 1}
            />
        </div>
    );
};
