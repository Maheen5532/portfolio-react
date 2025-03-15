import React from "react";
import { Menu } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";


import logo from "../assets/logo.png"; // Ensure correct path

const Header = ({ toggle }) => {
  return (
    <header className="fixed top-0 left-0 w-full shadow-2xl shadow-white justify-center  bg-[#1A1A2E] z-50"  style={{ fontFamily: "'Tektur', sans-serif" }}>
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */} 
        <a href="/" className="flex items-center">
          {/* <img src={logo} alt="Logo" className="w-12 h-12" /> */}
          <span className="text-white bold text-2xl" style={{ fontFamily: "'Rock Salt', cursive" }}>Maheen</span>
        </a>

        {/* Navigation Menu (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          {["projects", "about", "contact"].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white transition text-lg cursor-pointer"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}
        </div>

        {/* Resume Button */}
        <a
          href="https://linkedin.com/in/pedro-sales-muniz"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex bg-[#9B59B6] shadow-2xl shadow-white border-white hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
        >
          Resume
        </a>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={toggle}
        >
          <Menu size={28} />
        </button>
      </nav>
    </header>
  );
};

export default Header;
