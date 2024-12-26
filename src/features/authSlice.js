import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Bounce, toast } from "react-toastify";

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
      toast.info('Ви вийшли з аккаунту', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(changePassword.fulfilled, (state, action) => {
        state.status = "succeeded";
       state.token = action.payload.token; 
      })
  },
});

export const changePassword = createAsyncThunk(
  "user/changePassword",
  async (payload, { getState, dispatch }) => {
    const token = getState().auth.token;
    try {
      // const { product: state } = getState();

      console.log(token);
      const response = await axios.post(
        "https://localhost:7048/api/Auth/ChangePassword",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      console.error("Failed to fetch items", error);
      return { token };
    }
  }
);

export const selectToken = (state) => state.auth.token;

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
