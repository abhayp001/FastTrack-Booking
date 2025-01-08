import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginRegisterForm from './components/LoginRegisterForm';
import MainPage from './components/MainPage';
import Dashboard from './components/Dashboard';
import BookingManagement from './components/BookingManagement';
import ExpenseTracking from './components/ExpenseTracking';
import { BookingProvider } from './BookingContext'; // Import the BookingProvider
import { ExpenseProvider } from './ExpenseContext';
import BookTravel from './components/BookTravel';


function App() {
  return (
    <ExpenseProvider>
    <BookingProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginRegisterForm />} />
          <Route path="/main" element={<MainPage />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="booking" element={<BookingManagement />} />
            <Route path="expenses" element={<ExpenseTracking />} />
            <Route path="book" element={<BookTravel />} />
          </Route>
        </Routes>
      </Router>
    </BookingProvider>
    </ExpenseProvider>
  );
}

export default App;
