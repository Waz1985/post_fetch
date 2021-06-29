import React, { useState, useEffect } from "react";
import PostSnipet from "./components/PostSnipet/PostSnipet";
import Post from "./components/Post/Post";
import { Switch, Route } from "react-router-dom";
function App() {
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    const post = await (
      await fetch("https://jsonplaceholder.typicode.com/posts")
    ).json();
    setPosts(post);
  }, []);

  return (
    <Switch>
      <Route
        path="/post/:id"
        exact
        children={(props) => (
          <Post {...props} posts={posts} />
          )}
      />
          <Route
            path="/"
            exact
            children={(props) => (
              <div className="container">
                <div className="row">
                  {posts.map((post) => (
                    <PostSnipet  data={post} />
                  ))}
                </div>
              </div>
            )}
          />
    </Switch>
  );
}

export default App;
