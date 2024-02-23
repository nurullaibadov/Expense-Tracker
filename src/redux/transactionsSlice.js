import { createSlice } from "@reduxjs/toolkit";

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState: {
    transactions: [],
    balance: 0,
  },
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
      state.balance += action.payload.amount;
    },
  },
});

export const { addTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
