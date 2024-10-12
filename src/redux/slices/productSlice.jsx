import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

const initialState = {
  products: [],
  selectedProduct: {},
  loading: false,
};

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
});

export const getSelectedProduct = createAsyncThunk(
  "getSelectedProduct",
  async (id) => {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // setSelectedProduct: (state, action) => {
    //   state.selectedProduct = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getSelectedProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSelectedProduct.fulfilled, (state, action) => {
      state.loading = false;
      console.log(action);
      state.selectedProduct = action.payload;
    });
  },
});

export const { setSelectedProduct } = productSlice.actions;

export default productSlice.reducer;
