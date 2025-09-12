import React from "react";
import { useSelector } from "react-redux";

import Menu from "./Menu";
import SmallMenuItems from "./SmallMenuItems";

const Sidebar = () => {
  const isSidebarOpen = useSelector((store) => store?.app.isSidebarOpen);

  return (
    <div
      className={`fixed left-0 top-0 h-[100vh] mt-14 pb-14 bg-white z-50 transition-transform duration-300 ease-in-out ${
        isSidebarOpen
          ? "w-60 translate-x-0"
          : "w-18 -translate-x-full sm:translate-x-0"
      }`}
    >
      {isSidebarOpen ? <Menu /> : <SmallMenuItems />}
    </div>
  );
};

export default Sidebar;

