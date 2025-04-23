import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router";

import Comments from "./Comments";
import { closeSidebar } from "../../store/appSlice";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const isSidebarOpen = useSelector((store) => store?.app.isSidebarOpen);
  const marginLeft = isSidebarOpen ? "ml-60" : "ml-0";

  useEffect(() => {
    dispatch(closeSidebar());
  }, []);

  return (
    <div className={`mt-14 ${marginLeft} relative`}>
      <div className="max-w-[1304px] w-full my-0 mx-auto flex">
        <div className="pr-6 pt-6 mb-6 w-full">
          <div className="w-full h-[100vh] max-h-[493px] overflow-hidden rounded-xl">
            <iframe
              width="100%"
              height="100%"
              src={
                "https://www.youtube.com/embed/" +
                searchParams.get("v") +
                "?autoplay=1&mute=1"
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <Comments />
        </div>
        <div className="w-full max-w-100.5 min-w-75 flex-[1_1_100%] pr-6 pt-6">
          <LiveChat />
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
