import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/slices/productSlice";
import store from "../redux/store";

function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return <div>ProductList</div>;
}

export default ProductList;
