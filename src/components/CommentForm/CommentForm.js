import React from "react";


function CommentForm({handleIntroduce, handleGetAuthorInputValue , handleGetTextInputValue, text, author}) {


  return (
    <form>
      <div>
        <input type="text" name="author" onChange={(event => handleGetAuthorInputValue(event.target.value))} value={author}></input>
        <input type="text" name="comment" onChange={(event => handleGetTextInputValue(event.target.value))}  value={text}></input>
      </div>
      <input type="submit" onClick={handleIntroduce}></input>
    </form>
  )
}

export default CommentForm;