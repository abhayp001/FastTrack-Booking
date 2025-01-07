// import React, { createContext, useState, useContext } from 'react';

// // Create the context
// const BookingContext = createContext();

// // Create a provider component
// export const BookingProvider = ({ children }) => {
//   // Initial total bookings data
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

//   // State to store the total bookings and the accepted/rejected bookings
//   const [bookings, setBookings] = useState(initialBookings);  // Total bookings
//   const [acceptedBookings, setAcceptedBookings] = useState([]); // Accepted bookings
//   const [rejectedBookings, setRejectedBookings] = useState([]); // Rejected bookings

//   // Handle accept/reject actions
//   const handleAction = (id, action) => {
//     const updatedBooking = bookings.find(booking => booking.id === id); // Get the selected booking

//     // Remove the booking from the original bookings list
//     setBookings(prevBookings => prevBookings.filter(booking => booking.id !== id));

//     if (action === 'accept') {
//       // Add the booking to the accepted bookings list
//       setAcceptedBookings(prevAccepted => [...prevAccepted, updatedBooking]);
//     } else {
//       // Add the booking to the rejected bookings list
//       setRejectedBookings(prevRejected => [...prevRejected, updatedBooking]);
//     }
//   };

//   return (
//     <BookingContext.Provider value={{ bookings, acceptedBookings, rejectedBookings, handleAction }}>
//       {children}
//     </BookingContext.Provider>
//   );
// };

// // Custom hook to use the BookingContext
// export const useBookingContext = () => {
//   return useContext(BookingContext);
// };

import React, { createContext, useState, useContext } from 'react';

// Create the context
const ExpenseContext = createContext();

// Create a provider component
export const ExpenseProvider = ({ children }) => {
  // State to store expenses
  const [expenses, setExpenses] = useState([]);

  // Add an expense
  const addExpense = (booking) => {
    const newExpense = {
      date: booking.date,
      type: 'Flight',  // You can modify this based on the booking purpose
      amount: parseFloat(booking.price.replace('$', '')), // Extracting the price from the string
      status: 'accepted',
      reason: ''  // Reason can be empty unless the booking is rejected
    };

    setExpenses(prevExpenses => [...prevExpenses, newExpense]);
  };
  

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

// Custom hook to use the ExpenseContext
export const useExpenseContext = () => {
  return useContext(ExpenseContext);
};


