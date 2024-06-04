import { FaRegArrowAltCircleLeft } from "react-icons/fa"
import { Link } from "react-router-dom"

function PagesError() {
  return (
    <div className="flex h-full w-full flex-col bg-indigo-50 ">
        <div className="h-1/4 lg:hidden"></div>
        <div className="flex flex-col items-center h-3/4 gap-10 lg:gap-14 lg:h-full lg:justify-center">
          <h1 className="font-fontBody text-9xl font-bold text-indigo-800 lg:text-[10rem]">
            404
          </h1>
          <h3 className="px-2 text-center font-fontBody text-3xl font-medium uppercase tracking-widest text-stone-800">
            Sorry we can&apos;t find the page you are looking for!
          </h3>
          <div className="w-full px-4 mt-auto rounded-t-3xl flex justify-center bg-stone-200 py-8 lg:mt-0 lg:bg-transparent">
            <Link
              to="/"
              className="flex w-4/5 lg:w-1/5 items-center justify-center gap-6 rounded-2xl bg-indigo-600 px-5 py-4 text-center font-fontBody text-xl uppercase text-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:scale-90 lg:font-medium"
            >
              <span>{<FaRegArrowAltCircleLeft className="h-5 w-5" />}</span>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
  )
}

export default PagesError
