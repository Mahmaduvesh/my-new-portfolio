import React, { useState } from "react";
import logo from "../assets/images/download (7).png"; // Adjust the path as needed

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to the section and close the mobile menu
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // Close the mobile menu after navigating
    setIsMobileMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-lg py-4 px-6 fixed w-full top-0 z-10 flex justify-between items-center">
      {/* Logo or brand name */}
      <div className="text-lg font-semibold text-red-600 flex items-center bg-red-100 p-2 rounded-lg shadow-md">
        <div className="flex items-center bg-white rounded-full p-1 shadow-sm">
          <img
            src={logo}
            alt="Logo"
            className="h-8 w-8 mr-2 rounded-full"
            style={{ backgroundColor: "transparent" }} // Ensure bg is transparent
          />
        </div>
      </div>
      {/* Hamburger Icon for mobile */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="text-gray-700 focus:outline-none"
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
          {["about", "skills", "experience", "projects", "education"].map(
            (section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className="text-lg font-semibold text-gray-700 hover:text-primary hover:underline underline-offset-4 transition-all duration-300"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6">
          <ul className="space-y-4 text-center">
            {["about", "skills", "experience", "projects", "education"].map(
              (section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-lg font-semibold text-black hover:text-primary hover:underline underline-offset-4 transition-all duration-300"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
