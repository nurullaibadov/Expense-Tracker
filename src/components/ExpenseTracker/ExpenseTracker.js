import React from "react";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

const ExpenseTracker = () => {
  return (
    <div className="expense-tracker">
      <h2>Expense Tracker</h2>
      <TransactionForm />
      <TransactionList />
    </div>
  );
};

export default ExpenseTracker;
