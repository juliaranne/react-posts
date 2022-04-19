import { Link } from "react-router-dom";

const Posts = ({ posts, loading, error }) => {
  return (
    <>
      {loading && <p>Loading</p>}
      {posts &&
        posts.map((post) => (
          <article key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
          </article>
        ))}
      {error && <p>{error.message}</p>}
    </>
  );
};

export default Posts;
