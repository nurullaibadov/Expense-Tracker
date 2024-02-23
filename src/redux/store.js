import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "./transactionsSlice";

export default configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});
