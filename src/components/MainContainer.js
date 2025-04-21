import React from "react";
import { useSelector } from "react-redux";

import ChipsList from "./ChipsList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const isSidebarOpen = useSelector((store) => store?.app.isSidebarOpen);
  const marginLeft = isSidebarOpen ? "ml-60" : "ml-18";

  return (
    <div className={`mt-14 ${marginLeft} relative bg-white`}>
      <ChipsList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
