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
import Particles from "react-tsparticles";
import ParticlesConfigs from "../components/ParticlesConfig";

const About = () => {
  const [role, setRole] = useState("Shopify Developer");

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

    const interval = setInterval(changeRole, 4000); // Change role every 4 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center py-12 px-6 md:px-8"
    >
      <Particles params={ParticlesConfigs}></Particles>
      {/* Left Column: Text Details */}
      <div className="relative text-left max-w-6xl flex flex-col md:flex-row md:items-center">
        {/* Social Media Icons */}
        <div className="flex flex-col items-center space-y-4 mr-20">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition transform"
          >
            <AiFillLinkedin className="text-white text-2xl" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition transform"
          >
            <AiFillTwitterCircle className="text-white text-2xl" />
          </a>
          <a
            href="mailto:someone@example.com"
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition transform"
          >
            <AiFillMail className="text-white text-2xl" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition transform"
          >
            <AiFillInstagram className="text-white text-2xl" />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full shadow-md hover:shadow-lg hover:scale-110 transition transform"
          >
            <AiFillFacebook className="text-white text-2xl" />
          </a>
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Hi, I am{" "}
            <span className="relative text-4xl sm:text-4xl md:text-5xl font-bold text-primary pb-1 inline-block group hover:text-gray-900 hover:scale-105 transition-all duration-300 ease-in-out">
              Mahmaduvesh Khalifa
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary transform scale-x-100 transition-all duration-300 ease-in-out"></span>
            </span>
          </h2>

          <p className="text-xl sm:text-2xl font-semibold leading-relaxed text-gray-700 mb-6">
            I am a{" "}
            <span className="text-primary font-medium animate-typewriter">
              {role}
            </span>
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
            I help business owners and busy web developers design & develop
            creative websites that fit their vision and attract visitors to stay
            forever. Technologies and tools that I use to create such awesome
            websites:
          </p>

          <button className="flex items-center px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 rounded-lg shadow-lg">
            About Us
            <FiArrowRight className="ml-2 text-lg" />
          </button>
        </div>
      </div>

      {/* Right Column: Profile Image */}
      <div className="relative flex items-center justify-center w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-background">
        <img
          src={PF}
          alt="Profile"
          className="w-44 sm:w-52 md:w-60 h-44 sm:h-52 md:h-60 rounded-full object-cover border-4 border-white transition-all duration-300 transform hover:scale-110"
        />
      </div>
    </section>
  );
};

export default About;
