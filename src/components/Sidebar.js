import React from "react";
import { useSelector } from "react-redux";

import Menu from "./Menu";
import SmallMenuItems from "./SmallMenuItems";

const Sidebar = () => {
  const isSidebarOpen = useSelector((store) => store?.app.isSidebarOpen);

  return (
    <div className="fixed left-0 top-0 h-[100vh] w-60 mt-14 pb-14">
      {isSidebarOpen ? <Menu /> : <SmallMenuItems />}
    </div>
  );
};

export default Sidebar;
