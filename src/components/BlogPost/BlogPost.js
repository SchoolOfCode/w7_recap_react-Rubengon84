import React from "react";

function BlogPost({blog}) {

  return(
    <section>
      <h2>{blog.title}</h2>
      <span>{blog.author}</span>
      <time>{blog.datePosted}</time>
      <img src={blog.image} alt={blog.alt}></img>
      <p>{blog.text}</p>
    </section>
  )
}

export default BlogPost;