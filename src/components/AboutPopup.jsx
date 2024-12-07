import React, { useState } from "react";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { DiNodejsSmall } from "react-icons/di";
import User from "../assets/user.svg";
import { AiFillCloseCircle } from "react-icons/ai";

const AboutPopup = ({ isOpen, closePopup }) => {
  const [isClosing, setIsClosing] = useState(false); // To manage the closing animation

  const handleClosePopup = () => {
    setIsClosing(true); // Trigger the closing animation
    setTimeout(() => {
      closePopup(); // Close the popup after the animation duration
    }, 300); // Wait for animation to finish (300ms)
  };

  if (!isOpen) return null; // If popup is closed, don't render anything

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleClosePopup}
    >
      <div
        className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-xl w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 relative border-[1px] border-solid border-blue-500 max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside popup
      >
        <div className="flex flex-col md:flex-row">
          {/* Left Column: Text and Technologies */}
          <div className="w-full md:w-3/5 mb-4 md:mb-0 pr-4 flex flex-col justify-between">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary mb-4">
              ABOUT ME
            </h2>
            <p className="mb-4 text-sm sm:text-base">
              I assist business owners and web developers in creating and
              building innovative websites that align with their vision and
              attract long-lasting visitors. I leverage a variety of modern
              technologies and tools to craft websites that are both visually
              appealing and highly functional.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {/* Technology Stack Chips */}
              {[
                "javascript",
                "react.js",
                "redux",
                "node.js",
                "express.js",
                "mongoDB",
                "SQL",
                "HTML5",
                "CSS3",
                "sass",
                "bootstrap",
                "mui",
                "tailwind",
                "firebase",
                "git",
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-full shadow-md text-sm mb-2 flex-shrink-0"
                >
                  {tech}
                </div>
              ))}
            </div>

            {/* MERN Stack Icons with Tooltip */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {/* MongoDB Icon */}
              <div className="relative group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-green-100 flex items-center justify-center border-2 border-blue-500 rounded-tl-md rounded-tr-md rounded-bl-md">
                  <SiMongodb className="text-green-500 text-3xl sm:text-4xl md:text-5xl group-hover:text-green-700" />
                </div>
                <span className="absolute hidden group-hover:block bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-sm text-white bg-green-500 px-2 py-1 rounded-tl-md rounded-tr-md rounded-bl-md">
                  MongoDB
                </span>
                <div className="flex justify-center gap-2 mt-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-200 flex items-center justify-center border-2 border-blue-500 rounded-tl-md rounded-tr-md rounded-bl-md">
                    <span className="text-green-500 text-xs sm:text-sm font-bold group-hover:text-green-700">
                      M
                    </span>
                  </div>
                </div>
              </div>

              {/* Express.js Icon */}
              <div className="relative group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-100 flex items-center justify-center border-2 border-blue-500 rounded-tl-md rounded-tr-md rounded-bl-md">
                  <SiExpress className="text-black text-3xl sm:text-4xl md:text-5xl group-hover:text-gray-400" />
                </div>
                <span className="absolute hidden group-hover:block bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-sm text-white bg-black px-2 py-1 rounded-tl-md rounded-tr-md rounded-bl-md">
                  Express.js
                </span>
                <div className="flex justify-center gap-2 mt-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-200 flex items-center justify-center border-2 border-blue-500 rounded-tl-md rounded-tr-md rounded-bl-md">
                    <span className="text-black text-xs sm:text-sm font-bold group-hover:text-gray-400">
                      E
                    </span>
                  </div>
                </div>
              </div>

              {/* React.js Icon */}
              <div className="relative group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-blue-100 flex items-center justify-center border-2 border-blue-500 rounded-tl-md rounded-tr-md rounded-bl-md">
                  <GrReactjs className="text-cyan-500 text-3xl sm:text-4xl md:text-5xl group-hover:text-cyan-700" />
                </div>
                <span className="absolute hidden group-hover:block bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-sm text-white bg-cyan-500 px-2 py-1 rounded-tl-md rounded-tr-md rounded-bl-md">
                  React.js
                </span>
                <div className="flex justify-center gap-2 mt-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-200 flex items-center justify-center border-2 border-blue-500 rounded-tl-md rounded-tr-md rounded-bl-md">
                    <span className="text-cyan-500 text-xs sm:text-sm font-bold group-hover:text-cyan-700">
                      R
                    </span>
                  </div>
                </div>
              </div>

              {/* Node.js Icon */}
              <div className="relative group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#d9f5c8] flex items-center justify-center border-2 border-blue-500 rounded-tl-md rounded-tr-md rounded-bl-md">
                  <DiNodejsSmall className="text-[#8cc84b] text-3xl sm:text-4xl md:text-5xl group-hover:text-[#6fa83a]" />
                </div>
                <span className="absolute hidden group-hover:block bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-sm text-white bg-[#8cc84b] px-2 py-1 rounded-tl-md rounded-tr-md rounded-bl-md">
                  Node.js
                </span>
                <div className="flex justify-center gap-2 mt-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#e3f8d4] flex items-center justify-center border-2 border-blue-500 rounded-tl-md rounded-tr-md rounded-bl-md">
                    <span className="text-[#8cc84b] text-xs sm:text-sm font-bold group-hover:text-[#6fa83a]">
                      N
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Image */}
          <div className="w-full md:w-2/5 flex justify-center items-center mb-4 md:mb-0">
            <img
              src={User} // Use the imported user.svg file
              alt="Profile"
              className="w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72"
            />
          </div>
        </div>

        {/* Close Button inside circle */}
        <button
          onClick={handleClosePopup}
          className={`absolute top-4 right-4 p-3 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 text-white transition-transform duration-300 ease-out transform ${
            isClosing ? "rotate-45 scale-75" : "scale-100"
          }`}
        >
          <AiFillCloseCircle className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default AboutPopup;
