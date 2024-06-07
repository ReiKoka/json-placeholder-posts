import { Link, useLoaderData, useLocation } from "react-router-dom";
import { getPosts, getUsers } from "../services/apiPosts";
import PostItem from "../components/PostItem";
import SearchPost from "../components/SearchPost";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { useState } from "react";

import BackButton from "../ui/BackButton";

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
    <div className="p-4 md:p-6 lg:p-10">
      <div className="mb-6 flex flex-col gap-y-10 md:w-full md:flex-row md:items-center md:justify-between lg:mb-10">
        <div className="flex flex-col md:items-center md:justify-between">
          <div className="flex gap-4 lg:gap-6">
            <BackButton />
            <h1 className="font-fontTitle text-2xl font-semibold text-stone-800 md:mb-0 lg:text-3xl">
              All Posts
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <SearchPost />
          <Link
            className="active:scale-9 flex grow items-center justify-center gap-4 rounded-lg border-0 bg-indigo-600  p-3 px-6 text-center font-fontBody uppercase tracking-widest text-indigo-50 ring-indigo-600 focus:outline-none focus:ring-1 focus:ring-offset-1 md:py-3"
            to="/posts/new"
          >
            <HiOutlinePlusCircle className="size-5" />
            Add new post
          </Link>
        </div>
      </div>
      <ul className="flex flex-col border-indigo-500">
        {allPosts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            users={users}
            allPosts={allPosts}
            setAllPosts={setAllPosts}
          />
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

  return { posts, users };
}

export default Posts;
