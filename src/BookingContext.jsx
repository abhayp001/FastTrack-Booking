import React, { createContext, useState, useContext } from 'react';
import { useExpenseContext } from './ExpenseContext';  

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const initialBookings = [
    { id: 1, employeeName: 'John Doe', fromTo: 'India to US', date: '2025-01-10', time: '10:00 AM', purpose: 'Business', price: '$1200' },
    { id: 2, employeeName: 'Jane Smith', fromTo: 'UK to Canada', date: '2025-02-15', time: '2:00 PM', purpose: 'Conference', price: '$800' },
    { id: 3, employeeName: 'Samuel Green', fromTo: 'Germany to Japan', date: '2025-03-01', time: '9:00 AM', purpose: 'Training', price: '$1000' },
    { id: 4, employeeName: 'Alice Johnson', fromTo: 'US to France', date: '2025-04-10', time: '11:00 AM', purpose: 'Business', price: '$1500' },
    { id: 5, employeeName: 'Bob Brown', fromTo: 'Germany to UK', date: '2025-05-15', time: '3:00 PM', purpose: 'Conference', price: '$950' },
    { id: 6, employeeName: 'Clara White', fromTo: 'Japan to India', date: '2025-06-01', time: '8:00 AM', purpose: 'Training', price: '$1200' },
    { id: 7, employeeName: 'David Lee', fromTo: 'Canada to Australia', date: '2025-07-10', time: '5:00 PM', purpose: 'Business', price: '$1400' },
    { id: 8, employeeName: 'Eva Green', fromTo: 'France to Spain', date: '2025-08-05', time: '7:00 AM', purpose: 'Conference', price: '$1100' },
    { id: 9, employeeName: 'Frank Black', fromTo: 'US to China', date: '2025-09-20', time: '9:00 AM', purpose: 'Business', price: '$1350' },
    { id: 10, employeeName: 'Grace Adams', fromTo: 'Australia to Canada', date: '2025-10-12', time: '4:00 PM', purpose: 'Conference', price: '$950' }
  ];

  const [bookings, setBookings] = useState(initialBookings);
  const [acceptedBookings, setAcceptedBookings] = useState([]);
  const [rejectedBookings, setRejectedBookings] = useState([]); 

  const { addExpense } = useExpenseContext();

  const handleAction = (id, action) => {
    const updatedBooking = bookings.find(booking => booking.id === id); 

    setBookings(prevBookings => prevBookings.filter(booking => booking.id !== id));

    if (action === 'accept') {
      setAcceptedBookings(prevAccepted => [...prevAccepted, updatedBooking]);

      addExpense(updatedBooking);
    } else {
      setRejectedBookings(prevRejected => [...prevRejected, updatedBooking]);
    }
  };

  return (
    <BookingContext.Provider value={{ bookings, acceptedBookings, rejectedBookings, handleAction }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBookingContext = () => {
  return useContext(BookingContext);
};

