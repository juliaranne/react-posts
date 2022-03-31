import useAxios from "../hooks/use-axios";

const Posts = () => {
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
            <h2>{post.title}</h2>
          </article>
        ))}
      {error && <p>{error.message}</p>}
    </>
  );
};

export default Posts;
