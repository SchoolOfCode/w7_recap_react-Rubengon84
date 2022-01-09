import React from "react";
import Comment from "../Comment/Comment.js"


function CommentList({commentsList}) {

  return (
    <ul>{commentsList.map(element => <Comment comment={element}/> )}
    </ul>
  )
}

export default CommentList;