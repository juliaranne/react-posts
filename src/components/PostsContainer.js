import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useAxios from "../hooks/use-axios";
import Posts from "./Posts";
import Post from "./Post";

const PostsContainer = () => {
  const {
    response: users,
    loading: loadingUser,
    error: userError,
  } = useAxios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users",
  });
  const {
    response: posts,
    loading: loadingPosts,
    error: postsError,
  } = useAxios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/posts",
  });

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/posts"
            element={
              <Posts posts={posts} loading={loadingPosts} error={postsError} />
            }
            exact
          ></Route>
          <Route
            path="/posts/:postId"
            element={<Post posts={posts} users={users} userError={userError} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

export default PostsContainer;
