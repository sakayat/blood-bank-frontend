import React from "react";

const Pagination = ({
  pagination,
  previousPage,
  nextPage,
  currentPage,
  setCurrentPage,
  pageNumbers,
}) => {
  return (
    <div className="pagination flex gap-5 border py-2 px-4">
      <button
        className={`prev ${!pagination.prev ? "text-gray-400" : ""}`}
        onClick={previousPage}
        disabled={!pagination.prev}
      >
        Previous
      </button>
      {pageNumbers.map((page, i) => (
        <div className="" key={i}>
          <button
            onClick={() => setCurrentPage(page)}
            className={`${
              currentPage === page ? "default-color font-bold" : ""
            }`}
          >
            {page}
          </button>
        </div>
      ))}
      <button
        className={`next ${!pagination.next ? "text-gray-400" : ""}`}
        onClick={nextPage}
        disabled={!pagination.next}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
