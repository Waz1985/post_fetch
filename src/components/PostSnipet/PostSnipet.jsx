import { Link } from "react-router-dom";
const PostSnipet = ({ data }) => {
  return (
    <div className="col-xs-4 col-lg-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{data.title}</h5>
          <Link to={`/post/${data.id}`}>See More</Link>
        </div>
      </div>
    </div>
  );
};
export default PostSnipet;
