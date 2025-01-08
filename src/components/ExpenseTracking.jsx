import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaHotel, FaPlane } from 'react-icons/fa';
import { useExpenseContext } from '../ExpenseContext';

function ExpenseTracking() {
  const { expenses } = useExpenseContext();
  const [acceptedExpenses, setAcceptedExpenses] = useState([]);
  const [rejectedExpenses, setRejectedExpenses] = useState([]);

  useEffect(() => {
    const accepted = expenses.filter(expense => expense.status === 'accepted');
    const rejected = expenses.filter(expense => expense.status === 'rejected');
    setAcceptedExpenses(accepted);
    setRejectedExpenses(rejected);
  }, [expenses]);

  const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="p-6 bg-gray-100 rounded-md">
      <h2 className="text-3xl font-semibold text-gray-800">Expense Tracking</h2>
      <p className="text-sm text-gray-600 mb-6">Track and manage your expenses here.</p>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Accepted Expenses</h3>
      <table className="min-w-full table-auto bg-white rounded-lg shadow-md mb-6">
        <thead>
          <tr>
            <th className="py-3 px-6 text-left text-gray-600">Date</th>
            <th className="py-3 px-6 text-left text-gray-600">Expense Type</th>
            <th className="py-3 px-6 text-left text-gray-600">Amount</th>
            <th className="py-3 px-6 text-left text-gray-600">Status</th>
            <th className="py-3 px-6 text-left text-gray-600">Reason</th>
          </tr>
        </thead>
        <tbody>
          {acceptedExpenses.map((expense, index) => (
            <tr key={index} className="border-b">
              <td className="py-4 px-6 text-gray-800">{expense.date}</td>
              <td className="py-4 px-6 text-gray-800">
                {expense.type === 'Hotel' ? (
                  <FaHotel className="inline text-blue-500" />
                ) : (
                  <FaPlane className="inline text-green-500" />
                )}
                {expense.type}
              </td>
              <td className="py-4 px-6 text-gray-800">${expense.amount}</td>
              <td className="py-4 px-6 text-gray-800">
                <span className="text-green-600">
                  <FaCheckCircle className="inline mr-2" />
                  Accepted
                </span>
              </td>
              <td className="py-4 px-6 text-gray-800">-</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Rejected Expenses</h3>
      <table className="min-w-full table-auto bg-white rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="py-3 px-6 text-left text-gray-600">Date</th>
            <th className="py-3 px-6 text-left text-gray-600">Expense Type</th>
            <th className="py-3 px-6 text-left text-gray-600">Amount</th>
            <th className="py-3 px-6 text-left text-gray-600">Status</th>
            <th className="py-3 px-6 text-left text-gray-600">Reason</th>
          </tr>
        </thead>
        <tbody>
          {rejectedExpenses.map((expense, index) => (
            <tr key={index} className="border-b">
              <td className="py-4 px-6 text-gray-800">{expense.date}</td>
              <td className="py-4 px-6 text-gray-800">
                {expense.type === 'Hotel' ? (
                  <FaHotel className="inline text-blue-500" />
                ) : (
                  <FaPlane className="inline text-green-500" />
                )}
                {expense.type}
              </td>
              <td className="py-4 px-6 text-gray-800">${expense.amount}</td>
              <td className="py-4 px-6 text-gray-800">
                <span className="text-red-600">
                  <FaTimesCircle className="inline mr-2" />
                  Rejected
                </span>
              </td>
              <td className="py-4 px-6 text-gray-800">{expense.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">Total Expense: ${totalExpense}</h3>
      </div>
    </div>
  );
}

export default ExpenseTracking;
