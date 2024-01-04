import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
const store = configureStore(
  //It takes reducer
  {
    reducer: {
        auth: authSlice,
    },
  }
);
export default store;
