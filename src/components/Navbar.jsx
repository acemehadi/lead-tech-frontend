import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <div className="nav-logo">
          <h1>
            Lead<span>Tech</span>
          </h1>
        </div>

        {/* Right Side Controls */}
        <div className="nav-controls">

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Menu Icon */}
          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>

        </div>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a href="#home" onClick={toggleMenu}>Home</a>
          </li>

          <li className="nav-item">
            <a href="#services" onClick={toggleMenu}>Services</a>
          </li>

          <li className="nav-item">
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>

          <li className="nav-item">
            <a href="#portfolio" onClick={toggleMenu}>Portfolio</a>
          </li>

          <li className="nav-item">
            <a href="#team" onClick={toggleMenu}>Team</a>
          </li>

          <li className="nav-item">
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;