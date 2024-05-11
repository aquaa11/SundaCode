import React, { useEffect, useState } from "react";
import { dataKamus } from "./dataKamus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faSearch,
  faRotate,
} from "@fortawesome/free-solid-svg-icons";
const SearchInput = ({ setCurrentPage, setNewDataKamus }) => {
  const [inputValue, setInputValue] = useState("");
  const [isReset, setReset] = useState(false);
  const handleInputChange = (event) => {
    setReset(false);
    const value = event.target.value;
    setInputValue(value);
    if (value.length >= 3) {
      setCurrentPage(1);
      setNewDataKamus(
        dataKamus.filter((data) => {
          return (
            data.id.includes(value) ||
            data.kosakata.includes(value) ||
            data.pengertian.includes(value) ||
            data.note.includes(value) ||
            data.contohkode.includes(value)
          );
        })
      );
    } else {
      setNewDataKamus(dataKamus);
    }
  };

  return (
    <div className="flex md:inline-flex bg-primary w-full md:w-[55%] font-['Lexend'] md:justify-center relative p-3 pb-0 md:rounded-t-md transition-all">
      <button
        aria-label="Filter"
        className="rounded-lg mr-3 px-3 py-3 min-w-fit bg-white"
      >
        Filter By{" "}
        <FontAwesomeIcon icon={faChevronRight} className="ml-1" size="xs" />
      </button>
      <input
        value={inputValue}
        onChange={handleInputChange}
        className="transition-all duration-300 rounded-lg px-4 py-3 bg-white flex-1 focus:outline-primary focus:shadow-md focus:shadow-purple"
        type="text"
        placeholder="Cari Kosakata"
        required
      />
      <button
        aria-label="Reset Page"
        className={`transition-all ml-3 px-3 bg-white rounded-md ${
          inputValue.length > 2 && !isReset ? "block" : "hidden"
        }`}
        onClick={() => {
          setCurrentPage(1);
          setReset(!isReset);
          setNewDataKamus(dataKamus);
        }}
      >
        <FontAwesomeIcon icon={faRotate} className="text-lg" />
      </button>
      <button aria-label="Search" onClick={handleInputChange}>
        <FontAwesomeIcon
          size="sm"
          load
          icon={faSearch}
          className={`text-base ml-2 transition-all -translate-y-1/2 right-6 absolute fa fa-magnifying-glass
          ${
            inputValue.length > 2 && !isReset
              ? "-translate-x-16"
              : "-translate-x-2"
          }`}
        />
      </button>
    </div>
  );
};

export default SearchInput;
