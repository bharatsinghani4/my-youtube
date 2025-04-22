import React from "react";

import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {!!comment.replies.length && (
        <div className="mt-2 px-6 py-2 border-l border-l-gray-400 flex flex-col gap-2">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

export default CommentsList;
