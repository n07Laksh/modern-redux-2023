import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "../features/rootReducer";

// configuring combine reducer
export default configureStore({
  reducer: rootReducer,
});
