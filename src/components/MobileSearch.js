import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { YOUTUBE_SEARCH_SUGGESTIONS_API_URL } from "../../utils/constants";
import { storCachedReesults } from "../../store/searchSlice";

const MobileSearch = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const searchCache = useSelector((store) => store.search);

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

  const handleSearchInputChange = async (e) => {
    setSearchText(e.target.value);
    if (searchCache[e.target.value]) {
      setSearchSuggestions(searchCache[e.target.value]);
    } else if (e.target.value.length > 0) {
      fetchSearchSuggestions();
    } else {
      setSearchSuggestions([]);
    }
  };

  const handleSearchInputFocus = () => {
    setShowSuggestions(true);
  };

  const handleSearchInputBlur = () => {
    setShowSuggestions(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="bg-white w-full max-w-md mx-4 rounded-lg shadow-lg">
        <div className="p-4 border-b border-[#e5e5e5]">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-1 hover:bg-[#f2f2f2] rounded-full transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                aria-hidden="true"
                className="text-[#0f0f0f]"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </button>
            <div className="flex-1 relative">
              <input
                className="w-full px-4 py-2.5 border border-[#cccccc] rounded-full text-sm placeholder:text-[#606060] focus:outline-none focus:border-[#1f62ae] transition-colors duration-200"
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={handleSearchInputChange}
                onFocus={handleSearchInputFocus}
                onBlur={handleSearchInputBlur}
                autoFocus
              />
              {!!searchSuggestions.length && showSuggestions && (
                <div className="absolute left-0 top-12 rounded-xl bg-white z-50 w-full shadow-lg border border-[#e5e5e5] pb-2 pt-4 max-h-80 overflow-y-auto">
                  {searchSuggestions.map((suggestion, index) => (
                    <div
                      className="flex items-center justify-between h-10 hover:bg-[#f2f2f2] px-4 cursor-pointer transition-colors duration-150"
                      key={index}
                    >
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="h-5 w-5 mr-4 text-[#606060]">
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
                        <p className="text-[#0f0f0f] font-normal text-sm truncate">
                          {suggestion}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="text-[#065fd4] text-xs hover:text-[#065fd4] font-normal px-2 py-1 hover:bg-[#f2f2f2] rounded transition-colors duration-150"
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
              className="px-6 py-2.5 bg-[#f8f8f8] hover:bg-[#f0f0f0] cursor-pointer border border-[#cccccc] rounded-full transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                height="20"
                viewBox="0 0 24 24"
                width="20"
                focusable="false"
                aria-hidden="true"
                className="text-[#606060]"
              >
                <path
                  clipRule="evenodd"
                  d="M16.296 16.996a8 8 0 11.707-.708l3.909 3.91-.707.707-3.909-3.909zM18 11a7 7 0 00-14 0 7 7 0 1014 0z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSearch;

