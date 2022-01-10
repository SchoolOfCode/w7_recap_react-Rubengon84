import React from "react";
import "./CommentForm.css";

function CommentForm({handleIntroduce, handleGetAuthorInputValue , handleGetTextInputValue, text, author}) {


  return (
    <form>
      <h3>Make your comment</h3>
      <div className="inputs">    
        <label>Name<input type="text" name="author" onChange={(event => handleGetAuthorInputValue(event.target.value))} value={author}></input></label>
        <label>Comment<input type="text" name="comment" onChange={(event => handleGetTextInputValue(event.target.value))}  value={text}></input></label>
      </div>
      <input className="postButton" type="button" onClick={handleIntroduce} value="Post"></input>
    </form>
  )
}

export default CommentForm;