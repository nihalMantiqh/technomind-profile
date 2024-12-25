import { useContext } from "react";
import { AppContext } from "../../App";
import Education from "./education-comp";
import Experience from "./experience";

export default function AboutSection({ isActive }) {
  const { resumeData } = useContext(AppContext);

  return (
    <div
      className={`transform transition-all duration-500 
                  ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-4 opacity-0"
                  } 
                  p-4 space-y-4 bg-gradient-to-br from-indigo-50 to-purple-50`}
    >
      <div className="p-6 bg-white rounded-lg shadow-lg space-y-4 animate-fadeIn">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <h3 className="text-2xl font-semibold text-indigo-900">
            {resumeData.about.name}
          </h3>
          <div className="text-center md:text-right">
            <p className="text-indigo-700 font-medium">
              {resumeData.about.email}
            </p>
            <p className="text-indigo-700 font-medium">
              {resumeData.about.phone}
            </p>
          </div>
        </div>
        <p className="text-gray-600 text-justify leading-relaxed">
          {resumeData.about.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <h3 className="font-medium text-indigo-900">Education</h3>
          {resumeData.about.education.map((edu, index) => (
            <Education key={index} education={edu} index={index} />
          ))}
        </div>
        <div>
          <h3 className="font-medium text-indigo-900">Education</h3>
          {resumeData.about.experience.map((exp, index) => (
            <Experience key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
