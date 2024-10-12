import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import productReducer from "./slices/productSlice";

export default configureStore({
  reducer: {
    app: appReducer,
    products: productReducer,
  },
});
