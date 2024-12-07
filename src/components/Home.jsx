// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Education from "../components/Education";

const Home = () => {
  return (
    <div>
      {/* Navbar Section */}
      <Navbar />

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <Experience />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Education Section */}
      <section id="education">
        <Education />
      </section>
    </div>
  );
};

export default Home;
