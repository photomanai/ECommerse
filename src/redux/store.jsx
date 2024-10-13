import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import productReducer from "./slices/productSlice";
import basketReducer from "./slices/basketSlice";

export default configureStore({
  reducer: {
    app: appReducer,
    product: productReducer,
    basket: basketReducer,
  },
});
