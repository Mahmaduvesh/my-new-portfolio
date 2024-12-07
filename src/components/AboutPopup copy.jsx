import React, { useState } from "react";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { DiNodejsSmall } from "react-icons/di";
import User from "../assets/user.svg";
import { AiFillCloseCircle } from "react-icons/ai";

const AboutPopup = ({ isOpen, closePopup }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClosePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      closePopup();
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleClosePopup}
    >
      <div
        className="bg-white p-6 sm:p-8 rounded-lg shadow-xl w-11/12 max-w-4xl relative border-[1px] border-solid border-blue-500"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="w-full md:w-3/5 mb-6 md:mb-0 pr-0 md:pr-4 flex flex-col justify-between">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary mb-4">
              ABOUT ME
            </h2>
            <p className="text-sm sm:text-base mb-4">
              I assist business owners and web developers in creating and
              building innovative websites that align with their vision and
              attract long-lasting visitors. I leverage a variety of modern
              technologies and tools to craft websites that are both visually
              appealing and highly functional.
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "javascript",
                "react.js",
                "redux",
                "node.js",
                "express.js",
                "mongoDB",
                "mongoose",
                "cloudinary",
                "ejs",
                "html",
                "css",
                "sass",
                "bootstrap",
                "tailwind",
                "firebase",
                "git",
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-teal-500 to-teal-700 text-white text-xs sm:text-sm rounded-full shadow-md"
                >
                  {tech}
                </div>
              ))}
            </div>

            <div className="flex justify-between sm:justify-start gap-4 mt-6">
              {[
                { icon: <SiMongodb />, color: "green" },
                { icon: <SiExpress />, color: "gray" },
                { icon: <GrReactjs />, color: "cyan" },
                { icon: <DiNodejsSmall />, color: "lime" },
              ].map(({ icon, color }, idx) => (
                <div
                  key={idx}
                  className="relative group flex flex-col items-center"
                >
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-${color}-100 border-2 border-blue-500 rounded-md`}
                  >
                    {React.cloneElement(icon, {
                      className: `text-${color}-500 text-4xl sm:text-5xl group-hover:text-${color}-700`,
                    })}
                  </div>
                  <span
                    className={`absolute hidden group-hover:block bottom-full mb-2 text-xs text-white bg-${color}-500 px-2 py-1 rounded-md`}
                  >
                    {color.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-2/5 flex justify-center items-center">
            <img
              src={User}
              alt="Profile"
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72"
            />
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={handleClosePopup}
          className={`absolute top-4 right-4 p-2 rounded-full bg-gradient-to-r from-teal-500 to-teal-700 text-white transition-transform duration-300 ease-out transform ${
            isClosing ? "rotate-45 scale-75" : "scale-100"
          }`}
        >
          <AiFillCloseCircle className="text-xl sm:text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default AboutPopup;
