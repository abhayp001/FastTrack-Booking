import React, { createContext, useState, useContext } from 'react';

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (booking) => {
    const newExpense = {
      date: booking.date,
      type: 'Flight', 
      amount: parseFloat(booking.price.replace('$', '')), 
      status: 'accepted',
      reason: ''
    };

    setExpenses(prevExpenses => [...prevExpenses, newExpense]);
  };
  

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenseContext = () => {
  return useContext(ExpenseContext);
};


