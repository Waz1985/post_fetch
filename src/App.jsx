import React, { useState, useEffect } from "react";
import PostSnipet from "./components/PostSnipet/PostSnipet";
import Post from "./components/Post/Post";

function App() {
  const [id, setId] = useState(-1)
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();
    setPosts(post);
  }, []);
  
 const setearId= (id) => {
   setId(id)
 }
 let postSeleccionado = null;
if(id !== -1){
  postSeleccionado = posts.find((post)=>post.id === id)
}
  return (
    <div className="container">
      <div className="row">
        {(id===-1) ? posts.map(post=>(<PostSnipet setearId={setearId} data={post}/>)) :  <Post setearId={setearId} postSel={postSeleccionado}/>}
        
      </div>
    </div>
  );
}

export default App;
