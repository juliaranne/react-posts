import useAxios from "../hooks/use-axios";

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
            <h2 onClick={() => viewPost(post)}>{post.title}</h2>
          </article>
        ))}
      {error && <p>{error.message}</p>}
    </>
  );
};

export default Posts;
