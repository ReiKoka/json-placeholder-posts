import { useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import { toast } from "sonner";

import { IconContext } from "react-icons";
import { FaRegComments, FaRegPenToSquare } from "react-icons/fa6";
import { HiOutlineX } from "react-icons/hi";

import { getComments, getPost, updatePost } from "../services/apiPosts";

import Comment from "../components/Comment";
import EditModal from "../components/EditModal";
import BackButton from "../ui/BackButton";

function Post() {
  const [open, setOpen] = useState(false);
  const postObj = useLoaderData();
  const location = useLocation();

  const { users } = location.state;
  const user = users.find((user) => user.id === postObj.userId);

  const post = { ...postObj, userName: user.name };

  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { title: formTitle, body: formBody } =
      await Object.fromEntries(formData);

    const data = {
      title: formTitle,
      body: formBody,
      id: post.id,
      userId: post.userId,
    };

    const newObj = await updatePost(data);

    if (!newObj) return toast.error(`Error updating post ❌`);

    setOpen(false);
    setTitle(data.title);
    setBody(data.body);

    return toast.success("Post updated successfully! ✅");
  }

  return (
    <div className=" flex w-full flex-col p-4 md:p-6 lg:p-10">
      <div className="mb-10 flex gap-4 lg:gap-6">
        <BackButton />
        <h1 className="font-fontTitle text-2xl font-semibold text-stone-800 md:mb-0 lg:text-3xl">
          Post #{post.id}
        </h1>
      </div>
      <h2 className="mb-3 font-fontBody text-xl capitalize md:text-2xl">
        {title}
      </h2>
      <p className="mb-3 w-full font-fontBody text-sm font-light capitalize md:mb-5 md:text-base">
        {body}
      </p>
      <div className="flex w-full justify-end mb-5 md:mb-7">
        <button
          className="w-full rounded-lg border-0 bg-indigo-600 p-3 text-center font-fontBody uppercase  tracking-widest text-indigo-50 ring-indigo-600 focus:outline-none focus:ring-1 focus:ring-offset-1 active:scale-90 md:w-1/4 md:py-3 px-6"
          onClick={() => setOpen(true)}
        >
          Edit Post
        </button>
      </div>

      <EditModal open={open} onClose={() => setOpen(false)}>
        <form
          onSubmit={handleSubmit}
          className="flex h-full w-full flex-col justify-between gap-8 rounded-xl border-2 border-stone-300 bg-indigo-50 p-5 shadow-2xl "
        >
          <div>
            <div className="mb-10 flex w-full items-center justify-between">
              <h1 className=" font-fontTitle text-xl font-bold">Edit Post</h1>
              <HiOutlineX
                onClick={() => setOpen()}
                className="size-6 cursor-pointer"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="title"
                  className="pl-1 font-fontTitle text-lg font-semibold text-stone-800"
                >
                  Post Title
                </label>
                <input
                  type="text"
                  placeholder="Edit post title"
                  name="title"
                  defaultValue={title}
                  // onChange={(e) => setTitle(e.target.value)}
                  required
                  className="grow rounded-md border-2 bg-indigo-50 px-3 py-2 font-fontBody tracking-widest text-stone-800 ring-indigo-500  focus:outline-none focus:ring-2 "
                />
              </div>

              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="body"
                  className="pl-1 font-fontTitle text-lg font-semibold text-stone-800 "
                >
                  Post Body
                </label>
                <textarea
                  type="text"
                  name="body"
                  placeholder="Enter post body"
                  defaultValue={body}
                  // onChange={(e) => setBody(e.target.value)}
                  required
                  className="h-auto min-h-40 grow rounded-md border-2 bg-indigo-50 px-3 py-2 font-fontBody tracking-widest text-stone-800 ring-indigo-500  focus:outline-none focus:ring-2 "
                />
              </div>
            </div>
          </div>

          <div className="w-full justify-end lg:flex">
            <button
              type="submit"
              className="w-full rounded-xl bg-indigo-600 px-10 py-4 font-fontBody font-medium tracking-widest text-indigo-50 ring-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-90 lg:w-fit"
            >
              Edit Post
            </button>
          </div>
        </form>
      </EditModal>

      <div className="mb-5 md:mb-7 flex w-full items-center justify-between border-b-[1px] border-t-[1px] border-stone-300">
        <p className="flex items-end px-2 py-3 font-fontTitle md:px-4 md:py-4">
          <span className="pr-2 md:pr-3">
            {
              <IconContext.Provider value={{ color: "#57534e" }}>
                <FaRegPenToSquare className="h-5 w-5 md:h-7 md:w-7" />
              </IconContext.Provider>
            }
          </span>
          <span className="font-fontBody text-sm font-semibold text-indigo-500 md:text-base md:font-medium">
            {post.userName}
          </span>
        </p>

        <p className="flex items-end px-2 py-3 font-fontBody md:px-4 md:py-4">
          <span className="pr-2">
            {
              <IconContext.Provider value={{ color: "#57534e" }}>
                <FaRegComments className="h-6 w-6 md:h-7 md:w-7" />
              </IconContext.Provider>
            }
          </span>
          <span className="text-base font-medium text-indigo-500 md:text-base md:font-medium">
            {post.comments.length}
          </span>
        </p>
      </div>
      <div className="rounded-2xl border-[1px] border-stone-300 px-2 py-3 md:px-4 md:py-4 lg:px-6 lg:py-6">
        <h2 className="mb-3 ml-1 font-fontTitle text-lg font-semibold lg:text-xl ">
          Comments
        </h2>
        <ul className="divide-y-2 border-t-2 border-indigo-500 py-2">
          {post.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </ul>
      </div>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const post = await getPost(params.postId);
  const comments = await getComments(post?.id);

  const postObj = {
    ...post,
    comments,
  };

  return postObj;
}

export default Post;
