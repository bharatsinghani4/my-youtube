import React from "react";

import { MENU_ITEMS } from "../../utils/constants";

import MenuItems from "./MenuItems";

const Menu = () => {
  return (
    <div className="overflow-y-scroll h-full no-scrollbar">
      {MENU_ITEMS.map((item, index) => (
        <MenuItems
          key={index}
          menu={item}
        />
      ))}
    </div>
  );
};

export default Menu;
