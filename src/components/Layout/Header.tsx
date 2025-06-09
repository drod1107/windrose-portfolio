import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/75 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center h-14">
        <Link to="/" className="text-xl font-semibold tracking-tight">
          windrose.dev
        </Link>

        <nav className="ml-auto flex gap-4 text-sm">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "font-medium text-emerald-600" : "text-gray-600 hover:text-black"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "font-medium text-emerald-600" : "text-gray-600 hover:text-black"
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
