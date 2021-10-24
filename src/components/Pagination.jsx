import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    console.log(pageNumbers);

    console.log(currentPage);

    return (
        <nav>
            <ul className="pagination">
                {currentPage !== 1 ? (
                    <li key={pageNumbers[0]} className="page-item">
                        <a
                            onClick={() => paginate(pageNumbers[0])}
                            href={`#`}
                            className="page-link"
                        >
                            First
                        </a>
                    </li>
                ) : (
                    <li key={pageNumbers[0]} className="page-item">
                        <a
                            onClick={() => paginate(pageNumbers[0])}
                            href={`#`}
                            className="page-link"
                        >
                            {pageNumbers[0]}
                        </a>
                    </li>
                )}

                {/* Realpage + 1 */}
                {currentPage &&
                currentPage !== pageNumbers.length &&
                currentPage !== pageNumbers.length - 1 ? (
                    <li key={pageNumbers[currentPage]} className="page-item">
                        <a
                            onClick={() => paginate(pageNumbers[currentPage])}
                            href={`#`}
                            className="page-link"
                        >
                            {pageNumbers[currentPage]}
                        </a>
                    </li>
                ) : (
                    <li
                        key={pageNumbers[currentPage - 2]}
                        className="page-item"
                    >
                        <a
                            onClick={() =>
                                paginate(pageNumbers[currentPage - 2])
                            }
                            href={`#`}
                            className="page-link"
                        >
                            {pageNumbers[currentPage - 2]}
                        </a>
                    </li>
                )}

                {currentPage &&
                currentPage !== pageNumbers.length &&
                currentPage !== pageNumbers.length - 1 ? (
                    <li key={"..."} className="page-item">
                        <a
                            onClick={() => "..."}
                            href={`#`}
                            className="page-link"
                        >
                            ...
                        </a>
                    </li>
                ) : (
                    <></>
                )}

                {currentPage &&
                currentPage !== pageNumbers.length &&
                currentPage !== pageNumbers.length - 1 ? (
                    <li
                        key={pageNumbers[pageNumbers.length - 1]}
                        className="page-item"
                    >
                        <a
                            onClick={() =>
                                paginate(pageNumbers[pageNumbers.length - 1])
                            }
                            href={`#`}
                            className="page-link"
                        >
                            Last
                        </a>
                    </li>
                ) : (
                    <></>
                )}
            </ul>
        </nav>
    );
};

export default Pagination;
