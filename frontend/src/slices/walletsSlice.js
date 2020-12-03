import { createSlice } from "@reduxjs/toolkit";

export const walletsSlice = createSlice({
  name: "wallets",
  initialState: [],
  reducers: {
    addWallet(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addWallet } = walletsSlice.actions;

export default walletsSlice.reducer;
