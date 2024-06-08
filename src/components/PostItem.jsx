import { Link } from "react-router-dom";
import { deletePost } from "../services/apiPosts";
import { toast } from "sonner";
import { HiOutlineTrash } from "react-icons/hi";
import { HiEye } from "react-icons/hi";

function PostItem({ post, users, allPosts, setAllPosts }) {
  const user = users.find((user) => user.id === post.userId);

  async function handleDelete() {
    await deletePost(post.id);

    setAllPosts((posts) => posts.filter((item) => item.id !== post.id));

    console.log(allPosts);

    return toast.success("Post deleted successfully!");
  }

  return (
    <li className="border-indigo-500 py-6">
      <h2 className="pb-2 font-fontTitle text-base font-semibold capitalize leading-5 text-stone-800 md:text-lg">
        {post.title}
      </h2>
      <div className="flex flex-col gap-2">
        <p className="text-wrap font-fontBody text-sm font-light capitalize tracking-wide text-stone-800 md:text-base">
          {post.body}
        </p>
        <p className="font-fontBody text-sm font-normal md:text-base">
          By: <span className="text-indigo-500">{user.name}</span>
        </p>
        <div className="flex justify-between gap-4 lg:justify-end">
          <button
            className="flex grow justify-center gap-4 rounded-lg border-2 border-indigo-600  px-2 py-2 text-center font-fontBody text-sm font-normal uppercase tracking-wider text-stone-800 transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 active:scale-90  active:bg-indigo-400 lg:w-1/5 lg:grow-0"
            onClick={handleDelete}
          >
            <HiOutlineTrash className="size-4" />
            Delete post
          </button>
          <Link
            to={`./${post.id}`}
            state={{ users }}
            className="flex grow justify-center gap-4 rounded-lg border-2 border-indigo-600 bg-indigo-600 px-2 py-2 text-center font-fontBody text-sm font-normal uppercase tracking-wider text-indigo-50 transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 active:scale-90  active:bg-indigo-400 lg:w-1/5 lg:grow-0"
          >
            <HiEye className="size-4 pt-[2px]" />
            View details
          </Link>
        </div>
      </div>
    </li>
  );
}

export default PostItem;
