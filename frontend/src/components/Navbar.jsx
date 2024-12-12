import React, { useState } from "react";
import logo from "../assets/images/download (7).png"; // Adjust the path as needed
import { FaWhatsapp } from "react-icons/fa"; // Removed theme toggle icons

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to the section and close the mobile menu
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-lg dark:bg-whiteshadow-lg py-4 px-6 fixed w-full top-0 z-10 flex justify-between items-center">
      {/* Logo or brand name */}
      <div className="flex items-center rounded-full shadow-sm group">
        <img
          src={logo}
          alt="Logo"
          className="h-9 w-9 mr-2 rounded-full transform transition-transform duration-200 group-hover:scale-110"
        />
      </div>

      {/* Hamburger Icon for mobile */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-black dark:text-black focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Full Navbar Links */}
      <div className={`w-full lg:flex justify-center hidden lg:block`}>
        <ul className="lg:flex space-x-8 text-center">
          {[
            "about",
            "LatestWork",
            "skills",
            "experience",
            "education",
            "contact",
          ].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className="text-lg font-semibold text-black dark:text-black hover:text-primary hover:underline underline-offset-4 transition-all duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Right-Side Icons */}
      <div className="hidden lg:flex items-center space-x-4">
        {" "}
        {/* WhatsApp Button */}
        <button
          className="bg-primary text-white p-2 rounded-full shadow hover:scale-110 transition-transform"
          onClick={() => window.open("https://wa.me/9662845122", "_blank")}
        >
          <FaWhatsapp size={20} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white dark:white shadow-lg py-4 px-6">
          <ul className="space-y-4 text-left">
            {[
              "about",
              "LatestWork",
              "skills",
              "experience",
              "education",
              "contact",
            ].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className="text-lg font-semibold text-black dark:text-black hover:text-primary hover:underline underline-offset-4 transition-all duration-300"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
