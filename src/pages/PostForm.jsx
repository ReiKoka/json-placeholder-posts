import { addPost } from "../services/apiPosts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function PostForm() {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (Number(userId) < 1 || Number(userId) > 10) {
      toast.error("User ID does not exist!");
      return;
    }

    const data = {
      userId: Number(userId),
      title,
      body,
    };

    const newObj = await addPost(data);

    console.log(newObj);

    if (!newObj) return toast.error("Couldn't create new post! ❌");

    navigate("/posts");
    return toast.success("New post created successfully! ✅");
  }

  return (
    <div className="flex justify-center">
      <div className="h-full min-h-[600px] w-full p-5 lg:max-w-[768px]">
        <form
          onSubmit={handleSubmit}
          className="flex h-full flex-col justify-between gap-8 rounded-xl border-2 border-stone-300 p-5 shadow-2xl"
        >
          <div>
            <h1 className="mb-10 font-fontTitle text-xl font-bold">
              Create a new post
            </h1>
            <div className="flex flex-col gap-5">
              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="User ID"
                  className="pl-1 font-fontTitle text-lg font-semibold text-stone-800"
                >
                  User Id
                </label>
                <input
                  type="number"
                  placeholder="Enter user ID"
                  name="userId"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  required
                  className="font-fontBody grow rounded-md border-2 bg-indigo-50 px-3 py-2 tracking-widest text-stone-800 ring-indigo-500  focus:outline-none focus:ring-2 "
                />
              </div>

              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="title"
                  className="pl-1 font-fontTitle text-lg font-semibold text-stone-800 "
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter post title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="font-fontBody grow rounded-md border-2 bg-indigo-50 px-3 py-2 tracking-widest text-stone-800 ring-indigo-500  focus:outline-none focus:ring-2 "
                />
              </div>

              <div className="flex w-full flex-col gap-2">
                <label
                  htmlFor="body"
                  className="pl-1 font-fontTitle text-lg font-semibold text-stone-800 "
                >
                  Text
                </label>
                <textarea
                  type="text"
                  name="body"
                  placeholder="Enter post body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  required
                  className="font-fontBody h-48 grow rounded-md border-2 bg-indigo-50 px-3 py-2 tracking-widest text-stone-800 ring-indigo-500  focus:outline-none focus:ring-2"
                />
              </div>
            </div>
          </div>

          <div className="w-full justify-end lg:flex">
            <button
              type="submit"
              className="font-fontBody w-full rounded-xl bg-indigo-600 p-4 px-10 py-4 font-medium tracking-widest text-indigo-50 ring-indigo-500  focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-90 lg:w-fit"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

//
// export async function action({ request }) {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);

//   const newPost = await addPost(data);

//   console.log(newPost)

//   // This would be the return statement, but the data is not really uploaded to the server so this will return an error when
//   // redirected to the posts/:id URL.

//   // return redirect(`/posts/${newPost.id}`)
//   return null;
// }

export default PostForm;
