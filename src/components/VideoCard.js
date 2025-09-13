import React from "react";
import {
  formatDateDiffWithUnit,
  formatNumberWithUnit,
} from "../../utils/helper";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="w-full p-2 rounded-lg hover:bg-black/10 transition-[all_.3s_cubic-bezier(.05,0,0,1)]">
      <div className="rounded-lg overflow-hidden">
        <img
          className="h-auto w-full aspect-video object-cover"
          src={thumbnails.medium.url}
          alt={title}
        />
      </div>
      <div className="flex mt-3 gap-3">
        <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full overflow-hidden flex-shrink-0">
          <img
            className="h-full w-full object-cover"
            src="https://yt3.ggpht.com/FeiTWbd9HnZddaElitnOj6IwbowY62jkdY9GdA_tlpKtoABiwrWrdiJSu6XwlGLaYCbBrLf6=s68-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="overflow-hidden max-h-11 line-clamp-2 text-ellipsis whitespace-normal mb-1 leading-[22px] font-semibold text-sm sm:text-base">
            {title}
          </h2>
          <div className="text-[#606060] text-xs sm:text-sm">
            <p className="truncate font-bold">{channelTitle}</p>
            <div className="flex flex-wrap items-center gap-1">
              <span>{formatNumberWithUnit(viewCount)} views</span>
              <span className="before:content-['•'] before:mx-1 before:my-0">
                {formatDateDiffWithUnit(publishedAt)} ago
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;






