import React, { useEffect, useState } from "react";
import PF from "../assets/images/pf2.png";
import { FiArrowRight } from "react-icons/fi";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
  AiFillMail,
} from "react-icons/ai";
import MatterComponent from "../components/MatterComponent"; // Make sure this component is set up correctly
import AboutPopup from "../components/AboutPopup"; // Import AboutPopup component
import { FaGithub, FaWhatsapp } from "react-icons/fa";

const About = () => {
  const [isPopupOpen, setPopupOpen] = useState(false); // State to manage the popup visibility
  const [role, setRole] = useState("MERN Stack Developer");

  // Function to handle role changes every 3 seconds
  useEffect(() => {
    const roles = [
      "Shopify Developer",
      "Web Developer",
      "MERN Stack Developer",
    ];
    let index = 0;

    const changeRole = () => {
      setRole(roles[index]);
      index = (index + 1) % roles.length;
    };

    const interval = setInterval(changeRole, 3000); // Change role every 4 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center py-12 px-6 md:px-8"
    >
      {/* Matter.js Component */}
      <div className="absolute top-0 left-0 w-full min-h-screen z-0">
        <MatterComponent />
      </div>

      {/* Left Column: Profile Image */}
      <div className="relative flex items-center justify-center w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-background mb-6 md:mb-0 mt-12 sm:mt-16 md:mt-0">
        <img
          src={PF}
          alt="Profile"
          className="w-44 sm:w-52 md:w-60 h-44 sm:h-52 md:h-60 rounded-full object-cover border-4 border-white transition-all duration-300 transform hover:scale-110"
        />
      </div>

      {/* Right Column: Text Details and Social Media Icons */}
      <div className="relative text-left max-w-6xl flex flex-col md:flex-row md:items-center md:ml-10">
        {/* Text Content */}
        <div className="mb-8 md:mb-0 md:mr-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-snug sm:leading-tight text-left">
            Hi, I am{" "}
            <span className="relative text-primary font-bold pb-1 inline-block">
              <span className="underline decoration-primary underline-offset-2 hover:text-blue-500 transition-all duration-300 ease-in-out">
                Mahmaduvesh Khalifa
              </span>
            </span>
          </h2>

          <p className="text-xl sm:text-2xl font-semibold leading-relaxed text-black mb-6">
            I am a{" "}
            <span className="text-primary font-medium animate-typewriter">
              {role}
            </span>
          </p>

          <button
            className="flex items-center px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-lg shadow-lg"
            onClick={openPopup}
          >
            About Us
            <FiArrowRight className="ml-2 text-lg" />
          </button>

          {/* About Popup Component */}
          <AboutPopup isOpen={isPopupOpen} closePopup={closePopup} />
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center items-center space-x-4 sm:space-x-5 md:space-x-0 md:space-y-4 md:flex-col">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mahmaduvesh-khalifa-b48ba41a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition transform"
          >
            <AiFillLinkedin className="text-white text-lg sm:text-xl" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/mahmaduvesh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition transform"
          >
            <FaGithub className="text-white text-lg sm:text-xl" />
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/Mahmaduvesh_k"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition transform"
          >
            <AiFillTwitterCircle className="text-white text-lg sm:text-xl" />
          </a>

          {/* Email */}
          <a
            href="mailto:khalifamahmaduvesh@gmail.com"
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition transform"
          >
            <AiFillMail className="text-white text-lg sm:text-xl" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/mr_uv_0311/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition transform"
          >
            <AiFillInstagram className="text-white text-lg sm:text-xl" />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/uvesh.khalifa.94"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition transform"
          >
            <AiFillFacebook className="text-white text-lg sm:text-xl" />
          </a>

          {/* WhatsApp (Visible only on mobile) */}
          <a
            href="https://wa.me/9662845122"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition transform md:hidden"
          >
            <FaWhatsapp className="text-white text-lg sm:text-xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
