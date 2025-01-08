import React, { useState } from 'react';
import { FaUser, FaMapMarkerAlt, FaCalendarAlt, FaSuitcase, FaDollarSign } from 'react-icons/fa';

function BookTravel() {
  const [formData, setFormData] = useState({
    name: '',
    from: '',
    to: '',
    duration: '',
    purpose: '',
    type: '',
    expenses: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const BACKEND_URL = 'http://172.16.70.34:5000';
    const apiUrl = `${BACKEND_URL}/api/auth/update/Abhay`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Travel booking successful', data);
      } else {
        console.log('Error:', data.message);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Book Your Travel</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center border border-gray-300 rounded-md p-2">
          <FaUser className="text-gray-500 mr-3" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-md p-2">
          <FaMapMarkerAlt className="text-gray-500 mr-3" />
          <input
            type="text"
            name="from"
            placeholder="From (City)"
            value={formData.from}
            onChange={handleChange}
            required
            className="w-full p-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-md p-2">
          <FaMapMarkerAlt className="text-gray-500 mr-3" />
          <input
            type="text"
            name="to"
            placeholder="To (Destination)"
            value={formData.to}
            onChange={handleChange}
            required
            className="w-full p-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-md p-2">
          <FaCalendarAlt className="text-gray-500 mr-3" />
          <input
            type="number"
            name="duration"
            placeholder="Duration (in days)"
            value={formData.duration}
            onChange={handleChange}
            required
            className="w-full p-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-md p-2">
          <FaSuitcase className="text-gray-500 mr-3" />
          <input
            type="text"
            name="purpose"
            placeholder="Purpose of Travel"
            value={formData.purpose}
            onChange={handleChange}
            required
            className="w-full p-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-md p-2">
          <FaSuitcase className="text-gray-500 mr-3" />
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="w-full p-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Travel Type</option>
            <option value="hotel">Hotel</option>
            <option value="flight">Flight</option>
            <option value="both">Hotel & Flight</option>
          </select>
        </div>

        <div className="flex items-center border border-gray-300 rounded-md p-2">
          <FaDollarSign className="text-gray-500 mr-3" />
          <input
            type="number"
            name="expenses"
            placeholder="Estimated Expenses"
            value={formData.expenses}
            onChange={handleChange}
            required
            className="w-full p-2 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-6 text-center">
          <button type="submit" className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-all duration-300">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookTravel;
