import React, { useEffect, useState } from "react";
import { Link } from "react-router";

import VideoCard from "./VideoCard";
import {
  // GOOGLE_API_KEY,
  OPENCAGE_GEOCODING_API_KEY,
  YOUTUBE_VIDEO_API_URL,
} from "../../utils/constants";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [regionCode, setRegionCode] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (regionCode) {
      getMostPopularVideos();
    }
  }, [regionCode]);

  useEffect(() => {
    // Get user's geographical coordinates
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Call reverse geocoding API
          fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.OPENCAGE_GEOCODING_API_KEY}`
          )
            .then((res) => res.json())
            .then((data) => {
              if (
                data.results &&
                data.results[0] &&
                data.results[0].components &&
                data.results[0].components.country_code
              ) {
                setRegionCode(
                  data.results[0].components.country_code.toUpperCase()
                );
              } else {
                setError("Region code not found");
              }
            })
            .catch(() => setError("Failed to fetch geocoding data"));
        },
        () => setError("Geolocation permission denied or unavailable")
      );
    } else {
      setError("Geolocation not supported by this browser");
    }
  }, []);

  const getMostPopularVideos = async () => {
    const response = await fetch(
      YOUTUBE_VIDEO_API_URL + regionCode + "&key=" + process.env.GOOGLE_API_KEY
    );
    const data = await response.json();

    setVideos(data.items);
  };

  return (
    <div className="mt-28 pl-3 sm:pl-6 pt-6 pr-3 sm:pr-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
        {videos && videos.length > 0 ? (
          videos.map((video) => (
            <Link
              key={video.id}
              to={`/watch?v=${video.id}`}
              className="block"
            >
              <VideoCard info={video} />
            </Link>
          ))
        ) : (
          <p>Loading videos...</p>
        )}
      </div>
    </div>
  );
};

export default VideoContainer;












