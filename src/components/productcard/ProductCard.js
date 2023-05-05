import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, title, prices, onClick }) => {
  return (
    <div className="product-card shadow" onClick={onClick}>
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <div className="product-title">{title}</div>
        <div className="product-price">Rs {prices}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
