import { IconContext } from "react-icons";
import { FaRegCircleUser } from "react-icons/fa6";

function Comment({ comment }) {
  return (
    <li className="border-1 w-full border-indigo-200 px-1 pb-4 pt-2 md:pb-6 md:pt-4 ">
      <div className="mb-5 flex w-full items-center gap-3 lg:gap-5">
        {
          <IconContext.Provider value={{ color: "#4f46e5" }}>
            <FaRegCircleUser className="h-10 w-10 min-w-10 lg:h-12 lg:w-12" />
          </IconContext.Provider>
        }
        <div className="flex w-full flex-col gap-1 lg:gap-2">
          <p className="w-auto font-fontTitle text-xs font-light capitalize leading-4 lg:text-sm lg:font-normal" >
            {comment.name}
          </p>
          <p className="w-auto font-fontTitle text-xs font-light capitalize leading-4 lg:text-sm lg:font-normal">
            {comment.email}
          </p>
        </div>
      </div>
      <p className="pb-2 text-xs capitalize lg:pb-3 lg:text-sm lg:tracking-wide">
        {comment.body}
      </p>
    </li>
  );
}

export default Comment;
