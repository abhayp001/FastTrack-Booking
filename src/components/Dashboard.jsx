import React from 'react';
import { FaClipboardList, FaTimesCircle, FaMoneyBillWave, FaBookmark, FaClock } from 'react-icons/fa';

function Dashboard() {
  const username = 'Buddy';

  const stats = {
    totalRequests: 10,
    rejectedRequests: 2,
    totalExpenses: 8050,
    totalBookings: 10,
    pendingRequests: 5
  };

  return (
    <div className="p-6 bg-gray-100 rounded-md">
      {/* Greeting */}
      <div className="mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">Hello, {username}!</h2>
        <p className="text-sm text-gray-600">Welcome back to your dashboard.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Total Requests</h3>
            <p className="text-2xl">{stats.totalRequests}</p>
          </div>
          <FaClipboardList className="text-blue-600 text-4xl" />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Rejected Requests</h3>
            <p className="text-2xl">{stats.rejectedRequests}</p>
          </div>
          <FaTimesCircle className="text-red-600 text-4xl" />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Total Expenses</h3>
            <p className="text-2xl">${stats.totalExpenses}</p>
          </div>
          <FaMoneyBillWave className="text-green-600 text-4xl" />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Total Bookings</h3>
            <p className="text-2xl">{stats.totalBookings}</p>
          </div>
          <FaBookmark className="text-indigo-600 text-4xl" />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Pending Requests</h3>
            <p className="text-2xl">{stats.pendingRequests}</p>
          </div>
          <FaClock className="text-yellow-600 text-4xl" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
