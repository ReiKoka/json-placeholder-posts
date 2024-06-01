import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchPost() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!searchQuery) return;

    navigate(`/posts/${searchQuery}`);
    setSearchQuery("");
  }

  return (
    <form onSubmit={handleSubmit} className="relative mt-2 md:mt-0">
      <input
        className="w-full rounded-lg border-2 border-indigo-500 bg-inherit px-3 py-1 font-fontBody text-sm text-stone-700 ring-indigo-500 focus:outline-none focus-visible:ring-1 md:w-60 md:p-2 tracking-widest"
        type="text"
        placeholder="Search post id"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchPost;
