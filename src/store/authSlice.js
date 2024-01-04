import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false, //user is not authenticated
  userData: null,
};

const authSlice = createSlice({ //It takes params name,initialstate and reducers
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      //login is a aciton
      state.status = true; //Logged in
      state.userData = action.payload.userData;
    },
    logout: (state, action) => {
      //logout is a aciton
      state.status = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
