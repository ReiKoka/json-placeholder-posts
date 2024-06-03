import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Home() {
  return (
    <div className="grid place-items-center lg:grid-cols-2 grid-rows-2 lg:h-full">
      <div className="flex items-center justify-center">
        <img
          src="/logo/json-placeholder-posts-high-resolution-logo-transparent.svg"
          alt=""
          className="my-6 w-[50%] xs:w-4/5  max-w-sm sm:max-w-md lg:row-start-1 lg:row-end-3 lg:w-[80%] lg:max-w-none lg:rounded-l-none lg:justify-items-start"
        />
      </div>

      <div className="flex flex-col items-center gap-6 text-center lg:justify-end lg:h-full ">
        <h1 className="w-full font-fontTitle text-4xl font-semibold tracking-widest lg:text-6xl">
          Welcome
        </h1>
        <h2 className="w-9/12 font-fontBody tracking-widest text-base font-light lg:text-xl">
          A mini application for testing and learning purposes using the JSON
          placeholder posts API
        </h2>
      </div>

      <div className="flex h-full w-full flex-col justify-end lg:justify-normal">
        <div className="fixed bottom-0 md:static flex w-full items-center justify-center rounded-t-3xl bg-stone-200 py-8 lg:bg-inherit">
          <Link
            to="/posts"
            className="rounded-2xl bg-indigo-600 text-indigo-50 w-4/5 px-5 py-4 text-center font-fontBody text-xl uppercase flex items-center justify-between focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:outline-none active:scale-90 lg:font-medium lg:mt-6"
          >
            <span>Go to posts</span> <span>{<FaRegArrowAltCircleRight className="w-6 h-6" />}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
