import { Link } from "react-router-dom";
import { deletePost } from "../services/apiPosts";
import { toast } from "sonner";
import { HiOutlineTrash } from "react-icons/hi";

function PostItem({ post, users }) {
  const user = users.find((user) => user.id === post.userId);

  async function handleDelete() {
    const deletedPost = await deletePost(post.id);
    

    if (!deletedPost) {
      return toast.error(`Couldn't delete post!`);
    }

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
          By user: <span className="text-indigo-500">{user.name}</span>
        </p>
        <div className="flex justify-between gap-4 lg:justify-end">
          <button
            className="active-visible:ring-1 leading-0 flex grow justify-center gap-4 rounded-lg border-2 border-indigo-600 px-2 py-2 text-center font-fontBody text-sm font-normal uppercase tracking-wider text-stone-800 ring-indigo-500 transition-all duration-300 hover:scale-105 active:scale-90 active:bg-indigo-500  active:outline-none lg:w-1/5 lg:grow-0"
            onClick={handleDelete}
          >
            <HiOutlineTrash className="leading-0 size-4" />
            Delete post
          </button>
          <Link
            to={`./${post.id}`}
            state={{users}}
            className="grow rounded-lg border-2 border-indigo-600 bg-indigo-600 px-2 py-2 text-center font-fontBody text-sm font-normal uppercase tracking-wider text-indigo-50 ring-indigo-500 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-1 active:scale-90 lg:w-1/5 lg:grow-0"
          >
            View details
          </Link>
        </div>
      </div>
    </li>
  );
}

export default PostItem;
