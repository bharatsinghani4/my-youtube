import React, { useMemo, useState } from "react";

import { findNthPrime } from "../../utils/helper";

const UseMemoExample = () => {
  const [inputValue, setInputValue] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const nthPrime = useMemo(() => findNthPrime(inputValue), [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleToggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <div
      className={
        "fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-150 border border-black p-4 rounded-lg " +
        (isDarkTheme && "bg-black text-white")
      }
    >
      <input
        className="px-4 py-2 border border-slate-300 w-full rounded-lg"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <h2 className="mt-4">
        The{" "}
        <span className="font-bold">{!inputValue ? "0" : inputValue}th</span>{" "}
        Prime Number is: <span className="font-bold">{nthPrime}</span>
      </h2>
      <button
        className="px-4 py-2 bg-slate-500 text-white font-semibold rounded-lg mt-4 cursor-pointer"
        type="button"
        onClick={handleToggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default UseMemoExample;
