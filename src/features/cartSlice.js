import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemIsInCart = state.cartItems.find(
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
      state.cartItems.push(obj);
    },

    removeItem: (state, action) => {
      const filteredItems = state.cartItems.filter(
        (item) => item.itemId !== action.payload.itemId
      );
      state.cartItems = filteredItems;
    },

    asyncRemoveItem: async (state, action) => {
      const filteredItems = state.cartItems.filter(
        (item) => item.itemId !== action.payload.itemId
      );
      state.cartItems = filteredItems;
    },

    setAmount: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.itemId === action.payload.itemId
      );
      if (!itemInCart) {
        console.error("trying to set amount of non-existent item in the cart");
        return;
      }

      itemInCart.quantity = action.payload.quantity;
    },
  },
});

export const selectCartItems = (state) => state.cart.cartItems
export const selectStatus = (state) => state.counter.status

export const {addItem, removeItem, setAmount} = cartSlice.actions;

export default cartSlice.reducer;
