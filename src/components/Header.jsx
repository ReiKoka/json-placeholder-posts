import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky flex h-20 min-h-20 w-full items-center justify-center bg-indigo-100 sm:justify-start sm:pl-10">
      <Link to="/">
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
