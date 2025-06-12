import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="relative z-30">
      <div className="absolute inset-0 w-full h-full animate-gradient bg-gradient-to-r from-emerald-600 via-purple-700 to-sky-600 opacity-60 blur-sm" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 flex items-center h-14">
       
        <Link to="/" className="text-xl text-emerald-400 font-semibold tracking-tight">
          windrose.dev
        </Link>

        <nav className="ml-auto flex gap-4 text-sm">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "font-medium  text-emerald-400" : "text-orange-300 hover:text-black"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "font-medium text-emerald-400" : "text-orange-300 hover:text-black"
            }
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
