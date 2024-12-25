import { useContext } from "react";
import { AppContext } from "../../App";
import SkillTag from "./skill-tag";

export default function SkillsSection({ isActive }) {
  const { resumeData } = useContext(AppContext);

  return (
    <div
      className={`transform transition-all duration-500 
                ${
                  isActive
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-4 opacity-0"
                } 
                p-4 space-y-6 bg-gradient-to-br from-indigo-50 to-purple-50`}
    >
      <div className="space-y-6 animate-fadeIn">
        <div>
          <h3 className="font-medium text-indigo-900 mb-2">
            Languages & Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.languages.map((skill, index) => (
              <SkillTag
                key={index}
                skill={skill}
                colorClass="bg-indigo-100 text-indigo-700"
                index={index}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-medium text-indigo-900 mb-2">Frameworks</h3>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.frameworks.map((framework, index) => (
              <SkillTag
                key={index}
                skill={framework}
                colorClass="bg-purple-100 text-purple-700"
                index={index}
              />
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-medium text-indigo-900 mb-2">Cloud Platforms</h3>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.cloud.map((platform, index) => (
              <SkillTag
                key={index}
                skill={platform}
                colorClass="bg-pink-100 text-pink-700"
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
