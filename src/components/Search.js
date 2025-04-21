import React from "react";

const Search = () => {
  return (
    <div className="flex items-center border border-[#c6c6c6] rounded-4xl w-150 overflow-hidden">
      <input
        className="px-4 py-2 border-r border-[#c6c6c6] flex-[1_1_auto] placeholder:text-[#757575]"
        type="text"
        placeholder="Search"
      />
      <button
        type="submit"
        className="px-5 py-2 bg-[#f8f8f8] cursor-pointer"
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
