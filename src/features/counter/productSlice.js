import { createSlice } from "@reduxjs/toolkit";

// creating slice for products
export const productSlice = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    add: (state, action) => {
      const newState = [...state];
      // Make the necessary changes to the copied array
      newState.push(action.payload);
      return newState;
    },
    remove: (state, payload) => {
      state.pop();
    },
  },
});

export const { add, remove } = productSlice.actions;
export default productSlice.reducer;
