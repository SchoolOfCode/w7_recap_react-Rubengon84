import React, {useState} from "react";
import CommentsList from "../CommentList/CommentList.js";
import CommentForm from "../CommentForm/CommentForm.js";

function CommentSection () {

  const [commentsList, setCommentsList] = useState([]);
  const [comment, setComment] = useState({author:"", text:""})
  const [author, setAuthor] = useState("Ruben");
  const [text, setText] = useState("");

  function getAuthorInputValue(author) {
   setAuthor(author);
   setComment({author: author, text: text})
  }

   function getTextInputValue(text) {
   setText(text);
   setComment({author: author, text:text})
  }

  function introduceComment (event) {
    event.preventDefault();
    if(text === "") {
      return;
    } else {
    setCommentsList([...commentsList, comment]);
    setText("");
    } 
  }

  console.log(commentsList);
  return (
    <section>
      <CommentsList commentsList={commentsList}/>
      <CommentForm handleGetAuthorInputValue={getAuthorInputValue} handleGetTextInputValue={getTextInputValue}
        handleIntroduce={introduceComment}
        text={text}
        author={author}
      />
    </section>
  )
}


export default CommentSection;