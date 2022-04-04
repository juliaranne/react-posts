import { useParams } from "react-router-dom";
import Comments from "./Comments";

const Post = ({ post, author }) => {
  const params = useParams();
  console.log(params.postId);

  return (
    <>
      {post && <div>{post.body}</div>}
      {author && <p>{author.name}</p>}
      <Comments postId={post?.id} />
    </>
  );
};

export default Post;
