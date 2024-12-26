// src/components/Accordion.js
import React, { useState } from "react";

const Accordion = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);

  const toggleAbout = () => setIsAboutOpen((prev) => !prev);
  const toggleSkills = () => setIsSkillsOpen((prev) => !prev);

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Accordion Item: About Me */}
      <div className="mb-4">
        <button
          onClick={toggleAbout}
          className="w-full flex justify-between items-center p-5 bg-gradient-to-r from-green-400 to-green-500 text-white font-semibold rounded-lg shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50 transition-all ease-in-out duration-300"
        >
          <h2 className="text-lg">About Me</h2>
          <span className="text-xl">
            {isAboutOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            )}
          </span>
        </button>
        <div
          className={`mt-3 overflow-hidden transition-all duration-500 ease-in-out ${
            isAboutOpen ? "max-h-96 p-4" : "max-h-0 p-0"
          }`}
        >
          <p className="text-gray-800">
            I'm a passionate software developer with experience in building web
            applications, creating user interfaces, and solving problems with
            code. I enjoy learning new technologies and continuously improving
            my skills.
          </p>
        </div>
      </div>

      {/* Accordion Item: Skills */}
      <div>
        <button
          onClick={toggleSkills}
          className="w-full flex justify-between items-center p-5 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 transition-all ease-in-out duration-300"
        >
          <h2 className="text-lg">Skills</h2>
          <span className="text-xl">
            {isSkillsOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            )}
          </span>
        </button>
        <div
          className={`mt-3 overflow-hidden transition-all duration-500 ease-in-out ${
            isSkillsOpen ? "max-h-96 p-4" : "max-h-0 p-0"
          }`}
        >
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>React.js</li>
            <li>JavaScript (ES6+)</li>
            <li>Node.js</li>
            <li>CSS & SASS</li>
            <li>HTML5</li>
            <li>Git & GitHub</li>
            <li>MongoDB, SQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
