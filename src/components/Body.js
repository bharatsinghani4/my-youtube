import React from "react";
import { Outlet } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import Sidebar from "./Sidebar";
import Header from "./Header";
import { toggleSidebar } from "../../store/appSlice";

const Body = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((store) => store?.app.isSidebarOpen);

  return (
    <div>
      <Header />
      <Sidebar />
      {/* Backdrop overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onClick={() => dispatch(toggleSidebar())}
        />
      )}
      <div onClick={() => isSidebarOpen && dispatch(toggleSidebar())}>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;

