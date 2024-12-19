import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  order: {
    adress: "",
    totalPrice: 0,
    orderItems: localStorage.getItem("orderItems")
      ? JSON.parse(localStorage.getItem("orderItems"))
      : [],
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemIsInCart = state.order.orderItems.find(
        (item) => item.itemId === action.payload.itemId
      );
      if (itemIsInCart) {
        console.error("trying to add duplicate item to the cart");
        return;
      }

      const obj = {
        itemId: action.payload.itemId,
        quantity: action.payload.quantity,
      };
      state.order.orderItems.push(obj);
    },

    removeItem: (state, action) => {
      // Filter all items except the one we need to delete
      const filteredItems = state.order.orderItems.filter(
        (item) => item.itemId !== action.payload.itemId
      );
      // Set filtered items to the state
      state.order.orderItems = filteredItems;
    },

    setAmount: (state, action) => {
      const itemInCart = state.order.orderItems.find(
        (item) => item.itemId === action.payload.itemId
      );
      if (!itemInCart) {
        console.error("trying to set amount of non-existent item in the cart");
        return;
      }

      itemInCart.quantity = action.payload.quantity;
    },

    setAddress: (state, action) => {
      state.order.adress = action.payload;
    },

    clearCart: (state) => {
      state.order.orderItems = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(placeOrderAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(placeOrderAsync.fulfilled, (state) => {
        state.status = "succeeded";
        state.order.orderItems = []; // Clear cart on successful order placement
      })
      .addCase(placeOrderAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; // Save the error
      });
  },
});

export const placeOrderAsync = createAsyncThunk(
  "cart/placeOrder",
  async (_, { rejectWithValue, getState, dispatch }) => {
    const { cart: state, auth: authState } = getState();
    const payload = {
      adress: state.order.adress,
      totalPrice: state.order.totalPrice,
      orderItems: state.order.orderItems,
    };
    const token = authState.token;

    const response = await axios
      .post("https://localhost:7048/api/Order", payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          console.error("Unauthorized! Please log in again.");
          //dispatch(logout());
        } else {
          console.error("Error:", error.message);
        }
      });
    return response.data;
  }
);

export const selectCartItems = (state) => state.cart.order.orderItems;

export const selectStatus = (state) => state.counter.status;

export const {
  addItem,
  storeItems,
  removeItem,
  setAmount,
  clearCart,
  setAddress,
} = cartSlice.actions;

export default cartSlice.reducer;

/**
 * Middleware to take care of the order items in the local storage after each action
 * @param {*} store
 * @returns
 */
export const localStorageCartMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  // console.log(action);

  // Check if the action is related to the cart
  if (!action.type.startsWith("cart/")) {
    return result;
  }

  // Get order items from the store state and write them in local storage
  const state = store.getState();
  const items = state.cart.order.orderItems;
  localStorage.setItem("orderItems", JSON.stringify(items));

  return result;
};
