import React, { useState } from 'react';
import BookingManagement from './BookingManagement';

function App() {
  // State for bookings
  const [bookings, setBookings] = useState([
    {
      id: 1,
      employeeName: 'John Doe',
      fromTo: 'India to US',
      date: '2025-01-10',
      time: '10:00 AM',
      purpose: 'Business',
      price: '$1200',
      status: 'pending', // Add status for each booking
    },
    {
      id: 2,
      employeeName: 'Jane Smith',
      fromTo: 'UK to Canada',
      date: '2025-02-15',
      time: '2:00 PM',
      purpose: 'Conference',
      price: '$800',
      status: 'pending',
    },
    {
      id: 3,
      employeeName: 'Samuel Green',
      fromTo: 'Germany to Japan',
      date: '2025-03-01',
      time: '9:00 AM',
      purpose: 'Training',
      price: '$1000',
      status: 'pending',
    },
  ]);

  // Function to handle the booking action (accept/reject)
  const handleBookingAction = (booking, action) => {
    if (action === 'accept') {
      setBookings((prevBookings) =>
        prevBookings.map((b) =>
          b.id === booking.id ? { ...b, status: 'accepted' } : b
        )
      );
    } else if (action === 'reject') {
      setBookings((prevBookings) =>
        prevBookings.filter((b) => b.id !== booking.id)
      );
    }
  };

  return (
    <div>
      <BookingManagement bookings={bookings} onAction={handleBookingAction} />
    </div>
  );
}

export default App;
