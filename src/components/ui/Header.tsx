import { useQueryClient } from "@tanstack/react-query";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const authContext = useContext(AuthContext);
  const queryClient = useQueryClient();

  const handleSignOut = () => {
    authContext?.logOut().then(() => {
      toast.success("Successfully Logout");
      queryClient.clear();
    });
  };

  return (
    <header className=" bg-violet-600 sticky top-0 z-10 h-16  dark:bg-gray-900 dark:text-gray-100">
      <nav className="custom-width mx-auto flex h-full items-center justify-between">
        <Link className=" text-xl font-semibold flex items-center gap-2" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 17.6l-2 -1.1v-2.5" />
            <path d="M4 10v-2.5l2 -1.1" />
            <path d="M10 4.1l2 -1.1l2 1.1" />
            <path d="M18 6.4l2 1.1v2.5" />
            <path d="M20 14v2.5l-2 1.12" />
            <path d="M14 19.9l-2 1.1l-2 -1.1" />
            <line x1="12" y1="12" x2="14" y2="10.9" />
            <line x1="18" y1="8.6" x2="20" y2="7.5" />
            <line x1="12" y1="12" x2="12" y2="14.5" />
            <line x1="12" y1="18.5" x2="12" y2="21" />
            <path d="M12 12l-2 -1.12" />
            <line x1="6" y1="8.6" x2="4" y2="7.5" />
          </svg>
          <span className="text-white">SWAP TUNE</span>
        </Link>
        <ul className="relative hidden items-center gap-5 font-semibold sm:flex">
          <li className="hover:text-blue-900">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? " text-white underline" : "text-gray-200"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-blue-900">
            <NavLink
              to="/all-products"
              className={({ isActive }) =>
                isActive ? " text-white underline" : "text-gray-200"
              }
            >
              All Products
            </NavLink>
          </li>
          <li className="hover:text-blue-900">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? " text-white underline" : "text-gray-200"
              }
            >
              Blog
            </NavLink>
          </li>

          {authContext?.user?.uid ? (
            <>
              <li className="hover:text-blue-900">
                <NavLink
                  // to={`${
                  //   authContext.userType === "seller"
                  //     ? "/dashboard/seller/my-products"
                  //     : authContext.userType === "admin"
                  //     ? "/dashboard/admin/all-buyers"
                  //     : "/dashboard/my-orders"
                  // }`}
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? " text-white underline" : "text-gray-200"
                  }
                >
                  Dashboard
                </NavLink>
              </li>

              <li
                className="cursor-pointer text-gray-200 hover:text-white"
                onClick={handleSignOut}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
              </li>
            </>
          ) : (
            <>
              <li className="hover:text-blue-900">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? " text-white underline" : "text-gray-200"
                  }
                >
                  Login
                </NavLink>
              </li>
            </>
          )}
        </ul>

        {/* Hamburger Menu */}
        <div
          onClick={() => setMenu(!menu)}
          className="z-50 flex h-5 w-6 cursor-pointer flex-col items-end justify-between sm:hidden "
        >
          <span
            className={`h-[0.1rem] rounded-lg bg-white transition-transform duration-100  ease-in-out dark:bg-gray-100 ${
              menu ? "w-6 translate-y-1 rotate-45" : "w-full"
            }`}
          />
          <span
            className={`h-[0.1rem] rounded-lg bg-white dark:bg-gray-100  ${
              menu ? "hidden" : "w-full"
            }`}
          />
          <span
            className={`h-[0.1rem] rounded-lg bg-white transition-transform duration-100 ease-in-out dark:bg-gray-100 ${
              menu ? "w-6 -translate-y-3.5 -rotate-45" : "w-full"
            }`}
          />
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={`${
          menu ? "translate-x-48" : "translate-x-full"
        } no-scrollbar fixed top-0 right-0 bottom-0 z-40 w-full overflow-y-auto bg-violet-600 transition-transform duration-200 ease-in-out dark:bg-gray-900 dark:text-gray-100 md:hidden `}
      >
        <ul className="ml-10 mt-32 mb-10 flex flex-col gap-7 text-white">
          <li onClick={() => setMenu(false)}>
            <Link to="/home">Home</Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link to="/all-products">All Products</Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link to="/blog">Blog</Link>
          </li>
          {/* {authContext?.user && authContext.user.uid ? (
            <>
              <li onClick={() => setMenu(false)}>
                <Link to="/add-service">Add Service</Link>
              </li>
              <li onClick={() => setMenu(false)}>
                <Link to="/my-reviews">My Reviews</Link>
              </li>
            </>
          ) : (
            <>
              <li onClick={() => setMenu(false)}>
                <Link to="/login">Login</Link>
              </li>
              <li onClick={() => setMenu(false)}>
                <Link to="/register">Register</Link>
              </li>
            </>
          )} */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
