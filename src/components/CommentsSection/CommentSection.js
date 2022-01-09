import React, {useState} from "react";
import "./CommentsSection.css";
import CommentsList from "../CommentList/CommentList.js";
import CommentForm from "../CommentForm/CommentForm.js";

function CommentSection () {
  // declare and initialize state varibles
  const [commentsList, setCommentsList] = useState([
    {
      id: 1 ,
      author: "Billy Bootcamper",
      text: "Hello, great post"
     }
  ]);

  const [comment, setComment] = useState({id:"", author:"", text:""})
  const [author, setAuthor] = useState("Ruben");
  const [text, setText] = useState("");
  // function for getting the value from author input
  function getAuthorInputValue(author) {
   setAuthor(author);
   setComment({author: author, text: text})
  }
  // function for getting the text from the text input comment 
   function getTextInputValue(text) {
   setText(text);
   setComment({id: createId() ,author: author, text:text})
  }
  // function fro creating a unique Id every time that a new comment is created 
  function createId() {
    let commentId;
    // if there is not elements in the commentsList, the comment will get id 1 
    if (commentsList.length === 0) {
      commentId = 1;
    // if there is at least one element in the commentList , the comment will get the last id plus 1   
    }else {
      commentId = commentsList[commentsList.length - 1].id + 1;
    }
    // return comment id
    return commentId;
  }
  // function for introducing the comment object into commentsList
  function introduceComment (event) {
    event.preventDefault();
    // is there is not text in comments, it will pop an alert and it won't introduce any comment in commentsList
    if(text === "") {
     alert("Introduce a comment");
    // introduce the comment in commentList and clean comment value 
    } else {
    setCommentsList([...commentsList, comment]);
    setText("");
    } 
  }

  console.log(commentsList);
  return (
    <section>
      <CommentsList commentsList={commentsList}/>
      <CommentForm 
        handleGetAuthorInputValue={getAuthorInputValue} 
        handleGetTextInputValue={getTextInputValue}
        handleIntroduce={introduceComment}
        text={text}
        author={author}
      />
    </section>
  )
}


export default CommentSection;