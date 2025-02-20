import React from "react";
import { MdAccountCircle } from "react-icons/md";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Sales = () => {
  return (
    <div className="w-100 flex flex-col items-center justify-center mt-4">
      <div>
        <img className="w-48 mb-3" src={logo} alt="LOGO" />
      </div>
      <div className="w-[50%] flex flex-col items-center">
        <MdAccountCircle className="text-[12rem]" />
        <h1 className="mb-5 text-4xl font-bold text-gray-800">
          COURIER TEAM
        </h1>
        <div className="flex flex-col w-[50%] border border-slate-900 px-8 py-10 rounded-lg bg-slate-200 shadow-lg">
          
          {/* Username Input */}
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-600 p-3 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-600 p-3 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Back to Users Link */}
          <Link
            to="*"
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sales;
