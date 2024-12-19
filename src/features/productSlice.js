import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      console.log(action.payload);
    },
    extraReducers: (builder) => {
        builder
          // Handle the action types defined by the `incrementAsync` thunk defined below.
          // This lets the slice reducer update the state with request status and results.
          // .addCase(placeOrderAsync.fulfilled, (state, action) => {
          //   console.log("placeOrderAsync.fulfilled", state);
          //   state.cartItems = [];
          // });
    
          .addCase(getAllItems.pending, (state) => {
            state.status = "loading";
            state.error = null;
          })
          .addCase(getAllItems.fulfilled, (state) => {
            state.status = "succeeded";
            state.items = []; // Clear cart on successful order placement
          })
          .addCase(getAllItems.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload; // Save the error
          });
      },
  },
});

export const getAllItems = createAsyncThunk(
  "product/getAll",
  async (_, { getState, dispatch }) => {
    console.log("hubabuba");
    try {
      // const { product: state } = getState();
      
      console.log("hubabuba");
      const response = await axios
        .get("https://localhost:7048/api/Item", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        
        // .catch((error) => {
        //   console.error("Error fetching data", error);
        // });
      console.log(response);

      dispatch(setItems(response.data)); //TODO: fix dispatch func to fetch products
      return response.data
      // console.log(product.items);
    } catch (error) {
      console.error("Failed to fetch items", error);
    }
  }
);

// export const placeOrderAsync = createAsyncThunk(
//   "cart/placeOrder",
//   async (_, { rejectWithValue, getState }) => {
//     try {
//       const { cart: state } = getState();
//       console.log(state);
//       const payload = {
//         adress: state.order.adress,
//         totalPrice: state.order.totalPrice,
//         orderItems: state.order.orderItems,
//       };
//       console.log(payload);
//       const response = await axios.post(
//         "https://localhost:7048/api/Order?id=9",
//         payload,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );
//       return response.data;
//     } catch (error) {
//       console.error("Failed to place order", error);
//       return rejectWithValue(error.response?.data || error.message);
//     }
//   }
// );

export const selectItems = (state) => state.items;
// export const selectStatus = (state) => state.counter.status;

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
