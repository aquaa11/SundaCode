import React from "react";

const Pagination = ({ totalItems, currentPage, setCurrentPage }) => {
  const changePage = (page) => {
    setCurrentPage(page);
  };

  const pagination = Array.from(
    { length: Math.ceil(totalItems / 10) },
    (_, index) => {
      const page = index + 1;
      return (
        <button
          key={page}
          onClick={() => changePage(page)}
          className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg bg-primary border border-white text-center align-middle text-xs font-medium uppercase text-white transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] ${
            currentPage === page ? "active" : ""
          }`}
          type="button"
          disabled={currentPage === page}
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            {page}
          </span>
        </button>
      );
    }
  );

  return pagination;
};

export default Pagination;
