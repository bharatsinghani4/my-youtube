import React from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router";

import Comments from "./Comments";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const isSidebarOpen = useSelector((store) => store?.app.isSidebarOpen);
  const marginLeft = "ml-0";

  return (
    <div
      className={`mt-14 ${marginLeft} relative transition-all duration-300 ease-in-out`}
    >
      <div className="max-w-[1304px] w-full my-0 mx-auto px-3 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="flex-1 pt-6 mb-6">
            <div className="w-full aspect-video overflow-hidden rounded-xl">
              <iframe
                width="100%"
                height="100%"
                src={
                  "https://www.youtube.com/embed/" +
                  searchParams.get("v") +
                  "?autoplay=1&mute=1&playsinline=1"
                }
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              ></iframe>
            </div>
            <LiveChat />
            <Comments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;

