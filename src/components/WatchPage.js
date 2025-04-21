import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../../store/appSlice";
import { useSearchParams } from "react-router";

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
      <div className="max-w-[calc((100vh_-56px_-24px_-136px)*(16/9))] flex">
        <div className="pr-6 pt-6 ml-6 mb-6 w-full">
          <div className="w-full h-[100vh] max-h-[493px] overflow-hidden rounded-xl">
            <iframe
              width="100%"
              height="100%"
              src={"https://www.youtube.com/embed/" + searchParams.get("v")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="w-[402px] min-w-[300px] flex-[1_1_auto]"></div>
      </div>
    </div>
  );
};

export default WatchPage;
