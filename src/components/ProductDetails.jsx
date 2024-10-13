import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getAllProducts,
  getSelectedProduct,
  setSelectedProduct,
} from "../redux/slices/productSlice";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { addToBasket, calcBasket } from "../redux/slices/basketSlice";

function ProductDetails() {
  const { id } = useParams();

  const { products, selectedProduct } = useSelector((store) => store.product);

  const { price, image, title, description } = selectedProduct;

  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  const addBasket = () => {
    if (count != 0) {
      const payload = {
        id,
        price,
        image,
        title,
        description,
        count,
      };
      dispatch(addToBasket(payload));
      dispatch(calcBasket());
    } else {
      alert("You Buying Nothing");
    }
  };

  useEffect(() => {
    dispatch(getSelectedProduct(id));
  }, []);

  return (
    <div className="productdetails-c">
      <img src={image} width={350} />
      <div className="productdetails-r-c">
        <h1>{title}</h1>
        <p>{description}</p>
        <h2>{price} $</h2>
        <div className="productdetails-add">
          <CiCircleMinus onClick={decrement} className="productdetails-icon" />
          <span>{count}</span>
          <CiCirclePlus onClick={increment} className="productdetails-icon" />
        </div>
        <button onClick={addBasket} className="button">
          Add Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
