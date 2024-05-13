import React, { useState, useEffect, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dataKamus } from "./dataKamus";
import {
  faXmark,
  faRotate,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const SearchInput = ({ setNewDataKamus,setCurrentPage }) => {
  const [isSort, setSort] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isSortChecked, setSortChecked] = useState(false);
  const filteredData = useMemo(() => {
    if (inputValue.length >= 3) {
      return dataKamus.filter(
        (data) =>
          data.id.includes(inputValue) ||
          data.kosakata.includes(inputValue)
      );
    } else {
      return dataKamus;
    }
  }, [inputValue]);

  const sortedData = useMemo(() => {
    if (isSortChecked) {
      return filteredData
        .slice()
        .sort((a, b) => a.kosakata.localeCompare(b.kosakata));
    } else {
      return filteredData;
    }
  }, [filteredData, isSortChecked]);

  useEffect(() => {
    setCurrentPage(1)
    setNewDataKamus(sortedData);
  }, [sortedData, setNewDataKamus]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const resetSearch = () => {
    setInputValue("");
    if (isSort) {
      setSort(!isSort);
    }
    if (isSortChecked) {
      setSortChecked(!isSortChecked);
    }
  };

  return (
    <div className="flex md:inline-flex md:min-w-[50%] gap-2  flex-wrap bg-primary md:justify-center relative p-3 pb-0 md:rounded-t-md ">
      <div className="bg-secondary pl-3 py-3 rounded-md flex items-center">
        <button
          type="button"
          onClick={() => {
            setSort(!isSort);
          }}
          aria-label="Sort list"
          className="rounded-lg"
        >
          Sort By
        </button>
        {isSort ? (
          <div className="ml-3 pr-1 pl-4 flex gap-2 items-center text-sm border-s border-primary h-full">
            <form className="reset flex items-center space-x-2">
              <label className="text-black" htmlFor="sort-name">
                Name
              </label>
              <input
                onClick={() => {
                  setSortChecked(!isSortChecked);
                }}
                type="checkbox"
                name="sort"
                className="h-4 w-4"
              />
            </form>
          </div>
        ) : null}
        <button
          className="h-full w-fit pl-2 pr-3"
          onClick={() => {
            setSort(!isSort);
          }}
        >
          <FontAwesomeIcon
            icon={isSort ? faChevronLeft : faChevronRight}
            className="mx-1"
            size="xs"
          />
        </button>
      </div>

      <div className="flex-1 min-w-[30%]">
        <input
          value={inputValue}
          onChange={handleInputChange}
          className="w-full rounded-lg px-4 py-3 bg-white focus:outline-primary focus:shadow-md focus:shadow-purple transition-width"
          type="text"
          placeholder="Cari Kosakata"
          required
        />
        {inputValue ? (
          <button onClick={resetSearch} aria-label="Clear input">
            <FontAwesomeIcon
              size="sm"
              icon={faXmark}
              className="text-base  -translate-y-[90%] absolute  -translate-x-8"
            />
          </button>
        ) : null}
      </div>
      {inputValue.length > 2 && (
        <div className="flex gap-3 items-center">
          <button
            className="bg-secondary h-full rounded-md px-3"
            aria-label="Reset Page"
            onClick={resetSearch}
            type="button"
          >
            <FontAwesomeIcon icon={faRotate} className="text-lg" />
          </button>
          <span className="bg-secondary py-3 px-2 rounded-md">
            Found: {sortedData.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
