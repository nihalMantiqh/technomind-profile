export default function Education({ education, index }) {
  return (
    <div
      className="ml-4 p-3 bg-white rounded-lg shadow-sm hover:scale-[1.02] hover:shadow-md 
                 transition-all duration-300 animate-slideUp"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <p className="font-medium text-indigo-900">{education.school}</p>
      <p className="text-indigo-700">
        {education.degree} - {education.year}
      </p>
      <p className="text-indigo-600">{education.location}</p>
    </div>
  );
}
