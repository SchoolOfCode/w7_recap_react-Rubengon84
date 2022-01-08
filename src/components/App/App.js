import React from "react";
import logo from "../../logo.svg";
import "./App.css";
import BlogPost from "../BlogPost/BlogPost.js";
import CommentsSection from "../CommentsSection/CommentSection.js";

function App() {

  const blog = {
  title: "My First Post",
  author: "Chris Meah",
  datePosted: "20/11/2019",
  text: `
    A structure used in most apps and games.
    It's a way to keep doing the same.
    While a condition is true,
    Or for one to twenty-two.
    If endless, for errors we blame
    ..........
    Loop `,
  image:
    "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  alt: "A couple of coders."
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <BlogPost blog={blog} />
        <CommentsSection />
      </main>
    </div>
  );
}

export default App;
