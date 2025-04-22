import React from "react";

import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Bharat Singhani",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [
      {
        name: "Bharat Singhani",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [
          {
            name: "Bharat Singhani",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [
              {
                name: "Bharat Singhani",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Bharat Singhani",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [
          {
            name: "Bharat Singhani",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [
              {
                name: "Bharat Singhani",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                replies: [],
              },

              {
                name: "Bharat Singhani",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                replies: [],
              },
            ],
          },

          {
            name: "Bharat Singhani",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Bharat Singhani",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [
      {
        name: "Bharat Singhani",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [
          {
            name: "Bharat Singhani",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [
              {
                name: "Bharat Singhani",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                replies: [],
              },

              {
                name: "Bharat Singhani",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                replies: [],
              },
            ],
          },

          {
            name: "Bharat Singhani",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Bharat Singhani",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [],
  },
  {
    name: "Bharat Singhani",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [
      {
        name: "Bharat Singhani",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [],
      },

      {
        name: "Bharat Singhani",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [
          {
            name: "Bharat Singhani",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [],
          },

          {
            name: "Bharat Singhani",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [
              {
                name: "Bharat Singhani",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                replies: [],
              },

              {
                name: "Bharat Singhani",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                replies: [],
              },

              {
                name: "Bharat Singhani",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                replies: [],
              },
            ],
          },

          {
            name: "Bharat Singhani",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [],
          },
        ],
      },

      {
        name: "Bharat Singhani",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [],
      },
    ],
  },
  {
    name: "Bharat Singhani",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [
      {
        name: "Bharat Singhani",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [
          {
            name: "Bharat Singhani",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [
              {
                name: "Bharat Singhani",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                replies: [],
              },

              {
                name: "Bharat Singhani",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                replies: [
                  {
                    name: "Bharat Singhani",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    replies: [],
                  },
                ],
              },

              {
                name: "Bharat Singhani",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                replies: [],
              },

              {
                name: "Bharat Singhani",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Bharat Singhani",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [],
  },
  {
    name: "Bharat Singhani",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [
      {
        name: "Bharat Singhani",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [
          {
            name: "Bharat Singhani",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [
              {
                name: "Bharat Singhani",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                replies: [
                  {
                    name: "Bharat Singhani",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    replies: [
                      {
                        name: "Bharat Singhani",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Bharat Singhani",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [
      {
        name: "Bharat Singhani",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [],
      },

      {
        name: "Bharat Singhani",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [
          {
            name: "Bharat Singhani",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [],
          },

          {
            name: "Bharat Singhani",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Bharat Singhani",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [],
  },
  {
    name: "Bharat Singhani",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    replies: [
      {
        name: "Bharat Singhani",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [
          {
            name: "Bharat Singhani",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [],
          },

          {
            name: "Bharat Singhani",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [],
          },

          {
            name: "Bharat Singhani",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [],
          },
        ],
      },

      {
        name: "Bharat Singhani",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [
          {
            name: "Bharat Singhani",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [],
          },
        ],
      },

      {
        name: "Bharat Singhani",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        replies: [
          {
            name: "Bharat Singhani",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [
              {
                name: "Bharat Singhani",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                replies: [],
              },

              {
                name: "Bharat Singhani",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                replies: [],
              },
            ],
          },

          {
            name: "Bharat Singhani",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comments = () => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">Comments</h2>
      <div className="flex flex-col py-6 gap-4">
        <CommentsList comments={commentsData} />
      </div>
    </div>
  );
};

export default Comments;
