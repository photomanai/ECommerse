import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getAllProducts,
  getSelectedProduct,
  setSelectedProduct,
} from "../redux/slices/productSlice";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

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

  useEffect(() => {
    // dispatch(getAllProducts());
    dispatch(getSelectedProduct(id));
    // getProductById();
  }, []);

  // const getProductById = () => {
  //   products &&
  //     products.map((product) => {
  //       if (product.id == id) {
  //         dispatch(getSelectedProduct(id));
  //       }
  //     });
  // };

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
        <button className="button">Add Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
