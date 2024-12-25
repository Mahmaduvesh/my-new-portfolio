import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 min-h-screen">
      <div className="flex justify-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-wider uppercase leading-tight inline-block border-b-4 border-blue-500 pb-1">
          Experience
        </h2>
      </div>

      {/* Timeline Section */}
      <div className="flex items-center justify-center px-6 md:px-60">
        <div className="space-y-6 border-l-2 border-dashed border-gray-300">
          {/* Freelance Work MERN Stack Developer */}
          <div className="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute -top-0.5 z-0 -ml-3.5 h-7 w-7 rounded-full text-yellow-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            <div className="ml-6">
              <h4 className="font-bold text-blue-500">
                MERN Stack Developer (Freelance)
              </h4>

              {/* Bullet Points */}
              <ul className="mt-2 text-sm text-gray-800 space-y-2 list-disc pl-6">
                <li>
                  Translated complex Figma UI/UX designs into responsive layouts
                  using HTML, CSS, Tailwind CSS, and MUI.
                </li>
                <li>
                  Built dynamic web applications using MERN stack (MongoDB,
                  Express, ReactJS, Node.js) to improve backend performance.
                </li>
                <li>
                  Collaborated with clients to create mobile-first, fully
                  responsive web applications.
                </li>
                <li>
                  Developed server-rendered applications with Next.js, ReactJS,
                  and Tailwind CSS for fast and responsive design.
                </li>
                <li>
                  Technologies used: HTML5, CSS3,Tailwind CSS,
                  JavaScript,MongoDB,Express.js, React.js,Node.js,MySQL.
                </li>
              </ul>

              <span className="mt-1 block text-sm font-semibold text-blue-500">
                Aug 2024 – Present
              </span>
            </div>
          </div>

          {/* Timeline Item 1 (Web Developer Intern) */}
          <div className="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute -top-0.5 z-0 -ml-3.5 h-7 w-7 rounded-full text-blue-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            <div className="ml-6">
              <h4 className="font-bold text-blue-500">Web Developer Intern</h4>
              <ul className="mt-2 text-sm text-gray-800 space-y-2 list-disc pl-6">
                <li>
                  {" "}
                  Built real-time web apps with the MERN stack, improving user
                  retention and server performance.{" "}
                </li>
                <li>
                  Worked on creating RESTful APIs, enhancing system reliability
                  and reducing data retrieval times.
                </li>
                <li>
                  Technologies used: HTML, CSS, JavaScript, React.js, PHP,
                  MySQL, MongoDB.
                </li>
              </ul>
              <span className="mt-1 block text-sm font-semibold text-blue-500">
                May 2024 - July 2024
              </span>
            </div>
          </div>

          {/* Timeline Item 2 (Software Developer Intern) */}
          <div className="relative w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="absolute -top-0.5 z-0 -ml-3.5 h-7 w-7 rounded-full text-green-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>
            <div className="ml-6">
              <h4 className="font-bold text-green-500">
                Software Developer Intern
              </h4>
              <ul className="mt-2 text-sm text-gray-800 space-y-2 list-disc pl-6">
                <li>
                  Contributed to all stages of software development, from
                  requirements to deployment.
                </li>
                <li>
                  Worked with senior developers to add 10+ new features,
                  enhancing user experience and reducing complaints.
                </li>
                <li>
                  Developed web apps with HTML, CSS, JavaScript, and ReactJS,
                  improving user engagement and reducing load times.
                </li>
                <li>
                  Assisted in troubleshooting and debugging to ensure smooth
                  project delivery.
                </li>

                <li>
                  Technologies used: HTML5, CSS3,Tailwind CSS,
                  JavaScript,MongoDB,Express.js,
                  React.js,Node.js,MySQL,PHP,Wordpress
                </li>
              </ul>
              <span className="mt-1 block text-sm font-semibold text-green-500">
                January 2023 - June 2023
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
