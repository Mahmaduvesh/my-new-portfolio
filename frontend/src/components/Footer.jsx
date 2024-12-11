import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
  AiFillMail,
  AiFillGithub,
} from "react-icons/ai";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Upper Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-700 pb-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Mahmaduvesh Khalifa</h2>
            <p className="text-sm text-gray-400">
              Empowering the web, one line of code at a time.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mahmaduvesh-khalifa-b48ba41a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin className="h-6 w-6" />
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/Mahmaduvesh_k"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition"
              aria-label="Twitter"
            >
              <AiFillTwitterCircle className="h-6 w-6" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/mr_uv_0311/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 transition"
              aria-label="Instagram"
            >
              <AiFillInstagram className="h-6 w-6" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/uvesh.khalifa.94"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition"
              aria-label="Facebook"
            >
              <AiFillFacebook className="h-6 w-6" />
            </a>

            {/* Email */}
            <a
              href="mailto:khalifamahmaduvesh@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-700 transition"
              aria-label="Email"
            >
              <AiFillMail className="h-6 w-6" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/mahmaduvesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-gray-400 transition"
              aria-label="GitHub"
            >
              <AiFillGithub className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Lower Section */}
        <div className="text-center text-sm text-gray-400 mt-6">
          <p>© 2024 Mahmaduvesh Khalifa. All rights reserved.</p>
          <p>
            Made with ❤️ and dedication by{" "}
            <span className="font-semibold text-white">MK</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
