
import { Link, NavLink } from "react-router-dom";
import {
  FiBriefcase,
  FiMenu,
  FiX,
  FiShield,
  FiLogOut,
} from "react-icons/fi";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../features/auth/authSlice";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dispatch = useDispatch();

  const { user, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  // Only admin will see Admin Panel
  const isAdmin =
    isAuthenticated &&
    user?.role?.toLowerCase() === "admin";

  const handleLogout = () => {
    dispatch(logout());
    setIsMenuOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "font-bold text-primary"
        : "hover:text-primary"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-base-200 bg-base-100/95 shadow-sm backdrop-blur">

      <div className="navbar mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= LOGO ================= */}
        <div className="navbar-start">

          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-content">
              <FiBriefcase className="text-xl" />
            </div>

            <div className="hidden sm:block">

              <h1 className="text-xl font-extrabold tracking-tight">
                Job<span className="text-primary">Hub</span>
              </h1>

              <p className="text-[9px] font-medium uppercase tracking-[0.2em] opacity-60">
                Find Your Opportunity
              </p>

            </div>
          </Link>

        </div>

        {/* ================= DESKTOP NAV ================= */}
        <div className="navbar-center hidden lg:flex">

          <ul className="menu menu-horizontal items-center gap-1 font-medium">

            {/* Home */}
            <li>
              <NavLink
                to="/"
                className={navLinkClass}
              >
                Home
              </NavLink>
            </li>

            {/* Jobs */}
            <li>
              <NavLink
                to="/jobs"
                className={navLinkClass}
              >
                Jobs
              </NavLink>
            </li>

            {/* About */}
            <li>
              <NavLink
                to="/about"
                className={navLinkClass}
              >
                About
              </NavLink>
            </li>

            {/* Dashboard
                Visible for every logged-in user
            */}
            {isAuthenticated && (
              <li>
                <NavLink
                  to="/dashboard"
                  className={navLinkClass}
                >
                  Dashboard
                </NavLink>
              </li>
            )}

            {/* Admin Panel
                Visible ONLY for admin
            */}
            {isAdmin && (
              <li>
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    `flex items-center gap-2 rounded-lg px-3 py-2 font-semibold transition ${
                      isActive
                        ? "bg-primary text-primary-content"
                        : "text-primary hover:bg-primary/10"
                    }`
                  }
                >
                  <FiShield />
                  Admin Panel
                </NavLink>
              </li>
            )}

          </ul>

        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="navbar-end">

          <div className="hidden items-center gap-2 sm:flex">

            {/* NOT LOGGED IN */}
            {!isAuthenticated ? (
              <>
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
              </>
            ) : (
              <>
                {/* USER INFO */}
                <div className="hidden items-center gap-2 xl:flex">

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                    {user?.name
                      ?.charAt(0)
                      ?.toUpperCase() || "U"}
                  </div>

                  <div className="max-w-32">

                    <p className="truncate text-sm font-semibold">
                      {user?.name}
                    </p>

                    <p className="text-xs capitalize text-base-content/50">
                      {user?.role}
                    </p>

                  </div>

                </div>

                {/* LOGOUT */}
                <button
                  type="button"
                  onClick={handleLogout}
                  className="btn btn-outline btn-sm gap-2"
                >
                  <FiLogOut />

                  <span className="hidden md:inline">
                    Logout
                  </span>
                </button>
              </>
            )}

          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            onClick={() =>
              setIsMenuOpen((prev) => !prev)
            }
            className="btn btn-ghost btn-circle lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>

        </div>

      </div>

      {/* ================= MOBILE MENU ================= */}
      {isMenuOpen && (
        <div className="border-t border-base-200 bg-base-100 lg:hidden">

          <div className="mx-auto max-w-7xl px-5 py-5">

            {/* Navigation */}
            <nav>

              <ul
                className="menu gap-1 p-0 font-medium"
                onClick={() =>
                  setIsMenuOpen(false)
                }
              >

                {/* Home */}
                <li>
                  <NavLink
                    to="/"
                    className={navLinkClass}
                  >
                    Home
                  </NavLink>
                </li>

                {/* Jobs */}
                <li>
                  <NavLink
                    to="/jobs"
                    className={navLinkClass}
                  >
                    Jobs
                  </NavLink>
                </li>

                {/* About */}
                <li>
                  <NavLink
                    to="/about"
                    className={navLinkClass}
                  >
                    About
                  </NavLink>
                </li>

                {/* Dashboard */}
                {isAuthenticated && (
                  <li>
                    <NavLink
                      to="/dashboard"
                      className={navLinkClass}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                )}

                {/* Admin Panel */}
                {isAdmin && (
                  <li>
                    <NavLink
                      to="/admin"
                      className={({ isActive }) =>
                        `flex items-center gap-2 rounded-lg px-3 py-2 font-semibold transition ${
                          isActive
                            ? "bg-primary text-primary-content"
                            : "text-primary hover:bg-primary/10"
                        }`
                      }
                    >
                      <FiShield />
                      Admin Panel
                    </NavLink>
                  </li>
                )}

              </ul>

            </nav>

            {/* ================= MOBILE ACCOUNT ================= */}
            <div className="mt-5 border-t border-base-200 pt-5">

              {!isAuthenticated ? (
                /* Login / Register */
                <div className="flex gap-3">

                  <Link
                    to="/login"
                    onClick={() =>
                      setIsMenuOpen(false)
                    }
                    className="btn btn-outline flex-1"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    onClick={() =>
                      setIsMenuOpen(false)
                    }
                    className="btn btn-primary flex-1"
                  >
                    Register
                  </Link>

                </div>
              ) : (
                /* Logged In User */
                <div className="space-y-3">

                  {/* User Info */}
                  <div className="flex items-center gap-3 rounded-xl bg-base-200 p-3">

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-content">
                      {user?.name
                        ?.charAt(0)
                        ?.toUpperCase() || "U"}
                    </div>

                    <div className="min-w-0">

                      <p className="truncate font-bold">
                        {user?.name}
                      </p>

                      <p className="text-sm capitalize text-base-content/50">
                        {user?.role}
                      </p>

                    </div>

                  </div>

                  {/* Logout */}
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="btn btn-outline w-full gap-2"
                  >
                    <FiLogOut />
                    Logout
                  </button>

                </div>
              )}

            </div>

          </div>

        </div>
      )}

    </header>
  );
};

export default NavBar;

