import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getBasketFromStroge = () => {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  }
  return [];
};

const initialState = {
  products: getBasketFromStroge(),
  drawer: false,
  amount: 0,
};

const writeFromBasketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct =
        state.products &&
        state.products.find((product) => product.id == action.payload.id);
      if (findProduct) {
        const extractedProducts = state.products.filter(
          (product) => product.id != action.payload.id
        );
        findProduct.count += action.payload.count;
        state.products = [...extractedProducts, findProduct];
        writeFromBasketToStorage(state.products);
      } else {
        state.products = [...state.products, action.payload];
        writeFromBasketToStorage(state.products);
      }
    },
    setDrawer: (state) => {
      state.drawer = !state.drawer;
    },
    calcBasket: (state) => {
      state.amount = 0;
      state.products &&
        state.products.map((product) => {
          state.amount += product.price * product.count;
        });
    },
    deleteBasketProduct: (state, action) => {
      const findProduct =
        state.products &&
        state.products.find((product) => product.id == action.payload.id);
      findProduct.count -= 1;
      if (findProduct.count == 0) {
        const extractedProducts = state.products.filter(
          (product) => product.id != action.payload.id
        );
        state.products = [...extractedProducts];
      } else {
      }
      writeFromBasketToStorage(state.products);
    },
  },
});

export const { addToBasket, setDrawer, calcBasket, deleteBasketProduct } =
  basketSlice.actions;

export default basketSlice.reducer;
