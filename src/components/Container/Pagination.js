import React from "react";
import "./Pagination.css"

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    //calculo de quantas paginas serao criadas, usando o math ceil para arrendondar o numero

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='pagination'>
            {pages.map((page, index) => {
                return (

                    //acrescentando um botao para quantidade de paginas criadas

                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page === currentPage ? "active" : ""}>
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;