import React, { useEffect, useState } from "react";
import { Link } from "react-router";

import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API_URL } from "../../utils/constants";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getMostPopularVideos();
  }, []);

  const getMostPopularVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEO_API_URL);
    const data = await response.json();

    setVideos(data.items);
  };

  return (
    <div className="mt-28 pl-3 sm:pl-6 pt-6 pr-3 sm:pr-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
        {videos.map((video) => (
          <Link
            key={video.id}
            to={`/watch?v=${video.id}`}
            className="block"
          >
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;

