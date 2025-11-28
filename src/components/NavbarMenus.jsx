import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo.png";

const NavbarMenus = ({ showNav, handleNav }) => {
  return (
    <div className="relative flex justify-between items-center h-24 max-w-screen-xl mx-auto px-4 text-white z-10">
      
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className="h-14 sm:h-12 md:h-28 w-auto object-contain cursor-pointer transition-all duration-300"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center">

        <li className="p-4 hover:text-caribbean-green">
          <Link to="/">Home</Link>
        </li>

        <li className="p-4 hover:text-caribbean-green">
          <Link to="/committee">Administration</Link>
        </li>

        {/* <li className="p-4 hover:text-caribbean-green">
          <Link to="/resources">Resources</Link>
        </li> */}

        {/* New Items */}
        <li className="p-4 hover:text-caribbean-green">
          <Link to="/newsFrontpage">Recent News</Link>
        </li>

        <li className="p-4 hover:text-caribbean-green">
          <Link to="/join">Join BSERI</Link>
        </li>


        <li className="p-4 hover:text-caribbean-green">
          <Link to="/faqs">FAQs</Link>
        </li>

        <li className="p-4 hover:text-caribbean-green">
          <Link to="/contact">Contact</Link>
        </li>

        <li className="p-4 hover:text-caribbean-green">
          <Link to="/about">About</Link>
        </li>

        {/* Login */}
        <li className="ml-4">
          <Link
            to="/login"
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 
              text-white font-semibold py-3 px-6 rounded-full shadow-lg
              hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-green-400"
          >
            Login
          </Link>
        </li>

      </ul>
      {/* End Desktop Menu */}


      {/* Mobile Menu Toggle */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer z-20">
        {showNav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`fixed top-0 left-0 w-[60%] h-full bg-night-black border-r border-gray-900 
          ease-in-out duration-500 z-20
          ${showNav ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Mobile Items */}
        <li className="p-4" onClick={handleNav}>
          <Link to="/">Home</Link>
        </li>

        <li className="p-4" onClick={handleNav}>
          <Link to="/committee">Committee</Link>
        </li>

        <li className="p-4" onClick={handleNav}>
          <Link to="/resources">Resources</Link>
        </li>

        <li className="p-4" onClick={handleNav}>
          <Link to="/about">About</Link>
        </li>

        <li className="p-4" onClick={handleNav}>
          <Link to="/newsDetails">Recent News</Link>
        </li>

        <li className="p-4" onClick={handleNav}>
          <Link to="/join">Join BSERI</Link>
        </li>

        <li className="p-4" onClick={handleNav}>
          <Link to="/contact">Contact</Link>
        </li>

        <li className="p-4" onClick={handleNav}>
          <Link to="/faqs">FAQs</Link>
        </li>

        <li className="p-4" onClick={handleNav}>
          <Link
            to="/login"
            className="block bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold 
            py-3 px-4 rounded-lg text-center shadow-lg hover:shadow-xl transition-all hover:scale-105 
            border-2 border-green-400"
          >
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarMenus;
