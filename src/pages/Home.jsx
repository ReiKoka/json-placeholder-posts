import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

function Home() {
  return (
    <div className="grid h-full grid-rows-2 md:place-items-center lg:grid-cols-2 2xs:landscape:grid-cols-2">
      <div className="flex items-center justify-center lg:row-start-1 lg:row-end-3 2xs:landscape:row-start-1 2xs:landscape:row-end-3">
        <img
          src="/logo/json-placeholder-posts-high-resolution-logo-transparent.svg"
          alt=""
          className="my-6 w-[50%] max-w-sm sm:max-w-md lg:w-[80%] lg:max-w-none"
        />
      </div>

      <div className="flex flex-col items-center gap-6 2xs:landscape:gap-2 2xs:landscape:justify-end text-center lg:h-full lg:justify-end ">
        <h1 className="w-full font-fontTitle text-4xl font-semibold tracking-widest lg:text-6xl">
          Welcome
        </h1>
        <h2 className="w-9/12 font-fontBody text-base font-light tracking-widest lg:text-xl">
          A mini application for testing and learning purposes using the JSON
          placeholder posts API
        </h2>
      </div>

      <div className="flex h-full w-full flex-col justify-end 2xs:landscape:justify-center lg:justify-normal">
        <div className="fixed bottom-0 flex w-full 2xs:landscape:bg-inherit 2xs:landscape:static 2xs:landscape:py-0 items-center justify-center rounded-t-3xl bg-stone-200 py-8 md:static lg:bg-inherit">
          <Link
            to="/posts"
            className="flex w-4/5 items-center justify-between rounded-2xl bg-indigo-600 px-5 py-4 text-center font-fontBody text-xl uppercase text-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-90 lg:mt-6 lg:font-medium"
          >
            <span>Go to posts</span>
            <span>{<FaRegArrowAltCircleRight className="h-6 w-6" />}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
