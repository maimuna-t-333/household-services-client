import React from 'react';
import { Link } from 'react-router'; 

const Navbar = () => {
  return (
    <div className="navbar bg-[#F4EBD3] shadow-sm px-4 md:px-12 border-b">
      {/* Navbar Start (Left) */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li> {/* Moved here for mobile */}
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Fixify</a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bookings">Bookings</Link></li>
          <li><Link to="/services">Services</Link></li>
          
        </ul>
      </div>

      {/* Navbar End (Right) - Desktop Only */}
      <div className="navbar-end hidden md:flex gap-4">
        <Link to="/login" className="btn btn-sm btn-outline">Login</Link>
        <Link to="/register" className="btn btn-sm btn-outline">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;

