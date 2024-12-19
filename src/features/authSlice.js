import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      if (action.payload.token) {
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      } else {
        state.token = null;
        localStorage.removeItem("token");
      }
    },
    logout: (state, action) => {
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});

export const selectToken = (state) => state.auth.token;

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
