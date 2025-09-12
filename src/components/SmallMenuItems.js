import React from "react";
import { Link } from "react-router";

const SmallMenuItems = () => {
  if (window.location.href.includes("/watch")) {
    return null;
  }

  const smallMenuItems = [
    { title: "Home", path: "/", icon: "🏠" },
    { title: "Shorts", path: "/shorts", icon: "📺" },
    { title: "Subscriptions", path: "/subscriptions", icon: "📋" },
    { title: "Library", path: "/library", icon: "📚" },
    { title: "History", path: "/history", icon: "🕒" },
  ];

  return (
    <div className="overflow-y-scroll h-full no-scrollbar">
      <div className="p-2">
        {smallMenuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex flex-col items-center p-2 hover:bg-black/5 rounded-lg mb-1"
          >
            <span className="text-lg mb-1">{item.icon}</span>
            <span className="text-xs text-center leading-tight">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SmallMenuItems;

