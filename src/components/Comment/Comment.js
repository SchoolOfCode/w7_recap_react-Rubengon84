import React from "react";


function Comment({comment}) {
  return (
    <div>
      <div>
        <span className="initials"></span>
        <span className="commentName">{comment.author}</span>
      </div>
      <p>{comment.text}</p>
    </div>
  )
}

export default Comment;