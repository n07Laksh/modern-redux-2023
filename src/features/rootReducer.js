import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import productReducer from "./counter/productSlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  product: productReducer,
});

export default rootReducer;
