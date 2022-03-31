import useAxios from "../hooks/use-axios";

const Comments = ({ postId }) => {
  const { response, loading, error } = useAxios({
    method: "get",
    url: `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
  });

  return (
    <>
      {loading && <p>Loading...</p>}
      <ul>
        {postId &&
          response &&
          response.map((comment) => (
            <li key={comment.id}>
              <p>{comment.body}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Comments;
