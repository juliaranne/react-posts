import useAxios from "../hooks/use-axios";

const Posts = () => {
  const { response, loading, error } = useAxios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts",
  });

  return (
    <>
      {loading && <p>Loading</p>}
      {response && response.map((post) => post.title)}
      {error && <p>{error.message}</p>}
    </>
  );
};

export default Posts;
