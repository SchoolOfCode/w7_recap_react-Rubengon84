import React from "react";
import Comment from "../Comment/Comment.js"
import "./CommentList.css";

function CommentList({commentsList}) {
  
  return (
    <ul>{commentsList.map(element => 
      <Comment key={element.id} comment={element}/> )}
    </ul>
  )
}

export default CommentList;