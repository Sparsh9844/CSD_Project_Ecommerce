import { useState } from "react";
import ProductDetails from "./ProductDetails";
import StarRatings from "./StarRating";

function ProductCard({ product, onSelect }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} width="100%" />
      <h3>{product.name}</h3>
      <p>₹ {product.price}</p>

      <button className="details-btn" onClick={() => onSelect(product)}>
        View Details
      </button>
    </div>
  );
}

export default ProductCard;
