import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import transactionsReducer from "../slices/transactionsSlice";
import userReducer from "../slices/userSlice";
import walletsReducer from "../slices/walletsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    transactions: transactionsReducer,
    wallets: walletsReducer,
  },
  middleware: [logger, ...getDefaultMiddleware()],
});
