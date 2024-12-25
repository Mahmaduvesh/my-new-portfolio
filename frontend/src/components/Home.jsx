// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";
import LatestWork from "./LatestWork";
import Footer from "./Footer";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      {/* Navbar Section */}
      <Navbar />

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* LatestWork Section */}
      <section id="Latest Work">
        <LatestWork />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <Experience />
      </section>

      {/* Education Section */}
      <section id="education">
        <Education />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer Section */}
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
