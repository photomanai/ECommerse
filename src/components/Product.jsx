import React from "react";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, price, image, title, description } = product;

  const navigate = useNavigate();
  return (
    <div className="product-c">
      <img src={image} width={200} />
      <p>{title}</p>
      <h2>{price} $</h2>
      <button
        onClick={() => {
          navigate("/product-details/" + id);
        }}
        className="button"
      >
        More
      </button>
    </div>
  );
}

export default Product;
