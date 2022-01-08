import React from "react";
import CommentsList from "../CommentList/CommentList.js";
import CommentForm from "../CommentForm/CommentForm.js";

function CommentSection () {
  return (
    <section>
      <CommentsList />
      <CommentForm />
    </section>
  )
}


export default CommentSection;