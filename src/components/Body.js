import React from "react";
import { Outlet } from "react-router";

import Sidebar from "./Sidebar";
import Header from "./Header";

const Body = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
