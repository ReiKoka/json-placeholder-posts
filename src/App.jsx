import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts, { loader as postsLoader } from "./pages/Posts";
import AppLayout from "./ui/AppLayout";
import Post, { loader as postLoader } from "./pages/Post";
import Error from "./components/Error";
import Home from "./pages/Home";
import PostForm from "./pages/PostForm";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <Posts />,
        loader: postsLoader,
        errorElement: <Error />,
      },
      {
        path: "/posts/:postId",
        element: <Post />,
        loader: postLoader,
        errorElement: <Error />,
      },
      {
        path: "posts/new",
        element: <PostForm />,
        // action: FormAction
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
