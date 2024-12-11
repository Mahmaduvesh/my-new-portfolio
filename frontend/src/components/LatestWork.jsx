// src/components/Skills.jsx
import React from "react";
import Portfolio from "../assets/images/portfolio.png";
import PioneerDigital from "../assets/images/pioneer-digital.webp";
import HutsHunts from "../assets/images/HutsHunts.png";
import Buildco from "../assets/images/buildco.png";
import iseeWell from "../assets/images/iseeWell.png";
import iseeWell2 from "../assets/images/iseeWell2.png";
import Hackathon from "../assets/images/Hackathon.png";
import DrinkMenu from "../assets/images/DrinkMenu.png";
import AssignmentCrud from "../assets/images/Assignment-Crud.png";
import TherapistPage from "../assets/images/TherapistPage.png";
import AllAccess from "../assets/images/AllAccess.png";
import NotesApp from "../assets/images/NotesApp.png";
import WebDevEnglish from "../assets/images/WebDevEnglish.webp";
import CustomerReview from "../assets/images/CustomerReview.png";
import Therapist from "../assets/images/Therapist.png";

const LatestWork = () => {
  return (
    <section
      id="LatestWork"
      className="min-h-screen flex flex-col items-center justify-center py-12"
    >
      <section class="max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16 mt-10">
        <h2 class="text-4xl  bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto uppercase leading-tight border-b-4 border-blue-500 text-center text-white">
          Latest Works
        </h2>

        {/* Buildco */}
        <div class="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div class="order-2 sm:order-1 w-full">
            <h3 class="text-[#ffe578] font-bold text-2xl md:text-4xl">
              Buildco
            </h3>
            <span class="text-[#ffe578] text-base md:text-lg">
              (Freelance Project)
            </span>
            <p class="text-justify text-sm md:text-base mt-2">
              I successfully implemented a MERN stack login/signup system with
              validation for secure authentication. I developed the main
              homepage and integrated CRUD operations for the estimate section,
              using a RESTful API. The project, based on a Figma prototype,
              handles construction measurements, calculates costs, and ensures
              smooth backend/frontend interaction for accurate estimates.
            </p>

            <ul class="flex flex-wrap gap-2 mt-2">
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #mongoDB
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #express.js
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #react.js
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #node.js
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #tailwind css
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #javascript
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
          <div class="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div class="w-4 h-4 rounded-full border-[3px] border-[#ffe578] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://huts-hunts.netlify.app/"
            class="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div class="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
              <img
                class="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={Buildco}
                alt=""
              />
              <span class="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#ffe578] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Buildco
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
        </div>

        {/* iseeWell */}
        <div class="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
          <div class="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div class="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://procodrr.com"
            class="flex w-full relative justify-center sm:justify-start"
          >
            <div class="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
              <div className="bg-transparent">
                <img
                  class="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                  src={iseeWell}
                  alt=""
                />
              </div>

              <span class="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                iSeeWell [ Clinics Dashboard ]
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>

          <div class="w-full">
            <h3 class="text-[#459bd5] font-bold text-2xl md:text-4xl">
              iSeeWell [ Clinics Dashboard ]
            </h3>
            <span class="text-[#459bd5] text-base md:text-lg">
              (Freelance Project Task)
            </span>
            <p class="text-justify text-sm md:text-base mt-2">
              In this project, I designed the UI based on the Figma prototype,
              implementing it into a click portal dashboard using Next.js. This
              includes creating the main Leads page, Calendar page, Customers
              page, Staff page, and Clinic profile page, all with a clean and
              user-friendly interface. I also developed a navbar, footer, and
              sidebar for seamless navigation, ensuring a cohesive design
              throughout the portal.
            </p>

            <ul class="flex flex-wrap gap-2 mt-2">
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #next.js
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #tailwind css
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
        </div>

        {/* Iseewell Analytics dashboard */}
        <div class="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
          <div class="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div class="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://procodrr.com"
            class="flex w-full relative justify-center sm:justify-start"
          >
            <div class="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
              <div className="bg-transparent">
                <img
                  class="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                  src={iseeWell2}
                  alt=""
                />
              </div>

              <span class="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                iSeeWell [ Analytics Dashboard ]
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>

          <div class="w-full">
            <h3 class="text-[#459bd5] font-bold text-2xl md:text-4xl">
              iSeeWell [ Analytics Dashboard ]
            </h3>
            <span class="text-[#459bd5] text-base md:text-lg">
              (Freelance Project Task)
            </span>
            <p class="text-justify text-sm md:text-base mt-2">
              I designed the UI based on a Figma prototype, building an
              analytics dashboard with separate Analytics and Clinics sections
              in the sidebar. I also created a navbar, footer, and sidebar for
              navigation, along with login, signup, forgot password, reset
              password, and lock screen pages, all styled with Tailwind CSS and
              developed using Next.js.
            </p>

            <ul class="flex flex-wrap gap-2 mt-2">
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #next.js
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #tailwind css
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
        </div>

        {/* Hackathon */}
        <div class="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div class="order-2 sm:order-1 w-full">
            <h3 class="text-[#ffe578] font-bold text-2xl md:text-4xl">
              Hackathon
            </h3>
            <span class="text-[#ffe578] text-base md:text-lg">
              (Freelance Project)
            </span>
            <p class="text-justify text-sm md:text-base mt-2">
              This project includes login, signup, and several other screens
              accessible from the navbar, all designed using React.js, Tailwind
              CSS, and based on a Figma prototype for a seamless user
              experience.
            </p>

            <ul class="flex flex-wrap gap-2 mt-2">
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #react.js
              </li>

              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #Tailwind css
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #javascript
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
          <div class="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div class="w-4 h-4 rounded-full border-[3px] border-[#ffe578] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://huts-hunts.netlify.app/"
            class="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div class="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
              <img
                class="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={Hackathon}
                alt=""
              />
              <span class="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#ffe578] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Hackathon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
        </div>

        {/* Portfolio */}
        <div class="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative">
          <div class="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div class="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://procodrr.com"
            class="flex w-full relative justify-center sm:justify-start"
          >
            <div class="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
              <div className="bg-transparent">
                <img
                  class="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                  src={Portfolio}
                  alt=""
                />
              </div>

              <span class="flex group-hover:-top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Portfolio
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>

          <div class="w-full">
            <h3 class="text-[#459bd5] font-bold text-2xl md:text-4xl">
              Portfolio
            </h3>
            <span class="text-[#459bd5] text-base md:text-lg">
              (Self Project)
            </span>
            <p class="text-justify text-sm md:text-base mt-2">
              Sharpen my skills by exploring advanced concepts, tackling
              real-world challenges, and creating hands-on projects that
              demonstrate expertise.
            </p>

            <ul class="flex flex-wrap gap-2 mt-2">
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #react.js
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #tailwind css
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
        </div>

        {/* HutsHunts */}
        <div class="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div class="order-2 sm:order-1 w-full">
            <h3 class="text-[#ffe578] font-bold text-2xl md:text-4xl">
              HutsHunts
            </h3>
            <span class="text-[#ffe578] text-base md:text-lg">
              (Freelance Project)
            </span>
            <p class="text-justify text-sm md:text-base mt-2">
              I created a fully responsive HutHunts website for real estate,
              showcasing various packages, floor plans, and design
              recommendations. The site allows users to track the progress of
              their construction project in real-time. It also features a mobile
              app and a detailed step-by-step process for a seamless experience,
              along with a FAQ section in the navbar and footer.
            </p>

            <ul class="flex flex-wrap gap-2 mt-2">
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #react.js
              </li>

              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #Tailwind css
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #javascript
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
          <div class="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div class="w-4 h-4 rounded-full border-[3px] border-[#ffe578] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="https://huts-hunts.netlify.app/"
            class="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div class="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
              <img
                class="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={HutsHunts}
                alt=""
              />
              <span class="flex group-hover:-top-14 ease-jump duration-200 text-black bg-[#ffe578] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                HutsHunts
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
        </div>

        {/* DrinkMenu */}
        <div class="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div class="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div class="w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="#"
            class="flex w-full relative justify-center sm:justify-start"
          >
            <div class="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200">
              <img
                class="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={DrinkMenu}
                alt=""
              />
              <span class="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Restaurant Drink Menu
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>

          <div class="w-full">
            <h3 class="text-[#fc815c] font-bold text-2xl md:text-4xl">
              Restaurant Drink Menu
            </h3>
            <span class="text-[#fc815c] text-base md:text-lg">
              (Freelance Project)
            </span>
            <p class="text-justify text-sm md:text-base mt-2">
              I am creating a restaurant drink menu that customers can scan to
              view and order drinks like coffee and cappuccino. The project uses
              Firebase Realtime Database, so when a customer submits an order,
              it immediately appears on the admin side. The admin is notified of
              the new order and can process and manage it efficiently.
            </p>

            <ul class="flex flex-wrap gap-2 mt-2">
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #react.js
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #material ui
              </li>
            </ul>
          </div>
        </div>

        {/* Therapist */}
        <div class="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div class="order-2 sm:order-1 w-full">
            <h3 class="text-[#47afa1] font-bold text-2xl md:text-4xl">
              Therapist Main Page
            </h3>
            <span class="text-[#47afa1] text-base md:text-lg">
              (Freelance Project Task)
            </span>
            <p class="text-justify text-sm md:text-base mt-2">
              I am designing a fully responsive Therapist Page using HTML, CSS,
              and JavaScript to ensure an engaging and user-friendly experience
              across all devices. The design focuses on accessibility,
              aesthetics, and functionality to meet modern web standards.
            </p>

            <ul class="flex flex-wrap gap-2 mt-2">
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #html
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #css
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #js
              </li>
            </ul>
          </div>
          <div class="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div class="w-4 h-4 rounded-full border-[3px] border-[#47afa1] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="#"
            class="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div class="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
              <img
                class="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={Therapist}
                alt=""
              />
              <span class="flex group-hover:-top-14 ease-jump duration-200 bg-[#47afa1] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Therapist Main Page
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
        </div>

        {/* Therpist Page */}
        <div class="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div class="order-2 sm:order-1 w-full">
            <h3 class="text-[#47afa1] font-bold text-2xl md:text-4xl">
              Therapist Sub Page
            </h3>
            <span class="text-[#47afa1] text-base md:text-lg">
              (Freelance Project Task)
            </span>
            <p class="text-justify text-sm md:text-base mt-2">
              I am designing a fully responsive Therapist Page using HTML, CSS,
              and JavaScript to ensure an engaging and user-friendly experience
              across all devices. The design focuses on accessibility,
              aesthetics, and functionality to meet modern web standards.
            </p>

            <ul class="flex flex-wrap gap-2 mt-2">
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #html
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #css
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #js
              </li>
            </ul>
          </div>
          <div class="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div class="w-4 h-4 rounded-full border-[3px] border-[#47afa1] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="#"
            class="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div class="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
              <img
                class="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={TherapistPage}
                alt=""
              />
              <span class="flex group-hover:-top-14 ease-jump duration-200 bg-[#47afa1] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Therapist sub Page
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
        </div>

        {/* Assignment-Crud */}
        <div class="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div class="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div class="w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="#"
            class="flex w-full relative justify-center sm:justify-start"
          >
            <div class="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200">
              <img
                class="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={AssignmentCrud}
                alt=""
              />
              <span class="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Assignment-Crud
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>

          <div class="w-full">
            <h3 class="text-[#fc815c] font-bold text-2xl md:text-4xl">
              Assignment-Crud
            </h3>
            <span class="text-[#fc815c] text-base md:text-lg">
              (Freelance Project Task)
            </span>
            <p class="text-justify text-sm md:text-base mt-2">
              I have successfully completed a MERN stack login and signup system
              with robust validation to ensure secure and reliable user
              authentication. Additionally, I developed CRUD operations with a
              seamless integration between the frontend and backend, providing a
              smooth user experience. The project also includes a
              well-structured RESTful API for efficient data handling, meeting
              the client's requirements effectively and ensuring scalability for
              future enhancements.
            </p>

            <ul class="flex flex-wrap gap-2 mt-2">
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #react.js
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #material ui
              </li>
            </ul>
          </div>
        </div>

        {/* All Access Coach Leasing */}
        <div class="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div class="order-2 sm:order-1 w-full">
            <h3 class="text-[#47afa1] font-bold text-2xl md:text-4xl">
              All Access Coach Leasing
            </h3>
            <span class="text-[#47afa1] text-base md:text-lg">
              (Internship Project)
            </span>
            <p class="text-justify text-sm md:text-base mt-2">
              All Access Coach Leasing is a leading provider of luxurious coach
              services, catering to the celebrity and entertainment industry.
              With a focus on delivering exceptional comfort and convenience,
              All Access Coach Leasing offers full-service transportation
              solutions for various events and occasions
            </p>

            <ul class="flex flex-wrap gap-2 mt-2">
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #react.js
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #node.js
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #php(mysql)
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #css
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #javascript
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
          <div class="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div class="w-4 h-4 rounded-full border-[3px] border-[#47afa1] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="#"
            class="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div class="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
              <img
                class="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={AllAccess}
                alt=""
              />
              <span class="flex group-hover:-top-14 ease-jump duration-200 bg-[#47afa1] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                All Access Coach Leasing
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
        </div>

        {/* CustomerReview */}
        <div class="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div class="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div class="w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="#"
            class="flex w-full relative justify-center sm:justify-start"
          >
            <div class="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200">
              <img
                class="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={CustomerReview}
                alt=""
              />
              <span class="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Customer Review
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>

          <div class="w-full">
            <h3 class="text-[#fc815c] font-bold text-2xl md:text-4xl">
              Customer Review
            </h3>
            <span class="text-[#fc815c] text-base md:text-lg">
              (Interview Task)
            </span>
            <p class="text-justify text-sm md:text-base mt-2">
              Test Task by Knovator - Technical Round <br /> Developed a review
              system where users can submit reviews with title, rating, and
              description, with options to submit or reset. The reviews are
              displayed in a list with a delete button to remove any entry
            </p>

            <ul class="flex flex-wrap gap-2 mt-2">
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #react.js
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #material ui
              </li>
            </ul>
          </div>
        </div>

        {/* Notes App */}
        <div class="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div class="order-2 sm:order-1 w-full">
            <h3 class="text-[#47afa1] font-bold text-2xl md:text-4xl">
              Notes App
            </h3>
            <span class="text-[#47afa1] text-base md:text-lg">
              (Self Project)
            </span>
            <p class="text-justify text-sm md:text-base mt-2">
              I created a note app using HTML, CSS, and JavaScript, where users
              can add, delete, and manage notes categorized by social, personal,
              and important work with different colors. Users can also mark
              notes as favorites and easily view them.
            </p>

            <ul class="flex flex-wrap gap-2 mt-2">
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #html
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #css
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #javascript
              </li>
            </ul>
          </div>
          <div class="h-[1px] left-1/2 right-1/4 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div class="w-4 h-4 rounded-full border-[3px] border-[#47afa1] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="#"
            class="order-1 sm:order-2 flex w-full relative justify-center sm:justify-start"
          >
            <div class="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200 sm:ml-auto">
              <img
                class="max-w-[400px] w-full relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={NotesApp}
                alt=""
              />
              <span class="flex group-hover:-top-14 ease-jump duration-200 bg-[#47afa1] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Notes App
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 mt-12 sm:gap-[80px] items-center sm:mt-20 relative">
          <div class="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div class="w-4 h-4 rounded-full border-[3px] border-[#fc815c] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"></div>
          <a
            href="#"
            class="flex w-full relative justify-center sm:justify-start"
          >
            <div class="flex flex-col items-center relative group hover:scale-105 ease-in-out sm:mr-auto duration-200">
              <img
                class="max-w-[400px] w-full mr-auto relative z-10 drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                src={PioneerDigital}
                alt=""
              />
              <span class="flex group-hover:-top-14 ease-jump duration-200 bg-[#fc815c] sm:absolute left-1/2 sm:-translate-x-1/2 top-5 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2">
                Pioneer Digital
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </span>
            </div>
          </a>

          <div class="w-full">
            <h3 class="text-[#fc815c] font-bold text-2xl md:text-4xl">
              Pioneer Digital
            </h3>
            <span class="text-[#fc815c] text-base md:text-lg">
              (Digital Marketing Agency)
            </span>
            <p class="text-justify text-sm md:text-base mt-2">
              One of the featured site while working with TheBrandWick.com
              (agency). Worked as a frontend developer to make the site
              user-interactive and responsive.
            </p>

            <ul class="flex flex-wrap gap-2 mt-2">
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #react.js
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #express.js
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #node.js
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #swiper.js
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #mongoDB
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #mongoose
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #css
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #javascript
              </li>
              <li class="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
        </div>
        <div class="w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
      </section>
    </section>
  );
};

export default LatestWork;
