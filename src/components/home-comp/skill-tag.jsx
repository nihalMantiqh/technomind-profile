export default function SkillTag({ skill, colorClass, index }) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-sm animate-fadeIn cursor-default 
                  ${colorClass} hover:scale-110 transition-transform duration-300`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {skill}
    </span>
  );
}
