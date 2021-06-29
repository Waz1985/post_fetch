import {Link} from "react-router-dom"
 const Post = (props) => {
  const id = props.match.params.id;
  console.log(id);
  let data = props.posts.find((post) => post.id == id);

  return data !== undefined ? (
    <div className="col-xs-4 col-lg-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{data.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{data.userId}</h6>
          <p class="card-text">{data.body}</p>
          <Link to="/">Go Back</Link>
        </div>
      </div>
    </div>
  ) : (
    "Not Found.."
  );
};
export default Post;
