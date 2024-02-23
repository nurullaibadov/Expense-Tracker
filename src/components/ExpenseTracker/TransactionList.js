import React from "react";
import { useSelector } from "react-redux";

const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  const balance = useSelector((state) => state.transactions.balance);

  return (
    <div className="transaction-list">
      <h3>Transaction List</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.name} - ${transaction.amount}
          </li>
        ))}
      </ul>
      <h3>Balance: ${balance}</h3>
    </div>
  );
};

export default TransactionList;
