import React from "react";
import { Link } from "react-router-dom";

// 🔹 Department Button Component
const DepartmentButton = ({ name, link }) => {
  return (
    <Link
      to={link}
      className="block w-full py-3 my-2 bg-gradient-to-r from-purple-500 to-pink-500 
                 hover:from-purple-600 hover:to-pink-600 text-white font-semibold 
                 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-center"
    >
      {name}
    </Link>
  );
};

const UserLogin = () => {
  const departments = [
    { name: "Sales department", link: "/sales" },
    { name: "Designer department", link: "/designer" },
    { name: "Founder", link: "/founder" },
    { name: "Production team", link: "/production" },
    { name: "Human resources", link: "/hr" },
    { name: "Manager", link: "/manager" },
    { name: "Quality checker", link: "/quality-check" },
    { name: "Packing team", link: "/packing" },
    { name: "Courier team", link: "/courier" },
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 rounded-lg w-96 text-center shadow-lg">
        <h1 className="text-black text-5xl font-bold py-3 rounded mb-5">Users</h1>
        <h2 className="text-black text-3xl mb-4">Login as</h2>

        {/* 🔹 Render Each Department as a Separate Link */}
        {departments.map((dept, index) => (
          <DepartmentButton key={index} name={dept.name} link={dept.link} />
        ))}
      </div>
    </div>
  );
};

export default UserLogin;
