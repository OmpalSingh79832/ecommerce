import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";

const store = configureStore({
  reducer: {
    products: productReducer, // Add your reducers here
  },
});

export default store;
