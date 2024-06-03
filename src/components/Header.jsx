import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky flex h-20 min-h-20 w-full items-center justify-center bg-indigo-100 sm:justify-start">
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
