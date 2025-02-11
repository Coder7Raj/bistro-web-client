import React, { useContext } from "react";
import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { AuthContext } from "../Auth/AuthProvider";
import useCart from "../Hooks/useCart";

export default function Navbar() {
  const { user, logoutUser, handleGoogleSignOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [cart] = useCart();

  const handleLogout = async (user) => {
    try {
      const isGoogleUser = user?.providerData.some(
        (provider) => provider.providerId === "google.com"
      );

      if (isGoogleUser) {
        await handleGoogleSignOut();
      } else {
        await logoutUser();
      }

      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <>
      <div className="navbar fixed z-10 bg-black bg-opacity-25 max-w-[425px] md:max-w-[768px] lg:max-w-[1024px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden pr-2 pl-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[30] mt-3 w-52 p-2 shadow flex gap-2"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-md font-semibold hover:text-red-700 hover:bg-white ${
                    isActive ? "text-[#4335A7]" : ""
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  `text-md font-semibold hover:text-red-700 hover:bg-white ${
                    isActive ? "text-[#4335A7]" : ""
                  }`
                }
              >
                Our Menu
              </NavLink>
              <NavLink
                to="/order"
                className={({ isActive }) =>
                  `text-md font-semibold hover:text-red-700 hover:bg-white ${
                    isActive ? "text-[#4335A7]" : ""
                  }`
                }
              >
                Order Now
              </NavLink>
            </ul>
          </div>
          <NavLink to="/" className="flex text-xl font-semibold">
            <img className="lg:w-8 w-6 rounded-[50%]" src={logo} alt="" />
            Bistro Boss
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-md font-semibold hover:text-red-700 hover:bg-white ${
                  isActive ? "text-[#4335A7]" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `text-md font-semibold hover:text-red-700 hover:bg-white ${
                  isActive ? "text-[#4335A7]" : ""
                }`
              }
            >
              Our Menu
            </NavLink>
            <NavLink
              to="/order/salad"
              className={({ isActive }) =>
                `text-md font-semibold hover:text-red-700 hover:bg-white ${
                  isActive ? "text-[#4335A7]" : ""
                }`
              }
            >
              Order Now
            </NavLink>
            <NavLink>
              <button className="bg-white w-20 rounded-md flex justify-center items-center py-1">
                <FaShoppingCart className="mr-2" />
                <div className="badge badge-secondary">+{cart.length}</div>
              </button>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
          {user ? (
            <>
              <button>
                {user?.photoURL ? (
                  <img
                    className="w-10 h-10 rounded-[50%]"
                    src={user?.photoURL}
                    alt={user?.name}
                  />
                ) : (
                  <FaRegUserCircle className="w-10 h-10 text-gray-500" />
                )}
              </button>
              <button
                onClick={() => {
                  handleLogout();
                }}
                className="btn btn-outline btn-primary"
              >
                LogOut
              </button>
            </>
          ) : (
            <div className="flex gap-1">
              <button className="btn btn-outline btn-primary">
                <Link to="/login">Login</Link>
              </button>
              <button className="btn btn-outline btn-primary">
                <Link to="/register">Register</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
