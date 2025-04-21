import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="w-85 p-2 rounded-lg hover:bg-black/10 transition-[all_.3s_cubic-bezier(.05,0,0,1)]">
      <div className="rounded-lg overflow-hidden">
        <img
          className="h-auto w-full"
          src={thumbnails.medium.url}
          alt={title}
        />
      </div>
      <div className="flex mt-3 gap-3">
        <div className="h-9 w-9 rounded-full overflow-hidden flex-shrink-0">
          <img
            src="https://yt3.ggpht.com/FeiTWbd9HnZddaElitnOj6IwbowY62jkdY9GdA_tlpKtoABiwrWrdiJSu6XwlGLaYCbBrLf6=s68-c-k-c0x00ffffff-no-rj"
            alt=""
          />
        </div>
        <div>
          <h2 className="overflow-hidden max-h-11 line-clamp-2 text-ellipsis whitespace-normal mb-1 leading-[22px] font-semibold">
            {title}
          </h2>
          <div className="text-[#606060] text-sm">
            {/* <a
              className="block w-max"
              href="https://www.youtube.com/@Zainulglassart"
              target="_blank"
            >
              {channelTitle}
            </a> */}
            {/* <Link
              to={"https://www.youtube.com/@Zainulglassart"}
              className="block w-max"
            >
              {channelTitle}
            </Link> */}
            <p>{channelTitle}</p>
            <span>{viewCount} views</span>
            <span className=" before:content-['•'] before:mx-1 before:my-0">
              {publishedAt} ago
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
