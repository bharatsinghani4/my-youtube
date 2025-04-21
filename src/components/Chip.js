import React from "react";

const Chip = ({ label, selected = false }) => {
  const bgColor = selected ? "bg-black text-white" : "bg-black/5 text-black";

  return (
    <button
      type="text"
      className={`${bgColor} h-8 px-3 rounded-lg cursor-pointer text-sm leading-5`}
    >
      {label}
    </button>
  );
};

export default Chip;
