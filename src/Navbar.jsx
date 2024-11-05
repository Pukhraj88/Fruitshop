import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaCartArrowDown } from "react-icons/fa6";

const Navbar = ({ setData, cart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <h1 className="logo">
        <span className="logo-icon"></span>
        <a href="#" className="logo-text">
          FruitsShop
        </a>
      </h1>

      <div className="hamburger" onClick={toggleMenu}>
        <svg
          className="hamburger-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>

      <nav className={`nav ${isMenuOpen ? "show" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#">Home</a>
          </li>
          <li className="nav-item">
            <a href="#">Product</a>
          </li>
          <li className="nav-item">
            <a href="#">Contact</a>
          </li>
          <li className="nav-item">
            <a href="#">Signup</a>
          </li>
        </ul>
        {isMenuOpen && (
          <div className="close-button" onClick={toggleMenu}>
            <svg
              className="close-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        )}
      </nav>
      {/* cart button floating  */}
      <Link
        to="/cart"
        className="fixed bottom-4 right-4 bg-white p-4 rounded-full shadow-lg z-50 transition-transform hover:scale-105"
      >
        <div className="relative">
          <FaCartArrowDown className="text-xl text-gray-800" />
          <span className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-red-500 text-white rounded-full text-xs">
            {cart.length}
          </span>
        </div>
      </Link>
    </header>
  );
};

export default Navbar;
