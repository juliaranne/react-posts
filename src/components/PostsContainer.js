import { useEffect, useState } from "react";
import useAxios from "../hooks/use-axios";
import Posts from "./Posts";
import Post from "./Post";

const PostsContainer = () => {
  const { response, loading, error } = useAxios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users",
  });
  const [activePost, setActivePost] = useState(null);
  const [author, setAuthor] = useState();

  useEffect(() => {
    if (activePost) {
      const user = response.find((user) => user.id === activePost.userId);
      setAuthor(user);
    }
  }, [activePost, response]);

  const viewPost = (post) => {
    setActivePost(post);
  };

  return (
    <>
      {activePost ? (
        <Post post={activePost} author={author} />
      ) : (
        <Posts viewPost={viewPost} />
      )}
    </>
  );
};

export default PostsContainer;
