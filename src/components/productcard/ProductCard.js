import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, title, prices, onClick }) => {
  return (
    <div className="product-card shadow" onClick={onClick}>
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <span className="product-title">{title}</span>
        <div className="product-prices">
          <span className="product-price">{prices}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
