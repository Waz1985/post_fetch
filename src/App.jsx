import React, { useState, useEffect } from "react";
import PostSnipet from "./components/PostSnipet/PostSnipet";

function App() {
  const [posts, setPosts]
  useEffect(async()=>{
  const post = await fetch("https://jsonplaceholder.typicode.com/posts")
  setPosts(post);
  }, [])
  return (
  <div className="container">
    <PostSnipet />
  </div>
  );
}

export default App;
