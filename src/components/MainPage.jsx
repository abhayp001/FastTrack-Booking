import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaTachometerAlt, FaClipboardList, FaChartLine, FaPaperPlane, FaSuitcaseRolling } from 'react-icons/fa'; // Added Suitcase Icon

function MainPage() {
  return (
    <div className="flex h-screen">
      <div className="w-64 h-full bg-gray-800 text-white fixed">
        <div className="p-6 flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <FaPaperPlane className="mr-2 text-3xl" />
            Fast Track Booking
          </h2>
          <nav className="mt-8 w-full">
            <ul>
              <li className="mb-4">
                <NavLink
                  to="/main/dashboard"
                  className={({ isActive }) =>
                    `block py-3 px-4 flex items-center ${isActive ? 'bg-gray-700' : ''} hover:bg-gray-700 rounded-md transition-all duration-300`
                  }
                >
                  <FaTachometerAlt className="mr-3 text-lg transition-all duration-300 transform hover:scale-110" />
                  Dashboard
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/main/book"
                  className={({ isActive }) =>
                    `block py-3 px-4 flex items-center ${isActive ? 'bg-gray-700' : ''} hover:bg-gray-700 rounded-md transition-all duration-300`
                  }
                >
                  <FaChartLine className="mr-3 text-lg transition-all duration-300 transform hover:scale-110" />
                  Book Travel
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/main/booking"
                  className={({ isActive }) =>
                    `block py-3 px-4 flex items-center ${isActive ? 'bg-gray-700' : ''} hover:bg-gray-700 rounded-md transition-all duration-300`
                  }
                >
                  <FaClipboardList className="mr-3 text-lg transition-all duration-300 transform hover:scale-110" />
                  Booking Management
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to="/main/expenses"
                  className={({ isActive }) =>
                    `block py-3 px-4 flex items-center ${isActive ? 'bg-gray-700' : ''} hover:bg-gray-700 rounded-md transition-all duration-300`
                  }
                >
                  <FaChartLine className="mr-3 text-lg transition-all duration-300 transform hover:scale-110" />
                  Expense Tracking
                </NavLink>
              </li>
             
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex-1 ml-64 p-8 bg-gray-100 overflow-y-auto min-w-0"> 
        <Outlet />
      </div>
    </div>
  );
}

export default MainPage;
