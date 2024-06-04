import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Posts, { loader as postsLoader } from "./pages/Posts";
import AppLayout from "./ui/AppLayout";
import Post, { loader as postLoader } from "./pages/Post";
import Error from "./components/Error";
import Home from "./pages/Home";
import PostForm from "./pages/PostForm";
import PagesError from "./components/PagesError";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <Posts />,
        loader: postsLoader,
        errorElement: <PagesError />,
      },
      {
        path: "/posts/:postId",
        element: <Post />,
        loader: postLoader,
        errorElement: <PagesError />,
      },
      {
        path: "posts/new",
        element: <PostForm />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
