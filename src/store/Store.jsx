import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/CartSlice";
import productReducer from "../store/ProductsSlice";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default Store;
