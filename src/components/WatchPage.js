import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../../store/appSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((store) => store?.app.isSidebarOpen);
  const marginLeft = isSidebarOpen ? "ml-60" : "ml-0";

  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  return <div className={`mt-14 ${marginLeft} relative p-6`}>WatchPage</div>;
};

export default WatchPage;
