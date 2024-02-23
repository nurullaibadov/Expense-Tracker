import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTransaction } from "./redux/transactionsSlice";

const App = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.transactions.transactions);
  const balance = useSelector((state) => state.transactions.balance);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTransaction({ name, amount: parseFloat(amount) }));
    setName("");
    setAmount("");
  };

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <div className="balance">
        <h2>Your Balance</h2>
        <h3>${balance.toFixed(2)}</h3>
      </div>
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter transaction name..."
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
            required
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={transaction.amount < 0 ? "minus" : "plus"}
          >
            {transaction.name}{" "}
            <span>
              {transaction.amount < 0 ? "-" : "+"}$
              {Math.abs(transaction.amount).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
