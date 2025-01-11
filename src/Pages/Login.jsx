import React, { useState } from "react";
import authinticationImg from "../assets/others/authentication.png";
import authinticationImg2 from "../assets/others/authentication2.png";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  };
  return (
    <div
      style={{
        backgroundImage: `${authinticationImg}`,
      }}
      className="lg:flex-row md:flex-row flex justify-center items-center flex-col gap-4 pt-20 p-4"
    >
      <div className="lg:w-1/2 md:w-1/2 w-full">
        <div>
          <img className="w-full h-full" src={authinticationImg2} alt="" />
        </div>
      </div>
      <div className="lg:w-1/2 md:w-1/2 w-full h-auto px-6 py-4 flex flex-col justify-center items-center bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="w-full">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-base font-medium text-gray-800 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-6 relative">
            <label className="block text-base font-medium text-gray-800 mb-2">
              Password
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 pt-7"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </div>
          <div className="mb-6">
            <button
              // onClick={handleLogingoogle}
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition duration-300"
            >
              <span>Login with Google</span>
            </button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-700 mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
