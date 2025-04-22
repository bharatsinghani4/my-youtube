import React from "react";
import { Link } from "react-router";

const MenuItems = ({ menu }) => {
  const { heading, items } = menu;

  return (
    <div className="p-3 pb-0">
      <div className="pb-3 border-b border-black/10">
        {heading && <h3 className="px-3 h-10 font-semibold">{heading}</h3>}
        <ul>
          {items.map((item) => (
            <li
              key={item.title}
              className="px-3 h-10 flex items-center hover:bg-black/5 w-full rounded-lg"
            >
              <Link
                to={item.path}
                className="w-full h-full rounded-lg flex items-center flex-[1_0_auto] text-sm"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuItems;
