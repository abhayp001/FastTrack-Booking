// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import LoginRegisterForm from './components/LoginRegisterForm';
// // import MainPage from './components/MainPage';
// // import Dashboard from './components/Dashboard';
// // import BookingManagement from './components/BookingManagement';
// // import ExpenseTracking from './components/ExpenseTracking';
// // import BookTravel from './components/BookTravel';



// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         {/* Login/Register Page */}
// //         <Route path="/" element={<LoginRegisterForm />} />
        
// //         {/* Main Page with Nested Routes */}
// //         <Route path="/main" element={<MainPage />}>
// //           <Route path="dashboard" element={<Dashboard />} />
// //           <Route path="booking" element={<BookingManagement />} />
// //           <Route path="expenses" element={<ExpenseTracking />} />
// //           <Route path="book-travel" element={<BookTravel />} />
// //         </Route>
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;

// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginRegisterForm from './components/LoginRegisterForm';
// import MainPage from './components/MainPage';
// import Dashboard from './components/Dashboard';
// import BookingManagement from './components/BookingManagement';
// import ExpenseTracking from './components/ExpenseTracking';
// import BookTravel from './components/BookTravel';

// // Import the context provider
// import { BookingProvider } from './BookingContext';

// function App() {
//   return (
//     <BookingProvider>
//       <Router>
//         <Routes>
//           {/* Login/Register Page */}
//           <Route path="/" element={<LoginRegisterForm />} />
          
//           {/* Main Page with Nested Routes */}
//           <Route path="/main" element={<MainPage />}>
//             <Route path="dashboard" element={<Dashboard />} />
//             <Route path="booking" element={<BookingManagement />} />
//             <Route path="expenses" element={<ExpenseTracking />} />
//             <Route path="book-travel" element={<BookTravel />} />
//           </Route>
//         </Routes>
//       </Router>
//     </BookingProvider>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginRegisterForm from './components/LoginRegisterForm';
import MainPage from './components/MainPage';
import Dashboard from './components/Dashboard';
import BookingManagement from './components/BookingManagement';
import ExpenseTracking from './components/ExpenseTracking';
import { BookingProvider } from './BookingContext'; // Import the BookingProvider
import { ExpenseProvider } from './ExpenseContext';


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
          </Route>
        </Routes>
      </Router>
    </BookingProvider>
    </ExpenseProvider>
  );
}

export default App;
