const GOOGLE_API_KEY = "AIzaSyDYED5ddJC9flLfcqgkpTFLCDAq1XsFd2M";
export const YOUTUBE_VIDEO_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_SUGGESTIONS_API_URL =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_MESSAGES_MAX_COUNT = 200;

export const MENU_ITEMS = [
  {
    heading: "",
    items: [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "Shorts",
        path: "/shorts",
      },
      {
        title: "Subscriptions",
        path: "/subscriptions",
      },
    ],
  },
  {
    heading: "You",
    items: [
      {
        title: "History",
        path: "/history",
      },
      {
        title: "Playlists",
        path: "/playlists",
      },
      {
        title: "Watch Later",
        path: "/watch-later",
      },
      {
        title: "Liked Videos",
        path: "/liked-videos",
      },
    ],
  },
  {
    heading: "Explore",
    items: [
      {
        title: "Trending",
        path: "/trending",
      },
      {
        title: "Shopping",
        path: "/shopping",
      },
      {
        title: "Music",
        path: "/music",
      },
      {
        title: "Movies",
        path: "/movies",
      },
      {
        title: "Live",
        path: "/live",
      },
      {
        title: "Gaming",
        path: "/gaming",
      },
      {
        title: "News",
        path: "/news",
      },
      {
        title: "Sports",
        path: "/sports",
      },
      {
        title: "Courses",
        path: "/courses",
      },
      {
        title: "Fashion & Beauty",
        path: "/fashion-and-beauty",
      },
      {
        title: "Podcasts",
        path: "/podcasts",
      },
    ],
  },
  {
    heading: "More from Youtube",
    items: [
      {
        title: "Youtube Premium",
        path: "/premium",
      },
      {
        title: "Youtube Music",
        path: "/youtube-music",
      },
      {
        title: "Youtube Kids",
        path: "/youtube-kids",
      },
    ],
  },
  {
    heading: "",
    items: [
      {
        title: "Settings",
        path: "/settings",
      },
      {
        title: "Report History",
        path: "/report-history",
      },
      {
        title: "Help",
        path: "/help",
      },
      {
        title: "Send Feedback",
        path: "/feedback",
      },
    ],
  },
];
