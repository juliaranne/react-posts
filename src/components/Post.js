import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

const Post = ({ posts, users, userError }) => {
  const [post, setPost] = useState();
  const [author, setAuthor] = useState();
  const params = useParams();

  useEffect(() => {
    const activePost = posts.find(
      (post) => post.id === parseInt(params.postId, 10)
    );
    const activeUser = users.find((user) => user.id === activePost.userId);
    setPost(activePost);
    setAuthor(activeUser);
  }, [posts, users, params.postId]);

  return (
    <>
      {post && <div>{post.body}</div>}
      {author && <p>{author.name}</p>}
      <Comments postId={params.postId} />
    </>
  );
};

export default Post;
