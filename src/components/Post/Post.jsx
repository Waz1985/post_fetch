const Post = ({ setearId, postSel }) => {
    const onClickRegresarPosts = () =>{
        setearId(-1);
    }

  return (
    <div className="col-xs-4 col-lg-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{postSel.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{postSel.userId}</h6>
          <p class="card-text">{postSel.body}</p>        
        </div>
        <input type="button" value="Regresar" onClick={onClickRegresarPosts} />
      </div>
    </div>
  );
};
export default Post;
