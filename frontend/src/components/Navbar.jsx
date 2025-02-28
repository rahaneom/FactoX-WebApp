import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false); // Closes menu on link click

  return (
    <nav style={{ fontFamily: "'Orbitron', sans-serif" }} className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-5xl backdrop-blur-lg bg-black/30 text-white px-6 py-3 flex justify-between items-center rounded-full shadow-lg text-lg">
      <h1 className="text-xl font-semibold px-4">
        <Link to="/" className="hover:text-gray-300" onClick={handleNavClick}>
          FactoX
        </Link>
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-gray-300" onClick={handleNavClick}>
          Factorial
        </Link>
        <Link
          to="/about"
          className="hover:text-gray-300"
          onClick={handleNavClick}
        >
          About
        </Link>
      </div>

      {/* Contact Button */}
      <Link
        to="/contact"
        className="hidden md:block px-4 py-2 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition"
        onClick={handleNavClick}
      >
        Contact Us
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full backdrop-blur-lg text-white flex flex-col items-center space-y-4 py-4 md:hidden z-50">
          <Link to="/" className="hover:text-gray-300" onClick={handleNavClick}>
            Factorial
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-300"
            onClick={handleNavClick}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-500 transition"
            onClick={handleNavClick}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
