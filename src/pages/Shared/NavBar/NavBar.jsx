/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  console.log(user);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <nav className="bg-gray-100 w-full rounded-md p-1">
      <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start md:justify-between md:items-center">
            <div className="flex-shrink-0">
              <div className="flex justify-center items-center gap-5">
                <div className="avatar">
                  <Link>
                    <div className="w-16 rounded-full">
                      <img
                        className="bg-gray-100 p-1 rounded-md"
                        src="https://i.ibb.co/1v7xsrY/Dark-Green-White-Modern-Yoga-Logo.png"
                      />
                    </div>
                  </Link>
                </div>
                <div className="flex-shrink-0 text-center">
                  <div>
                    <h1 className="text-[#1A1919] font-extrabold text-2xl pt-2">
                      ŌmBliss Yoĝa
                    </h1>
                  </div>
                  <div>
                    <span className="font-extrabold text-2xl -ml-7 text-[#ff7700]">
                      School
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <div className="flex justify-center items-center md:mr-[260px] gap-8">
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#ff7700] px-3 py-2 rounded-md text-xl  font-bold"
                        : "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl  font-bold"
                    }
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/instructors"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#ff7700] px-3 py-2 rounded-md text-xl  font-bold"
                        : "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl  font-bold"
                    }
                  >
                    Instructors
                  </NavLink>

                  <NavLink
                    to="/classes"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#ff7700] px-3 py-2 rounded-md text-xl  font-bold"
                        : "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl  font-bold"
                    }
                  >
                    Classes
                  </NavLink>
                </div>
                {user ? (
                  <>
                    <NavLink
                      to="/dashboard/manageUsers"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-[#ff7700] px-3 py-2 rounded-md text-xl  font-bold"
                          : "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                      }
                    >
                      Dashboard
                    </NavLink>
                    <div className="dropdown dropdown-end">
                      <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                      >
                        <div className="w-10 rounded-full">
                          <img
                            title={user && user.displayName}
                            src={user && user.photoURL}
                          />
                        </div>
                      </label>
                      <ul
                        tabIndex={0}
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 z-10"
                      >
                        <li>
                          <Link to="/" className="justify-between font-bold">
                            Profile
                            <span className="badge font-bold">New</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="font-bold"
                            onClick={handleLogOut}
                            to="/"
                          >
                            Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#ff7700] px-3 py-2 rounded-md text-xl  font-bold"
                        : "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl  font-bold"
                    }
                  >
                    Login
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`sm:hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold"
          >
            Home
          </Link>

          <Link
            to="/alltoys"
            className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold"
          >
            Instructors
          </Link>

          <Link
            to="/blog"
            className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold"
          >
            Classes
          </Link>

          {user ? (
            <>
              <Link
                to="/addtoys"
                className="text-[#1A1919] hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold"
              >
                Dashboard
              </Link>
              <div className="dropdown dropdown-start">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      title={user && user.displayName}
                      src={user && user.photoURL}
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/" className="justify-between font-bold">
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={handleLogOut} className="font-bold" to="/">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#ff7700] px-3 py-2 rounded-md text-xl  font-bold"
                  : "text-[#1A1919] hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl  font-bold"
              }
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
