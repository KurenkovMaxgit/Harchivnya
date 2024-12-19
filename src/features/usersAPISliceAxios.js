import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { selectToken, setCredentials } from "./authSlice"; // Переконайтесь, що selectToken правильно імпортується

export const getUserDetails = createAsyncThunk(
  "user/getDetails",
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      const state = getState(); // Отримуємо весь стан Redux
      const token = selectToken(state); // Отримуємо токен з Redux state

      const response = await axios.get("https://localhost:7048/api/User", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Використовуємо токен
        },
        withCredentials: true,
      });

      return response.data; // Повертаємо тільки дані з відповіді
    } catch (error) {
      dispatch(setCredentials({ token: null }));
      if (error.response && error.response.status === 401) {
        console.error("Unauthorized! Please log in again.");
        return rejectWithValue("Unauthorized");
      } else {
        console.error("Error:", error.message);
        return rejectWithValue(error.message);
      }
    }
  }
);

const userAPI = createSlice({
  name: "user",
  initialState: {
    userDetails: null,
    error: null,
    status: "idle",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userDetails = action.payload;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default userAPI.reducer;
