import { Link, useLoaderData, useLocation } from "react-router-dom";
import { getPosts, getUsers } from "../services/apiPosts";
import PostItem from "../components/PostItem";
import SearchPost from "../components/SearchPost";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { useState } from "react";

function Posts() {
  const { posts, users } = useLoaderData();
  const location = useLocation();

  const [allPosts, setAllPosts] = useState(posts);
  const [newPost, setNewPost] = useState(location.state);

  if (newPost) {
    setAllPosts((prevState) => [newPost, ...prevState]);
    setNewPost(null);
  }

  return (
    <div className="p-4 lg:p-10">
      <div className="mb-6 flex flex-col gap-2 md:flex-row lg:mb-10 lg:gap-4">
        <div className="flex flex-col md:w-full md:flex-row md:items-center md:justify-between">
          <h2 className="mb-4 font-fontTitle text-2xl font-semibold text-stone-800 md:mb-0">
            All Posts
          </h2>
          <SearchPost />
        </div>
        <Link
          className="active:scale-9 flex w-full items-center justify-center gap-4 rounded-lg border-0 bg-indigo-600 p-1  text-center font-fontBody uppercase tracking-widest text-indigo-50 ring-indigo-600 focus:outline-none focus:ring-1 focus:ring-offset-1 md:w-1/4 md:p-2"
          to="/posts/new"
        >
          <HiOutlinePlusCircle className="size-5 " />
          Add new post
        </Link>
      </div>
      <ul className="flex flex-col border-indigo-500">
        {allPosts.map((post) => (
          <PostItem key={post.id} post={post} users={users} allPosts={allPosts} setAllPosts={setAllPosts} />
        ))}
      </ul>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const posts = await getPosts();
  let users;

  if (posts.length) {
    users = await getUsers();
  }

  console.log({ posts, users });
  return { posts, users };
}

export default Posts;
