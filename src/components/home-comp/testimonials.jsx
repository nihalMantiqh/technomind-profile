import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Testimonials() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchtestimonials = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data.slice(0, 5)); // Limit to 5 items for brevity
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchtestimonials();
  }, []);

  if (loading) return <p className="text-gray-700">Loading...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg space-y-4 bg-gradient-to-br mt-4 from-indigo-50 to-purple-50">
      <h2 className="text-xl font-semibold text-indigo-900">Testimonials</h2>
      {data.map((item) => (
        <div key={item.id} className="p-3 bg-gray-100 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-indigo-800">{item.title}</h3>
          <p className="text-gray-600">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
