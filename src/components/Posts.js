import useAxios from "../hooks/use-axios";
import { Link } from "react-router-dom";

const Posts = ({ viewPost }) => {
  const { response, loading, error } = useAxios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts",
  });

  return (
    <>
      {loading && <p>Loading</p>}
      {response &&
        response.map((post) => (
          <article key={post.id}>
            <Link to={`/posts/${post.id}`} onClick={() => viewPost(post)}>
              <h2>{post.title}</h2>
            </Link>
          </article>
        ))}
      {error && <p>{error.message}</p>}
    </>
  );
};

export default Posts;
