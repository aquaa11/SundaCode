"use client";
import { useEffect, useState, useRef } from "react";
import ButtonScrollToTop from "./buttonScrollToTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Pagination from "./pagination";
import HandleDataKamus from "./handleDataKamus";
import SearchInput from "./searchInput";
import "./kamus.css";
import "../../lib/prism/prism-synthwave84.css";
export default function Kamus() {
  const [currentPage, setCurrentPage] = useState(1);
  const [newDataKamus, setNewDataKamus] = useState([]);
  useEffect(() => {}, [newDataKamus]);
  return (
    <main className="w-full min-h-[200vh] font-['Lexend']">
      <section id="hero">
        <div className="px-5 py-36 md:text-center md:py-60 text-4xl md:text-5xl font-bold text-primary">
          <h1>Kamusnya</h1>
          <h1>Programmer Sunda</h1>
          <p className="font-normal text-base mt-4 mx-auto">
            Menampilkan daftar kosakata tentang pemograman dengan terjemahan
            <br />
            Bahasa Sunda
          </p>
          <button
            aria-label="To Search"
            className="border border-primary ease-linear transition-all duration-300 bg-primary rounded mt-4 px-3 py-2  font-light text-sm text-secondary hover:border-secondary hover:shadow-md hover:shadow-primary hover:rounded-none"
          >
            Mulai Mencari <FontAwesomeIcon icon={faSearch} className="ml-2" />
          </button>
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
            setCurrentPage={setCurrentPage}
            setNewDataKamus={setNewDataKamus}
          />
        </div>
        <div className="bg-primary w-full py-3">
          <div
            id="data-kamus"
            className="grid-cols-1 md:max-w-screen-xl mx-auto grid px-3 md:grid-cols-2  gap-3"
          >
            <HandleDataKamus newDataKamus={newDataKamus} />
          </div>
        </div>
        <Pagination
          setCurrentPage={setCurrentPage}
          setNewDataKamus={setNewDataKamus}
          currentPage={currentPage}
        />
      </section>
    </main>
  );
}
