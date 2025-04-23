import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-start gap-2 p-2 bg-slate-200 rounded-xl">
      <div className="h-6 w-6 bg-gray-200 rounded-full overflow-hidden cursor-pointer flex-shrink-0">
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
            d="M12 20.5c1.894 0 3.643-.62 5.055-1.666a5.5 5.5 0 00-10.064-.105.755.755 0 01-.054.099A8.462 8.462 0 0012 20.5Zm4.079-5.189a7 7 0 012.142 2.48 8.5 8.5 0 10-12.443 0 7 7 0 0110.3-2.48ZM12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm2-12.5a2 2 0 11-4 0 2 2 0 014 0Zm1.5 0a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0Z"
            fillRule="evenodd"
          ></path>
        </svg>
      </div>
      <p className="leading-none text-sm">
        <span className="text-green-700 font-semibold mb-1 block">{name}</span>
        <span className="text-[#0f0f0f]">{message}</span>
      </p>
    </div>
  );
};

export default ChatMessage;
