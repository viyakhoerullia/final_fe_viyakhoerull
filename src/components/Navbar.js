import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-4">
      <div className="navbar-start">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo/logo viya cv.png"
            alt="logo"
            style={{ width: "50px", height: "50px" }}
            className="mr-2"
          />
          <div className="flex flex-col">
            <span className="text-lg font-semibold">
              Curiculum Vitae
            </span>
            <span className="text-sm">Posted by Viya</span>
          </div>
        </Link>
      </div>

      {/* Navbar Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <li>
            <Link to="/Home" className="text-lg font-medium">Home</Link>
          </li>
          <li>
            <Link to="/AboutMe" className="text-lg font-medium">AboutMe</Link>
          </li>
          <li>
            <Link to="/Overview" className="text-lg font-medium">Overview</Link>
          </li>
          <li>
            <Link to="/SkillsdanPengalaman" className="text-lg font-medium">SkillsdanPengalaman</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="navbar-end lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/HOME">HOME</Link>
            </li>
            <li>
              <Link to="/ABOUTME">ABOUTME</Link>
            </li>
            <li>
              <Link to="/OVERVIEW">OVERVIEW</Link>
            </li>
            <li>
              <Link to="/SKILLSDANPENGALAMAN">SKILLSDANPENGALAMAN</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
