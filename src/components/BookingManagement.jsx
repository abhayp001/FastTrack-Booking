import React from 'react';
import { FaCheck, FaTimes, FaUser, FaPlane, FaCalendarAlt, FaClock, FaMoneyBillWave } from 'react-icons/fa';
import { useBookingContext } from '../BookingContext'; 

function BookingManagement() {
  const { bookings, handleAction } = useBookingContext();

  return (
    <div className="p-6 bg-gray-100 shadow-sm rounded-md">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Booking Management</h2>
      <p className="text-sm text-gray-600 mb-6">Manage all your bookings here.</p>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center space-x-2">
              <FaUser className="text-gray-500" />
              <h3 className="text-lg font-semibold text-gray-900">{booking.employeeName}</h3>
            </div>

            <div className="flex items-center mt-2 text-sm text-gray-600">
              <FaPlane className="text-gray-400 mr-2" />
              <p>{booking.fromTo}</p>
            </div>

            <div className="flex items-center mt-2 text-sm text-gray-600">
              <FaCalendarAlt className="text-gray-400 mr-2" />
              <p>{booking.date}</p>
            </div>

            <div className="flex items-center mt-2 text-sm text-gray-600">
              <FaClock className="text-gray-400 mr-2" />
              <p>{booking.time}</p>
            </div>

            <div className="flex items-center mt-2 text-sm text-gray-600">
              <p className="mr-2">Purpose:</p>
              <p>{booking.purpose}</p>
            </div>

            <div className="flex items-center mt-2 text-sm text-gray-600 font-medium">
              <FaMoneyBillWave className="text-gray-400 mr-2" />
              <p>{booking.price}</p>
            </div>

            <div className="mt-6 flex justify-between space-x-4">
              <button
                className="py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors duration-200 flex items-center space-x-2"
                onClick={() => handleAction(booking.id, 'accept')}
              >
                <FaCheck />
                <span>Accept</span>
              </button>
              <button
                className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 flex items-center space-x-2"
                onClick={() => handleAction(booking.id, 'reject')}
              >
                <FaTimes />
                <span>Reject</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingManagement;
