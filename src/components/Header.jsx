import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-indigo-100 sticky flex w-full justify-center sm:justify-start py-2">
      <Link className="md:ml-10" to="/">
        <img
          src="/logo/json-placeholder-posts-high-resolution-logo-transparent.svg"
          alt="logo"
          className="h-16 w-16"
        />
      </Link>
    </header>
  );
}

export default Header;
