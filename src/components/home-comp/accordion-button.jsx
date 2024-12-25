import { ChevronDown } from "lucide-react";

export default function AccordionButton({ title, isActive, onClick }) {
  return (
    <button
      className="w-full p-4 flex justify-between items-center bg-indigo-50 hover:bg-indigo-100 
                 rounded-lg transition-all duration-300 hover:scale-[1.01]"
      onClick={onClick}
    >
      <h2 className="text-xl font-semibold text-indigo-900">{title}</h2>
      <ChevronDown
        className={`transform transition-transform duration-300 text-indigo-600 
                    ${isActive ? "rotate-180" : "rotate-0"}`}
      />
    </button>
  );
}
