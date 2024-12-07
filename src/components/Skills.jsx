// src/components/Skills.jsx
import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center py-12"
    >
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <ul className="mt-4 space-y-2 text-lg">
        <li>HTML, CSS, JavaScript</li>
        <li>React, Node.js</li>
        <li>Tailwind CSS</li>
        {/* Add more skills as needed */}
      </ul>
    </section>
  );
};

export default Skills;
