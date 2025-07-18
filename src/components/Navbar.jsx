import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">CHS</div>
      <button
        className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
      <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          <li><a href="#solutions">Solutions</a></li>
          <li><a href="#industries">Industries</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#team">Our Team</a></li>
          <li className="mobile-only"><a href="#contact">Contact Us</a></li>
        </ul>
        <div className="nav-actions desktop-only">
          <button className="btn small">Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;