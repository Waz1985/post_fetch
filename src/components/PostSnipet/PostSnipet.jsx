const PostSnipet = ({ setearId ,data }) => {
    const onPostChangeHandler = ()=>{
        setearId(data.id)
    }
  return (
    <div className="col-xs-4 col-lg-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{data.title}</h5>
          <input type="button" value="Ver post" onClick={onPostChangeHandler}/>
        </div>
      </div>
    </div>
  );
};
export default PostSnipet;
