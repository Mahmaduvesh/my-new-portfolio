import React from "react";

const Education = () => {
  return (
    <section id="education" className="text-center pt-20 pb-2 min-h-screen">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-wider uppercase leading-tight inline-block border-b-4 border-blue-500 pb-1">
        Education
      </h2>
      <p className="mt-4 text-md md:text-lg text-gray-800 px-4 sm:px-6">
        A journey through my academic career, from high school to my master's
        degree.
      </p>

      <div className="mt-12 flex flex-col items-center space-y-12 px-4 sm:px-4 relative">
        {/* Card 1 */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-xl p-8 w-full max-w-4xl relative z-40 sm:z-10 sm:mt-0">
          <h3 className="text-xl sm:text-2xl font-semibold text-white text-left mb-3">
            S S Agrawal Institute of Computer Science, Navsari
          </h3>
          <p className="text-md sm:text-base text-left text-white">
            Master of Computer Application - MCA, Computer Science
          </p>
          <p className="text-md sm:text-base text-left text-white">
            2021 - 2023
          </p>
          <p className="text-md sm:text-md text-left text-white">
            Grade: SPI 10 & 8.96 CPI
          </p>
          <p className="mt-4 text-md sm:text-md text-white text-justify">
            I completed a Master's degree in Computer Science at the S S Agrawal
            Institute of Computer Science, Navsari. I studied data structures,
            object-oriented programming, database management systems, operating
            systems, and computer networks.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-xl shadow-xl p-8 w-full max-w-4xl relative  -mt-10  sm:mt-0">
          <h3 className="text-xl sm:text-2xl font-semibold text-white text-left mb-3">
            S S Agrawal College, Navsari
          </h3>
          <p className="text-left text-white">
            Bachelor of Computer Application - BCA, Computer Science
          </p>
          <p className="text-left text-white">2019 - 2021</p>
          <p className="text-left text-white">Grade: 6.54 CGPA</p>
          <p className="mt-4 text-md sm:text-md text-white text-justify">
            I completed a Bachelor's degree in Computer Science at the S S
            Agrawal College, Navsari. My studies included data structures,
            algorithms, object-oriented programming, database management
            systems, operating systems, and computer networks.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-r from-yellow-400 to-red-500 rounded-xl shadow-xl p-8 w-full max-w-4xl relative z-40 -mt-10 sm:z-10 sm:mt-0">
          <h3 className="text-xl sm:text-2xl font-semibold text-white text-left mb-3">
            Shree M. N. Vidhyalay
          </h3>
          <p className="text-left text-white">(XII), Commerce</p>
          <p className="text-left text-white">March 2018</p>
          <p className="text-left text-white">Grade: 62%</p>
          <p className="mt-4 text-md sm:text-md text-white text-justify">
            I completed my class 12 high school education at Shree M N
            Vidhyalay, Khadsupa, Navsari, where I studied Commerce.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-gradient-to-r from-teal-400 to-indigo-600 rounded-xl shadow-xl p-8 w-full max-w-4xl relative  -mt-10  sm:mt-0">
          <h3 className="text-xl sm:text-2xl font-semibold text-white text-left mb-3">
            Shree M. N. Vidhyalay
          </h3>
          <p className="text-left text-white">(X)</p>
          <p className="text-left text-white">March 2016</p>
          <p className="text-left text-white">Grade: 59.83%</p>
          <p className="mt-4 text-md sm:text-md text-white text-justify">
            I completed my class 10 education at Shree M N Vidhyalay, Khadsupa,
            Navsari.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;
