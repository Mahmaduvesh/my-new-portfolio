import React from "react";

const Skills = () => {
  return (
    <div className="text-center py-40">
      {/* Skills Title */}
      <div className="text-center px-4 lg:px-20">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-wider uppercase leading-tight inline-block border-b-4 border-blue-500 pb-1">
          Skills
        </h2>

        <p className="text-lg text-gray-800 mb-12 max-w-6xl mx-auto">
          With a wealth of experience and a dedication to staying ahead in the
          field, my expertise spans various areas. Below is a brief overview of
          the key skills that guide my work and lead to successful project
          outcomes.
        </p>
      </div>

      <div className="flex flex-wrap gap-10 justify-center px-4 lg:px-20">
        {/* Frontend Skills Card */}
        <div className="group bg-white border border-solid border-blue-500 shadow-2xl p-8 w-96 h-80 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl hover:rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center text-black">
            Frontend
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-base font-medium group-hover:rounded-none">
              HTML5
            </span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-base font-medium group-hover:rounded-none">
              CSS3
            </span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-base font-medium group-hover:rounded-none">
              JavaScript
            </span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-base font-medium group-hover:rounded-none">
              Tailwind
            </span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-base font-medium group-hover:rounded-none">
              SCSS
            </span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-base font-medium group-hover:rounded-none">
              ReactJS
            </span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-base font-medium group-hover:rounded-none">
              NextJS
            </span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-base font-medium group-hover:rounded-none">
              Bootstrap
            </span>
            <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-base font-medium group-hover:rounded-none">
              Material UI
            </span>
          </div>
        </div>

        {/* Backend Skills Card */}
        <div className="group bg-white border border-solid border-blue-500 shadow-2xl p-8 w-96 h-80 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl hover:rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center text-black">
            Backend
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-base font-medium group-hover:rounded-none">
              PHP
            </span>
            <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-base font-medium group-hover:rounded-none">
              MySQL
            </span>
            <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-base font-medium group-hover:rounded-none">
              MongoDB
            </span>
            <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-base font-medium group-hover:rounded-none">
              Node Js
            </span>
            <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-base font-medium group-hover:rounded-none">
              Python
            </span>
            <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-base font-medium group-hover:rounded-none">
              Firebase
            </span>
          </div>
        </div>

        {/* Other Skills Card */}
        <div className="group bg-white border border-solid border-blue-500 shadow-2xl p-8 w-96 h-80 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-3xl hover:rounded-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center text-black">
            Others
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full text-base font-medium group-hover:rounded-none">
              GitHub
            </span>
            <span className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full text-base font-medium group-hover:rounded-none">
              VS Code
            </span>
            <span className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full text-base font-medium group-hover:rounded-none">
              Postman
            </span>
            <span className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full text-base font-medium group-hover:rounded-none">
              Wordpress
            </span>
            <span className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full text-base font-medium group-hover:rounded-none">
              Shopify
            </span>
            <span className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full text-base font-medium group-hover:rounded-none">
              Canva
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
