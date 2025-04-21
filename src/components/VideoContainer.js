import React, { useEffect, useState } from "react";

import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEO_API_URL } from "../../utils/constants";
import { Link } from "react-router";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getMostPopularVideos();
  }, []);

  const getMostPopularVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEO_API_URL);
    const data = await response.json();

    console.log(data.items);
    setVideos(data.items);
  };

  return (
    <div className="mt-28 pl-6 pt-6 flex flex-wrap gap-2">
      {videos.map((video) => (
        <Link
          key={video.id}
          to={`/watch?v=${video.id}`}
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
