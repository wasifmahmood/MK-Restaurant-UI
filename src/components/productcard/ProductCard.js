import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, title, prices, onClick }) => {
  return (
    <div className="product-card shadow" onClick={onClick}>
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <div className="product-title" style={{ height: 50 }}>
          <span >{title}</span>
        </div>
        <div className="product-prices">
          <span className="product-price">{prices}</span>
          {/* {prices.discountPrice && (
                        <span className="product-discount-price">{prices.discountPrice}</span>
                    )} */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
