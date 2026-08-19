import { Link, NavLink } from "react-router-dom";
import {
  FiBriefcase,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/jobs">Jobs</NavLink>
      </li>

      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">
  Dashboard
</NavLink>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-base-200 bg-base-100/95 shadow-sm backdrop-blur">
      <div className="navbar mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="navbar-start">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-content">
              <FiBriefcase className="text-xl" />
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-tight">
                Job<span className="text-primary">Hub</span>
              </h1>

              <p className="text-[9px] font-medium uppercase tracking-[0.2em] opacity-60">
                Find Your Opportunity
              </p>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 font-medium">
            {navLinks}
          </ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-2">

          <div className="hidden items-center gap-2 sm:flex">
            <Link
              to="/login"
              className="btn btn-outline btn-sm"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="btn btn-primary btn-sm px-5"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-ghost btn-circle lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-base-200 bg-base-100 lg:hidden">
          <ul
            className="menu mx-auto max-w-7xl px-6 py-4 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            {navLinks}

            <div className="mt-3 flex gap-2 border-t border-base-200 pt-4">
              <Link
                to="/login"
                className="btn btn-outline flex-1"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="btn btn-primary flex-1"
              >
                Register
              </Link>
            </div>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;