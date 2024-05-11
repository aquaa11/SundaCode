import React, { useEffect } from "react";
import { dataKamusLength, dataKamus } from "./dataKamus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight,faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import next from "next";
const Pagination = ({ currentPage, setCurrentPage, setNewDataKamus }) => {
  useEffect(() => {
    setNewDataKamus(
      dataKamus.filter(
        (data) =>
          data.id > (currentPage - 1) * 10 && data.id < currentPage * 10 + 1
      )
    );
  }, [currentPage, setNewDataKamus, setCurrentPage]);
  function scrollToTop() {
    window.scrollTo({
      top: 400,
      left: 0,
      behavior: "smooth",
    });
  }
  const changePage = (i) => {
    setCurrentPage(i);
    scrollToTop()
};

const nextPage = () => {
    setCurrentPage(currentPage + 1);
    scrollToTop()
};

const prevPage = () => {
    setCurrentPage(currentPage - 1);
    scrollToTop()
  };

  const displayPagination = () => {
    const pagination = [];
    for (let i = 0; i < dataKamusLength / 10; i++) {
      pagination.push(
        <button
          aria-label="pagination"
          key={i + 1}
          onClick={() => changePage(i + 1)}
          className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg bg-primary border border-white text-center align-middle text-xs font-medium uppercase text-white transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] ${
            currentPage === i + 1 ? "active" : ""
          }`}
          type="button"
          disabled={currentPage === i + 1}
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            {i + 1}
          </span>
        </button>
      );
    }
    return pagination;
  };

  return (
    <div className="w-full text-center">
      <div className="inline-flex mx-auto justify-center gap-2 bg-primary rounded-b-md px-3 pb-3 font-['Lexend']">
        <button
          className="flex items-center py-3 px-4  text-xs font-bold text-center text-white border border-white uppercase align-middle transition-all rounded-lg select-none"
          aria-label="Previous Page"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-xs"/>
        </button>
        {displayPagination()}
        <button
          className="flex items-center py-3 px-4  text-xs font-bold text-center text-white border border-white  uppercase align-middle transition-all rounded-lg select-none"
          aria-label="Next Page"
          onClick={nextPage}
          disabled={currentPage === dataKamusLength / 10}
          type="button"
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-xs"/>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
