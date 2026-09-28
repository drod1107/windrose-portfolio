import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="windrose.dev home">
          <span className="brand-mark" aria-hidden="true">✦</span>
          <span>windrose.dev</span>
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Work
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            About
          </NavLink>
          <a
            href="https://github.com/drod1107"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}