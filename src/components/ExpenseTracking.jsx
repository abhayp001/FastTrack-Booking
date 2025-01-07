// import React, { useState } from 'react';
// import { FaCheckCircle, FaTimesCircle, FaHotel, FaPlane } from 'react-icons/fa';

// function ExpenseTracking() {
//   const [view, setView] = useState('daily'); // Toggle state: daily or monthly

//   const expenses = [
//     {
//       date: '2025-01-01',
//       type: 'Hotel',
//       amount: 200,
//       status: 'accepted',
//       reason: '',
//     },
//     {
//       date: '2025-01-02',
//       type: 'Flight',
//       amount: 150,
//       status: 'rejected',
//       reason: 'Over budget',
//     },
//     {
//       date: '2025-01-03',
//       type: 'Both',
//       amount: 300,
//       status: 'accepted',
//       reason: '',
//     },
//     {
//       date: '2025-01-10',
//       type: 'Hotel',
//       amount: 180,
//       status: 'rejected',
//       reason: 'Unapproved booking',
//     },
//   ];

//   const handleViewToggle = (viewType) => {
//     setView(viewType);
//   };

//   // Calculate total expenses
//   const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);

//   return (
//     <div className="p-6 bg-gray-100 rounded-md">
//       <h2 className="text-3xl font-semibold text-gray-800">Expense Tracking</h2>
//       <p className="text-sm text-gray-600 mb-6">Track and manage your expenses here.</p>

//       {/* View Toggle (Daily/Monthly) */}
//       <div className="flex mb-6">
//         <button
//           className={`py-2 px-4 rounded-l-lg ${view === 'daily' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border`}
//           onClick={() => handleViewToggle('daily')}
//         >
//           Daily
//         </button>
//         <button
//           className={`py-2 px-4 rounded-r-lg ${view === 'monthly' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border`}
//           onClick={() => handleViewToggle('monthly')}
//         >
//           Monthly
//         </button>
//       </div>

//       {/* Table */}
//       <table className="min-w-full table-auto bg-white rounded-lg shadow-md">
//         <thead>
//           <tr>
//             <th className="py-3 px-6 text-left text-gray-600">Date</th>
//             <th className="py-3 px-6 text-left text-gray-600">Expense Type</th>
//             <th className="py-3 px-6 text-left text-gray-600">Amount</th>
//             <th className="py-3 px-6 text-left text-gray-600">Status</th>
//             <th className="py-3 px-6 text-left text-gray-600">Reason</th>
//           </tr>
//         </thead>
//         <tbody>
//           {expenses.map((expense, index) => (
//             <tr key={index} className="border-b">
//               <td className="py-4 px-6 text-gray-800">{expense.date}</td>
//               <td className="py-4 px-6 text-gray-800">
//                 {expense.type === 'Hotel' ? (
//                   <FaHotel className="inline text-blue-500" />
//                 ) : expense.type === 'Flight' ? (
//                   <FaPlane className="inline text-green-500" />
//                 ) : (
//                   <>
//                     <FaHotel className="inline text-blue-500" />
//                     <FaPlane className="inline text-green-500 ml-2" />
//                   </>
//                 )}
//                 {expense.type}
//               </td>
//               <td className="py-4 px-6 text-gray-800">${expense.amount}</td>
//               <td className="py-4 px-6 text-gray-800">
//                 {expense.status === 'accepted' ? (
//                   <span className="text-green-600">
//                     <FaCheckCircle className="inline mr-2" />
//                     Accepted
//                   </span>
//                 ) : (
//                   <span className="text-red-600">
//                     <FaTimesCircle className="inline mr-2" />
//                     Rejected
//                   </span>
//                 )}
//               </td>
//               <td className="py-4 px-6 text-gray-800">
//                 {expense.status === 'rejected' ? expense.reason : '-'}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Total Expenses */}
//       <div className="mt-6">
//         <h3 className="text-xl font-semibold text-gray-800">Total Expense: ${totalExpense}</h3>
//       </div>
//     </div>
//   );
// }

// export default ExpenseTracking;









// import React, { useEffect, useState } from 'react';
// import { FaCheckCircle, FaTimesCircle, FaHotel, FaPlane } from 'react-icons/fa';
// import { useExpenseContext } from '../ExpenseContext'; // Import the custom hook to access context

// function ExpenseTracking() {
//   const { expenses } = useExpenseContext(); // Get expenses from context
//   const [acceptedExpenses, setAcceptedExpenses] = useState([]);
//   const [rejectedExpenses, setRejectedExpenses] = useState([]);

//   // Use Effect to separate accepted and rejected expenses
//   useEffect(() => {
//     const accepted = expenses.filter(expense => expense.status === 'accepted');
//     const rejected = expenses.filter(expense => expense.status === 'rejected');
//     setAcceptedExpenses(accepted);
//     setRejectedExpenses(rejected);
//   }, [expenses]); // Re-run when expenses change

//   const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);

//   return (
//     <div className="p-6 bg-gray-100 rounded-md">
//       <h2 className="text-3xl font-semibold text-gray-800">Expense Tracking</h2>
//       <p className="text-sm text-gray-600 mb-6">Track and manage your expenses here.</p>

//       {/* Accepted Expenses */}
//       <h3 className="text-2xl font-semibold text-gray-800 mb-4">Accepted Expenses</h3>
//       <table className="min-w-full table-auto bg-white rounded-lg shadow-md mb-6">
//         <thead>
//           <tr>
//             <th className="py-3 px-6 text-left text-gray-600">Date</th>
//             <th className="py-3 px-6 text-left text-gray-600">Expense Type</th>
//             <th className="py-3 px-6 text-left text-gray-600">Amount</th>
//             <th className="py-3 px-6 text-left text-gray-600">Status</th>
//             <th className="py-3 px-6 text-left text-gray-600">Reason</th>
//           </tr>
//         </thead>
//         <tbody>
//           {acceptedExpenses.map((expense, index) => (
//             <tr key={index} className="border-b">
//               <td className="py-4 px-6 text-gray-800">{expense.date}</td>
//               <td className="py-4 px-6 text-gray-800">
//                 {expense.type === 'Hotel' ? (
//                   <FaHotel className="inline text-blue-500" />
//                 ) : (
//                   <FaPlane className="inline text-green-500" />
//                 )}
//                 {expense.type}
//               </td>
//               <td className="py-4 px-6 text-gray-800">${expense.amount}</td>
//               <td className="py-4 px-6 text-gray-800">
//                 <span className="text-green-600">
//                   <FaCheckCircle className="inline mr-2" />
//                   Accepted
//                 </span>
//               </td>
//               <td className="py-4 px-6 text-gray-800">-</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Rejected Expenses */}
//       <h3 className="text-2xl font-semibold text-gray-800 mb-4">Rejected Expenses</h3>
//       <table className="min-w-full table-auto bg-white rounded-lg shadow-md">
//         <thead>
//           <tr>
//             <th className="py-3 px-6 text-left text-gray-600">Date</th>
//             <th className="py-3 px-6 text-left text-gray-600">Expense Type</th>
//             <th className="py-3 px-6 text-left text-gray-600">Amount</th>
//             <th className="py-3 px-6 text-left text-gray-600">Status</th>
//             <th className="py-3 px-6 text-left text-gray-600">Reason</th>
//           </tr>
//         </thead>
//         <tbody>
//           {rejectedExpenses.map((expense, index) => (
//             <tr key={index} className="border-b">
//               <td className="py-4 px-6 text-gray-800">{expense.date}</td>
//               <td className="py-4 px-6 text-gray-800">
//                 {expense.type === 'Hotel' ? (
//                   <FaHotel className="inline text-blue-500" />
//                 ) : (
//                   <FaPlane className="inline text-green-500" />
//                 )}
//                 {expense.type}
//               </td>
//               <td className="py-4 px-6 text-gray-800">${expense.amount}</td>
//               <td className="py-4 px-6 text-gray-800">
//                 <span className="text-red-600">
//                   <FaTimesCircle className="inline mr-2" />
//                   Rejected
//                 </span>
//               </td>
//               <td className="py-4 px-6 text-gray-800">{expense.reason}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Total Expense */}
//       <div className="mt-6">
//         <h3 className="text-xl font-semibold text-gray-800">Total Expense: ${totalExpense}</h3>
//       </div>
//     </div>
//   );
// }

// export default ExpenseTracking;









import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaHotel, FaPlane } from 'react-icons/fa';
import { useExpenseContext } from '../ExpenseContext'; // Import the custom hook for context

function ExpenseTracking() {
  const { expenses } = useExpenseContext(); // Get expenses from context
  const [acceptedExpenses, setAcceptedExpenses] = useState([]);
  const [rejectedExpenses, setRejectedExpenses] = useState([]);

  useEffect(() => {
    // Separate accepted and rejected expenses
    const accepted = expenses.filter(expense => expense.status === 'accepted');
    const rejected = expenses.filter(expense => expense.status === 'rejected');
    setAcceptedExpenses(accepted);
    setRejectedExpenses(rejected);
  }, [expenses]); // Run this when expenses change

  // Calculate the total expenses
  const totalExpense = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="p-6 bg-gray-100 rounded-md">
      <h2 className="text-3xl font-semibold text-gray-800">Expense Tracking</h2>
      <p className="text-sm text-gray-600 mb-6">Track and manage your expenses here.</p>

      {/* Accepted Expenses */}
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

      {/* Rejected Expenses */}
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

      {/* Total Expense */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-800">Total Expense: ${totalExpense}</h3>
      </div>
    </div>
  );
}

export default ExpenseTracking;
