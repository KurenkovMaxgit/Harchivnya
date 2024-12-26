import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  filteredItems: [],
  status: "idle",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
      // console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllItems.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getAllItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload; // Clear cart on successful order placement
      })
      .addCase(getAllItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; // Save the error
      })
      .addCase(getItemsByType.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getItemsByType.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.filteredItems = action.payload; // Clear cart on successful order placement
      })
      .addCase(getItemsByType.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload; // Save the error
      });
  },
});

export const getAllItems = createAsyncThunk(
  "product/getAll",
  async (_, { getState, dispatch }) => {
    try {
      // const { product: state } = getState();

      const response = await axios
        .get("https://localhost:7048/api/Item", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })

        .catch((error) => {
          console.error("Error fetching data", error);
        });
      console.log(response);

      return response.data; 
    } catch (error) {
      console.error("Failed to fetch items", error);
    }
  }
);

export const getItemsByType = createAsyncThunk(
  "product/getByType",
  async (type, { getState, dispatch }) => {
    try {
      // const { product: state } = getState();

      const response = await axios
        .get(`https://localhost:7048/api/Item/${type}`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })

        .catch((error) => {
          console.error("Error fetching data", error);
        });
      console.log(response);

      return response.data; 
    } catch (error) {
      console.error("Failed to fetch items", error);
    }
  }
);

export const selectItems = (state) => state.product.items;
export const selectFilteredItems = (state) => state.product.filteredItems;
export const selectStatus = (state) => state.product.status;
export const selectById = createSelector(
  [selectItems, (_, itemId) => itemId],
  (items, itemId) => items.find((el) => el.id === itemId)
);

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
