import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/slices/CartSlice";
import categoryReducer from "./redux/slices/CategorySlice";
import searchReducer from "./redux/slices/SearchSlice"; // Import search slice

const store = configureStore({
  reducer: {
    cart: cartReducer,
    category: categoryReducer,
    search: searchReducer, // Add it here
  },
});

export default store;
