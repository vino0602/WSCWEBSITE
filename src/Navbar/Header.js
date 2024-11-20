import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <header className="header-container">
      <div className="navbar-content">
        {/* Logo */}
        <div className="logo-container" onClick={closeMenu}>
          <Link to="/" className="logo">
            <img src="path-to-your-logo.png" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Navbar */}
        <nav className="nav-links">
          <Link to="/" className="nav-item" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/About" className="nav-item" onClick={closeMenu}>
            About
          </Link>
          <Link to="/Our services" className="nav-item" onClick={closeMenu}>
            Services
          </Link>
          <Link to="/Package List" className="nav-item" onClick={closeMenu}>
            Package
          </Link>
          <Link to="/doctors" className="nav-item" onClick={closeMenu}>
            Our Team
          </Link>
          <Link to="/Blog card" className="nav-item" onClick={closeMenu}>
            Blogs
          </Link>
          <Link to="/contactus" className="nav-item" onClick={closeMenu}>
            Contact
          </Link>
        </nav>

        {/* Login Button */}
        <div className="login-container">
          <a href="https://app.westayclose.in/login">
            <button className="login-btn">Login</button>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu-icon" onClick={handleChange}>
          {menu ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="mobile-menu">
          <Link to="/" className="mobile-nav-item" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/About" className="mobile-nav-item" onClick={closeMenu}>
            About
          </Link>
          <Link to="/Our services" className="mobile-nav-item" onClick={closeMenu}>
            Services
          </Link>
          <Link to="/Package List" className="mobile-nav-item" onClick={closeMenu}>
            Package
          </Link>
          <Link to="/doctors" className="mobile-nav-item" onClick={closeMenu}>
            Our Team
          </Link>
          <Link to="/Blog card" className="mobile-nav-item" onClick={closeMenu}>
            Blogs
          </Link>
          <Link to="/contactus" className="mobile-nav-item" onClick={closeMenu}>
            Contact
          </Link>
          <a href="https://app.westayclose.in/login" className="mobile-login-btn">
            Login
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;