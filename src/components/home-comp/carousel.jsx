import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectCarousel() {
  const { resumeData } = useContext(AppContext);

  const [currentProject, setCurrentProject] = useState(0);
  const [direction, setDirection] = useState("right");

  const nextProject = () => {
    setDirection("right");
    setCurrentProject((prev) => (prev + 1) % resumeData.projects.length);
  };

  const prevProject = () => {
    setDirection("left");
    setCurrentProject(
      (prev) =>
        (prev - 1 + resumeData.projects.length) % resumeData.projects.length
    );
  };

  return (
    <div className="border rounded-lg p-6 space-y-4 bg-gradient-to-br mt-4 from-indigo-50 to-purple-50">
      <h2 className="text-xl font-semibold text-indigo-900">Projects</h2>
      <div className="relative">
        <div
          className={`transform transition-all duration-500 
                        ${
                          direction === "right"
                            ? "translate-x-0"
                            : "-translate-x-0"
                        }`}
        >
          <div className="space-y-4 text-left">
            <h3 className="text-lg font-medium text-indigo-900 animate-fadeIn">
              {resumeData.projects[currentProject].title}
            </h3>
            <p className="text-indigo-700 animate-fadeIn">
              {resumeData.projects[currentProject].tech}
            </p>
            <ul className="list-image-none ml-6 space-y-2 text-indigo-800">
              {resumeData.projects[currentProject].highlights.map(
                (highlight, index) => (
                  <li
                    key={index}
                    className="animate-slideUp text-left"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {highlight}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={prevProject}
            className="p-2 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-700 
                         transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextProject}
            className="p-2 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-700 
                         transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
