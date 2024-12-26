import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setCredentials } from "./authSlice"; // Переконайтесь, що selectToken правильно імпортується
const initialState = {
  userDetails: {
    id: "",
    name: "",
    email: "",
    phone: "",
    adress: {
      street: "",
      entrance: "",
      floor: "",
      apartment: "",
    },
  },
  error: null,
  status: "idle",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDetails: (state, action) => {
      console.log(action.payload);
      state.userDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUserDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
        const addressDetails = (action.payload.adress ?? ", , , ").split(", ");
        const userDetails = {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          phone: action.payload.phoneNumber,
          adress: {
            street: addressDetails[0],
            entrance: addressDetails[1],
            floor: addressDetails[2],
            apartment: addressDetails[3],
          },
        };
        state.userDetails = userDetails;
      })
      .addCase(getUserDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      .addCase(setUserDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(setUserDetails.fulfilled, (state, action, dispatch) => {
        state.status = "succeeded";
        console.log(action.payload);
        
      })
      .addCase(setUserDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const getUserDetails = createAsyncThunk(
  "user/getDetails",
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      //const state = getState(); // Отримуємо весь стан Redux
      //const token = selectToken(state); // Отримуємо токен з Redux state
      const token = getState().auth.token;
      //const id = getState().user.userDetails.id
      console.log(token);
      const response = await axios.get(`https://localhost:7048/api/User`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Використовуємо токен
        },
        withCredentials: true,
      });
      
      return response.data;
      // Повертаємо тільки дані з відповіді
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

export const setUserDetails = createAsyncThunk(
  "user/setDetails",
  async (_, { rejectWithValue, getState, dispatch }) => {
    try {
      //const state = getState(); // Отримуємо весь стан Redux
      //const token = selectToken(state); // Отримуємо токен з Redux state
      const state = getState().user.userDetails;
      const payload = {
        id: state.id,
        name: state.name,
        email: state.email,
        phoneNumber: state.phone,
        adress:
        state.adress.street +
        ", " +
        state.adress.entrance +
        ", " +
        state.adress.floor +
        ", " +
        state.adress.apartment,
      };
      const token = getState().auth.token;
      console.log(token);
      const response = await axios.post(
        "https://localhost:7048/api/User/patch",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Використовуємо токен
          },
          withCredentials: true,
        }
      );
      console.log(response.data);
      dispatch(setCredentials(response.data))
      return response.data; // Повертаємо тільки дані з відповіді
    } catch (error) {
      //dispatch(setCredentials({ token: null }));
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
export const { setDetails } = userSlice.actions;

export const selectDetails = (state) => state.user.userDetails;

export default userSlice.reducer;
