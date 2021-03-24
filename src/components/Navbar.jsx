import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="z-50 text-gray-100 body-font w-full fixed shadow bg-red-500">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to="/" className="ml-3 text-xl text-gray-100">
            Yuk Yak Yuk
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/category" className="mr-5 hover:text-gray-900">
              Category
            </Link>
            <Link to="/" className="mr-5 hover:text-gray-900">Logout</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
