import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" bg-[#1A1A2E] shadow-md text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
                
                {/* Left - Brand Name */}
                <h2 className="text-2xl font-semibold">Maheen's Portfolio</h2>

                {/* Right - Social Icons */}
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-white text-2xl hover:text-gray-300 transition" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-white text-2xl hover:text-gray-300 transition" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-white text-2xl hover:text-gray-300 transition" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-white text-2xl hover:text-gray-300 transition" />
                    </a>
                </div>
            </div>

            {/* Bottom - Copyright */}
            <div className="text-center mt-6 text-gray-300 text-sm">
                © {new Date().getFullYear()} Maheen. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
