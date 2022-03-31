import Comments from "./Comments";

const Post = ({ post, author }) => {
  return (
    <>
      {post.body}
      {author && <p>{author.name}</p>}
      <Comments postId={post.id} />
    </>
  );
};

export default Post;
