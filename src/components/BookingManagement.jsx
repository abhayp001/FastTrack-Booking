// import React from 'react';
// import { FaCheck, FaTimes, FaUser, FaPlane, FaCalendarAlt, FaClock, FaMoneyBillWave } from 'react-icons/fa';

// function BookingManagement() {
//   // Sample bookings data
//   const bookings = [
//     {
//       id: 1,
//       employeeName: 'John Doe',
//       fromTo: 'India to US',
//       date: '2025-01-10',
//       time: '10:00 AM',
//       purpose: 'Business',
//       price: '$1200',
//     },
//     {
//       id: 2,
//       employeeName: 'Jane Smith',
//       fromTo: 'UK to Canada',
//       date: '2025-02-15',
//       time: '2:00 PM',
//       purpose: 'Conference',
//       price: '$800',
//     },
//     {
//       id: 3,
//       employeeName: 'Samuel Green',
//       fromTo: 'Germany to Japan',
//       date: '2025-03-01',
//       time: '9:00 AM',
//       purpose: 'Training',
//       price: '$1000',
//     },
//     // Add more bookings as needed
//   ];

//   return (
//     <div className="p-6 bg-gray-100 shadow-sm rounded-md">
//       <h2 className="text-3xl font-semibold text-gray-800 mb-6">Booking Management</h2>
//       <p className="text-sm text-gray-600 mb-6">Manage all your bookings here.</p>

//       {/* Displaying all bookings */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {bookings.map((booking) => (
//           <div
//             key={booking.id}
//             className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
//           >
//             {/* Employee Name with Icon */}
//             <div className="flex items-center space-x-2">
//               <FaUser className="text-gray-500" />
//               <h3 className="text-lg font-semibold text-gray-900">{booking.employeeName}</h3>
//             </div>

//             {/* From-To with Icon */}
//             <div className="flex items-center mt-2 text-sm text-gray-600">
//               <FaPlane className="text-gray-400 mr-2" />
//               <p>{booking.fromTo}</p>
//             </div>

//             {/* Date with Icon */}
//             <div className="flex items-center mt-2 text-sm text-gray-600">
//               <FaCalendarAlt className="text-gray-400 mr-2" />
//               <p>{booking.date}</p>
//             </div>

//             {/* Time with Icon */}
//             <div className="flex items-center mt-2 text-sm text-gray-600">
//               <FaClock className="text-gray-400 mr-2" />
//               <p>{booking.time}</p>
//             </div>

//             {/* Purpose with Icon */}
//             <div className="flex items-center mt-2 text-sm text-gray-600">
//               <p className="mr-2">Purpose:</p>
//               <p>{booking.purpose}</p>
//             </div>

//             {/* Price with Icon */}
//             <div className="flex items-center mt-2 text-sm text-gray-600 font-medium">
//               <FaMoneyBillWave className="text-gray-400 mr-2" />
//               <p>{booking.price}</p>
//             </div>

//             {/* Action Buttons */}
//             <div className="mt-6 flex justify-between space-x-4">
//               <button
//                 className="py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors duration-200 flex items-center space-x-2"
//               >
//                 <FaCheck />
//                 <span>Accept</span>
//               </button>
//               <button
//                 className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 flex items-center space-x-2"
//               >
//                 <FaTimes />
//                 <span>Reject</span>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default BookingManagement;










// import React, { useState } from 'react';
// import { FaCheck, FaTimes, FaUser, FaPlane, FaCalendarAlt, FaClock, FaMoneyBillWave } from 'react-icons/fa';

// function BookingManagement() {
//   // Sample bookings data with 10 bookings
//   const initialBookings = [
//     { id: 1, employeeName: 'John Doe', fromTo: 'India to US', date: '2025-01-10', time: '10:00 AM', purpose: 'Business', price: '$1200' },
//     { id: 2, employeeName: 'Jane Smith', fromTo: 'UK to Canada', date: '2025-02-15', time: '2:00 PM', purpose: 'Conference', price: '$800' },
//     { id: 3, employeeName: 'Samuel Green', fromTo: 'Germany to Japan', date: '2025-03-01', time: '9:00 AM', purpose: 'Training', price: '$1000' },
//     { id: 4, employeeName: 'Alice Johnson', fromTo: 'US to France', date: '2025-04-10', time: '11:00 AM', purpose: 'Business', price: '$1500' },
//     { id: 5, employeeName: 'Bob Brown', fromTo: 'Germany to UK', date: '2025-05-15', time: '3:00 PM', purpose: 'Conference', price: '$950' },
//     { id: 6, employeeName: 'Clara White', fromTo: 'Japan to India', date: '2025-06-01', time: '8:00 AM', purpose: 'Training', price: '$1200' },
//     { id: 7, employeeName: 'David Lee', fromTo: 'Canada to Australia', date: '2025-07-10', time: '5:00 PM', purpose: 'Business', price: '$1400' },
//     { id: 8, employeeName: 'Eva Green', fromTo: 'France to Spain', date: '2025-08-05', time: '7:00 AM', purpose: 'Conference', price: '$1100' },
//     { id: 9, employeeName: 'Frank Black', fromTo: 'US to China', date: '2025-09-20', time: '9:00 AM', purpose: 'Business', price: '$1350' },
//     { id: 10, employeeName: 'Grace Adams', fromTo: 'Australia to Canada', date: '2025-10-12', time: '4:00 PM', purpose: 'Conference', price: '$950' }
//   ];

//   const [bookings, setBookings] = useState(initialBookings); // State to manage the bookings
//   const [abhayList, setAbhayList] = useState([]); // State to manage accepted/rejected bookings

//   // Handle accept/reject actions
//   const handleAction = (id, action) => {
//     const updatedBooking = bookings.find(booking => booking.id === id); // Get the selected booking
//     updatedBooking.status = action === 'accept' ? 'accepted' : 'rejected'; // Set the status

//     // Add the booking to the abhayList
//     setAbhayList((prevList) => [...prevList, updatedBooking]);

//     // Remove the booking from the original list
//     setBookings((prevBookings) =>
//       prevBookings.filter((booking) => booking.id !== id) // Remove the booking from the list
//     );
//   };

//   return (
//     <div className="p-6 bg-gray-100 shadow-sm rounded-md">
//       <h2 className="text-3xl font-semibold text-gray-800 mb-6">Booking Management</h2>
//       <p className="text-sm text-gray-600 mb-6">Manage all your bookings here.</p>

//       {/* Displaying all bookings */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {bookings.map((booking) => (
//           <div
//             key={booking.id}
//             className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
//           >
//             {/* Employee Name with Icon */}
//             <div className="flex items-center space-x-2">
//               <FaUser className="text-gray-500" />
//               <h3 className="text-lg font-semibold text-gray-900">{booking.employeeName}</h3>
//             </div>

//             {/* From-To with Icon */}
//             <div className="flex items-center mt-2 text-sm text-gray-600">
//               <FaPlane className="text-gray-400 mr-2" />
//               <p>{booking.fromTo}</p>
//             </div>

//             {/* Date with Icon */}
//             <div className="flex items-center mt-2 text-sm text-gray-600">
//               <FaCalendarAlt className="text-gray-400 mr-2" />
//               <p>{booking.date}</p>
//             </div>

//             {/* Time with Icon */}
//             <div className="flex items-center mt-2 text-sm text-gray-600">
//               <FaClock className="text-gray-400 mr-2" />
//               <p>{booking.time}</p>
//             </div>

//             {/* Purpose with Icon */}
//             <div className="flex items-center mt-2 text-sm text-gray-600">
//               <p className="mr-2">Purpose:</p>
//               <p>{booking.purpose}</p>
//             </div>

//             {/* Price with Icon */}
//             <div className="flex items-center mt-2 text-sm text-gray-600 font-medium">
//               <FaMoneyBillWave className="text-gray-400 mr-2" />
//               <p>{booking.price}</p>
//             </div>

//             {/* Action Buttons */}
//             <div className="mt-6 flex justify-between space-x-4">
//               <button
//                 className="py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors duration-200 flex items-center space-x-2"
//                 onClick={() => handleAction(booking.id, 'accept')}
//               >
//                 <FaCheck />
//                 <span>Accept</span>
//               </button>
//               <button
//                 className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 flex items-center space-x-2"
//                 onClick={() => handleAction(booking.id, 'reject')}
//               >
//                 <FaTimes />
//                 <span>Reject</span>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Display Abhay List */}
//     </div>
//   );
// }

// export default BookingManagement;


import React from 'react';
import { FaCheck, FaTimes, FaUser, FaPlane, FaCalendarAlt, FaClock, FaMoneyBillWave } from 'react-icons/fa';
import { useBookingContext } from '../BookingContext'; // Import the custom hook

function BookingManagement() {
  const { bookings, handleAction } = useBookingContext(); // Get bookings and action handler from context

  return (
    <div className="p-6 bg-gray-100 shadow-sm rounded-md">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Booking Management</h2>
      <p className="text-sm text-gray-600 mb-6">Manage all your bookings here.</p>

      {/* Displaying all bookings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
          >
            {/* Employee Name with Icon */}
            <div className="flex items-center space-x-2">
              <FaUser className="text-gray-500" />
              <h3 className="text-lg font-semibold text-gray-900">{booking.employeeName}</h3>
            </div>

            {/* From-To with Icon */}
            <div className="flex items-center mt-2 text-sm text-gray-600">
              <FaPlane className="text-gray-400 mr-2" />
              <p>{booking.fromTo}</p>
            </div>

            {/* Date with Icon */}
            <div className="flex items-center mt-2 text-sm text-gray-600">
              <FaCalendarAlt className="text-gray-400 mr-2" />
              <p>{booking.date}</p>
            </div>

            {/* Time with Icon */}
            <div className="flex items-center mt-2 text-sm text-gray-600">
              <FaClock className="text-gray-400 mr-2" />
              <p>{booking.time}</p>
            </div>

            {/* Purpose with Icon */}
            <div className="flex items-center mt-2 text-sm text-gray-600">
              <p className="mr-2">Purpose:</p>
              <p>{booking.purpose}</p>
            </div>

            {/* Price with Icon */}
            <div className="flex items-center mt-2 text-sm text-gray-600 font-medium">
              <FaMoneyBillWave className="text-gray-400 mr-2" />
              <p>{booking.price}</p>
            </div>

            {/* Action Buttons */}
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




// import React from 'react';
// import { FaCheck, FaTimes, FaUser, FaPlane, FaCalendarAlt, FaClock, FaMoneyBillWave } from 'react-icons/fa';
// import { useBookingContext } from '../BookingContext'; // Import the custom hook

// function BookingManagement() {
//   const { bookings, handleAction } = useBookingContext(); // Get bookings and action handler from context

//   return (
//     <div className="p-6 bg-gray-100 shadow-sm rounded-md">
//       <h2 className="text-3xl font-semibold text-gray-800 mb-6">Booking Management</h2>
//       <p className="text-sm text-gray-600 mb-6">Manage all your bookings here.</p>

//       {/* Displaying all bookings */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {bookings.map((booking) => (
//           <div
//             key={booking.id}
//             className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
//           >
//             {/* Employee Name with Icon */}
//             <div className="flex items-center space-x-2">
//               <FaUser className="text-gray-500" />
//               <h3 className="text-lg font-semibold text-gray-900">{booking.employeeName}</h3>
//             </div>

//             {/* From-To with Icon */}
//             <div className="flex items-center mt-2 text-sm text-gray-600">
//               <FaPlane className="text-gray-400 mr-2" />
//               <p>{booking.fromTo}</p>
//             </div>

//             {/* Date with Icon */}
//             <div className="flex items-center mt-2 text-sm text-gray-600">
//               <FaCalendarAlt className="text-gray-400 mr-2" />
//               <p>{booking.date}</p>
//             </div>

//             {/* Time with Icon */}
//             <div className="flex items-center mt-2 text-sm text-gray-600">
//               <FaClock className="text-gray-400 mr-2" />
//               <p>{booking.time}</p>
//             </div>

//             {/* Purpose with Icon */}
//             <div className="flex items-center mt-2 text-sm text-gray-600">
//               <p className="mr-2">Purpose:</p>
//               <p>{booking.purpose}</p>
//             </div>

//             {/* Price with Icon */}
//             <div className="flex items-center mt-2 text-sm text-gray-600 font-medium">
//               <FaMoneyBillWave className="text-gray-400 mr-2" />
//               <p>{booking.price}</p>
//             </div>

//             {/* Action Buttons */}
//             <div className="mt-6 flex justify-between space-x-4">
//               <button
//                 className="py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors duration-200 flex items-center space-x-2"
//                 onClick={() => handleAction(booking.id, 'accept')}
//               >
//                 <FaCheck />
//                 <span>Accept</span>
//               </button>
//               <button
//                 className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 flex items-center space-x-2"
//                 onClick={() => handleAction(booking.id, 'reject')}
//               >
//                 <FaTimes />
//                 <span>Reject</span>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default BookingManagement;
