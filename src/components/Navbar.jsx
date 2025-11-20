import React from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa'; // Import FaBars
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
          >
            Dot Com Infoway
          </Link>
        </div>
        <button className="navbar-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="about-us"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                onClick={() => setIsMenuOpen(false)}
                className="nav-link"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                onClick={() => setIsMenuOpen(false)}
                className="nav-link"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                onClick={() => setIsMenuOpen(false)}
                className="nav-link"
              >
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact-us"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                onClick={() => setIsMenuOpen(false)}
                className="nav-link"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;