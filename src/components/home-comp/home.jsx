import React, { useState } from "react";
import AccordionButton from "./accordion-button";
import AboutSection from "./about-section";
import ProjectCarousel from "./carousel";
import SkillsSection from "./skills-section";
import Testimonials from "./testimonials";

const Home = () => {
  const [activeSection, setActiveSection] = useState("");

  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <div className="space-y-4">
        <div className="border rounded-lg shadow-sm">
          <AccordionButton
            title="About Me"
            isActive={activeSection === "about"}
            onClick={() =>
              setActiveSection(activeSection === "about" ? "" : "about")
            }
          />
          {activeSection === "about" && (
            <AboutSection isActive={activeSection === "about"} />
          )}
        </div>

        <div className="border rounded-lg shadow-sm">
          <AccordionButton
            title="Skills"
            isActive={activeSection === "skills"}
            onClick={() =>
              setActiveSection(activeSection === "skills" ? "" : "skills")
            }
          />
          {activeSection === "skills" && (
            <SkillsSection isActive={activeSection === "skills"} />
          )}
        </div>
      </div>
      <ProjectCarousel />
      <Testimonials />
    </div>
  );
};

export default Home;
