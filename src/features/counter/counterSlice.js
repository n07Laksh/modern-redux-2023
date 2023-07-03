import { createSlice } from "@reduxjs/toolkit";

// creating slice for counter
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    localVal: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setLocalVal: (state, action) => {
      state.localVal = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, setLocalVal } =
  counterSlice.actions;

export default counterSlice.reducer;
