import React from "react";
import "./BlogPost.css";

function BlogPost({blog}) {

  return(
    <section>
      <h2>{blog.title}</h2>
      <div className="authorDate">
        <span>{blog.author}</span>
        <time>{blog.datePosted}</time>
      </div>
      <img src={blog.image} alt={blog.alt}></img>
      <p>{blog.text}</p>
    </section>
  )
}

export default BlogPost;