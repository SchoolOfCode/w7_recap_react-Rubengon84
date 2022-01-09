import React from "react";


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
      <div>
        <span className="initials">{initialsName}</span>
        <span className="commentName">{comment.author}</span>
      </div>
      <p>{comment.text}</p>
    </li>
  )
}

export default Comment;