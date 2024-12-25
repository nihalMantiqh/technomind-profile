import React, { useState } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const ContactUS = () => {
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    latitude: "",
    longitude: "",
  });
  const [errors, setErrors] = useState({});
  const [markerPosition, setMarkerPosition] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits.";
    }
    if (!formData.latitude || !formData.longitude) {
      newErrors.location = "Please select a location on the map.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      console.log(formData);
    }
  };

  const handleMapClick = (e) => {
    const { lat, lng } = e.latLng.toJSON();
    setMarkerPosition({ lat, lng });
    setFormData({ ...formData, latitude: lat, longitude: lng });
  };

  return (
    <div className="max-w-4xl m-6 p-6 bg-white text-left shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mobile
          </label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your mobile number"
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm">{errors.mobile}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Select Location on Map
          </label>
          <div className="h-64 mt-2">
            {isLoaded ? (
              <GoogleMap
                onClick={handleMapClick}
                center={{ lat: 20.5937, lng: 78.9629 }} // Center to India
                zoom={4}
                mapContainerStyle={{ width: "100%", height: "100%" }}
              >
                {markerPosition && <Marker position={markerPosition} />}
              </GoogleMap>
            ) : (
              <p>Loading map...</p>
            )}
          </div>
          {errors.location && (
            <p className="text-red-500 text-sm">{errors.location}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUS;
