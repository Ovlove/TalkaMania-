import React from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/">
          <img src="/src/assets/logo.png" alt="TalkaMania Logo" className="h-10" />
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/fashion" className="hover:text-blue-500">Fashion</Link>
          <Link to="/food" className="hover:text-blue-500">Food</Link>
          <Link to="/entertainment" className="hover:text-blue-500">Entertainment</Link>
          <Link to="/sports" className="hover:text-blue-500">Sports</Link>
          <Link to="/wrestling" className="hover:text-blue-500">Wrestling</Link>
          <Link to="/fiction" className="hover:text-blue-500">Fiction</Link>
          <Link to="/movies" className="hover:text-blue-500">Movies</Link>
          <Link to="/kdrama" className="hover:text-blue-500">K-Drama</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <DarkModeToggle />
          <button className="md:hidden" id="hamburger">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
