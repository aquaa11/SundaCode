"use client";
import { useEffect, useState } from "react";
import ButtonScrollToTop from "./components/buttonScrollToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Pagination from "./components/pagination";
import HandleDataKamus from "./components/handleDataKamus";
import SearchInput from "./components/searchInput";
import { dataKamus } from "@/lib/kamus/dataKamus";
import "@/lib/prism/prism.css";

export default function Kamus() {
  const [currentPage, setCurrentPage] = useState(1);
  const [newDataKamus, setNewDataKamus] = useState(dataKamus);

  useEffect(() => {
    setNewDataKamus(dataKamus);
  }, []);
  return (
    <main className="w-full">
      <section id="hero">
        <div className="px-5 py-36 md:text-center md:py-60 text-4xl md:text-5xl font-bold text-primary">
          <h1>Kamusnya</h1>
          <h1>Programmer Sunda</h1>
          <p className="font-normal text-base mt-4 mx-auto">
            Menampilkan daftar kosakata tentang pemograman dengan terjemahan
            <br />
            Bahasa Sunda
          </p>
          <div>
            <button
              onClick={() => {
                window.scrollTo({
                  top: 500,
                  behavior: "smooth",
                });
              }}
              type="button"
              aria-label="To Search"
              className="border border-primary ease-linear transition-all duration-300 bg-primary rounded mt-4 px-3 py-2  font-light text-sm text-secondary hover:border-secondary hover:shadow-md hover:shadow-primary hover:rounded-none"
            >
              Mulai Mencari <FontAwesomeIcon icon={faSearch} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
      <section id="main" className="md:text-center">
        <div className="max-w-screen-xl mx-auto relative">
          <ButtonScrollToTop />
          <h1 className="text-secondary bg-primary py-3 px-4 font-semibold rounded-t-md inline-block">
            Daftar Kosakata
          </h1>
          <br />
          <SearchInput
            setNewDataKamus={setNewDataKamus}
            newDataKamus={newDataKamus}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <div className="bg-primary w-full py-3">
          <HandleDataKamus
            newDataKamus={newDataKamus.slice(
              (currentPage - 1) * 10,
              currentPage * 10
            )}
          />
        </div>
        <div className="w-full text-center">
          <div className="inline-flex mx-auto flex-wrap justify-center gap-2 bg-primary rounded-b-md px-3 pb-3">
            <button
              className="flex items-center py-3 px-4  text-xs font-bold text-center text-white border border-white uppercase align-middle transition-all rounded-lg select-none"
              aria-label="Previous Page"
              onClick={() => {
                setCurrentPage((prevPage) => prevPage - 1);
              }}
              disabled={currentPage === 1}
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-xs" />
            </button>
            <Pagination
              totalItems={newDataKamus.length}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <button
              className="flex items-center py-3 px-4  text-xs font-bold text-center text-white border border-white  uppercase align-middle transition-all rounded-lg select-none"
              aria-label="Next Page"
              onClick={() => {
                setCurrentPage((prevPage) => prevPage + 1);
              }}
              disabled={currentPage === Math.ceil(dataKamus.length / 10)}
              type="button"
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
