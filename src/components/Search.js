import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { YOUTUBE_SEARCH_SUGGESTIONS_API_URL } from "../../utils/constants";
import { storCachedReesults } from "../../store/searchSlice";

const Search = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchText]) {
        setSearchSuggestions(searchCache[searchText]);
      } else {
        fetchSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const fetchSearchSuggestions = async () => {
    const response = await fetch(
      YOUTUBE_SEARCH_SUGGESTIONS_API_URL + searchText
    );
    const data = await response.json();

    setSearchSuggestions(data[1]);
    dispatch(
      storCachedReesults({
        [searchText]: data[1],
      })
    );
  };

  const handleSearchInputFocus = () => {
    setShowSuggestions(true);
  };

  const handleSearchInputChange = async (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchInputBlur = () => {
    setShowSuggestions(false);
  };

  return (
    <div className="flex items-center w-150">
      <div className="flex-[1_1_auto] relative border border-[#c6c6c6] rounded-l-4xl">
        <input
          className="px-4 py-2 placeholder:text-[#757575] w-full"
          type="text"
          placeholder="Search"
          value={searchText}
          onBlur={handleSearchInputBlur}
          onChange={handleSearchInputChange}
          onFocus={handleSearchInputFocus}
        />
        {!!searchSuggestions.length && showSuggestions && (
          <div className="absolute left-0 top-12 rounded-xl bg-white z-9999 w-full shadow-lg pb-2 pt-4">
            {searchSuggestions.map((suggestion, index) => (
              <div
                className="flex items-center justify-between h-8 hover:bg-black/5 px-4 cursor-default"
                key={index}
              >
                <div className="flex items-center">
                  <div className="h-5 w-5 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      focusable="false"
                      aria-hidden="true"
                      className="h-full w-full"
                    >
                      <g>
                        <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path>
                      </g>
                    </svg>
                  </div>
                  <p className="leading-[1.25] font-semibold">{suggestion}</p>
                </div>
                <button
                  type="button"
                  className="text-[#3366cc] text-xs cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        type="submit"
        className="px-5 py-2 bg-[#f8f8f8] cursor-pointer overflow-hidden border border-[#c6c6c6] rounded-r-4xl border-l-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
          aria-hidden="true"
        >
          <path
            clipRule="evenodd"
            d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
            fillRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Search;
