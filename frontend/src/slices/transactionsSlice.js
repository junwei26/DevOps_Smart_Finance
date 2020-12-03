import { createSlice } from "@reduxjs/toolkit";

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState: [],
  reducers: {
    addTransaction(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
