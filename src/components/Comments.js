import useAxios from "../hooks/use-axios";

const Comments = ({ postId }) => {
  const { response, loading, error } = useAxios({
    method: "get",
    url: `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
  });

  return (
    <>
      {loading && <p>Loading comments...</p>}
      {error && <p>Unable to load comments</p>}
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
