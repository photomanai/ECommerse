import React from "react";
import { useDispatch } from "react-redux";
import { calcBasket, deleteBasketProduct } from "../redux/slices/basketSlice";

function BasketProduct({ product }) {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(deleteBasketProduct(product));
    dispatch(calcBasket());
  };

  return (
    <div className="basketproduct-c">
      <img src={product.image} width={100} />
      <div className="basketproduct-t-c">
        <p>{product.title}</p>
        <p>
          <span>{product.price}$ x </span>
          <span>{product.count}</span>
        </p>
      </div>
      <button onClick={deleteProduct} className="button">
        Delete
      </button>
    </div>
  );
}

export default BasketProduct;
