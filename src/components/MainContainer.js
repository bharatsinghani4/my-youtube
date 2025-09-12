import React from "react";
import { useSelector } from "react-redux";

import ChipsList from "./ChipsList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const isSidebarOpen = useSelector((store) => store?.app.isSidebarOpen);
  const marginLeft = "ml-0 sm:ml-18";

  return (
    <div
      className={`mt-14 ${marginLeft} relative bg-white transition-all duration-300 ease-in-out`}
    >
      <ChipsList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

