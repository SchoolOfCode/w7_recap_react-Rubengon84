import React from "react";
import "./Comment.css";

function Comment({comment}) {

  function initials(name) {
    const words = name.split(" ");
    let initials = "";
    for(let i=0; i< words.length; i++) {
      initials = initials + words[i][0].toUpperCase();
    }
    return initials;
  }
  console.log(comment.name);
  const initialsName = initials(comment.author);


  return (
    <li>
      <div className="commentHeader">
        <span className="initials">{initialsName}</span>
        <span className="commentName">{comment.author}</span>
      </div>
      <p className="commentText">{comment.text}</p>
    </li>
  )
}

export default Comment;