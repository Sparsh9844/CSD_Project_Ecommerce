import StarRating from "./StarRating";

function ProductDetails({ product, onBack }) {
  return (
    <div className="detail">
      {/* Back Button */}{" "}
      <button className="back-btn" onClick={onBack}>
        ⬅ Back{" "}
      </button>
      <div className="detail-card">
        {/* Image */}
        <img src={product.image} alt={product.name} className="detail-img" />

        {/* Info */}
        <div className="detail-info">
          <h2>{product.name}</h2>

          <h3 className="price">₹{product.price}</h3>

          <StarRating rating={product.rating} />

          <p className="desc">{product.desc}</p>

          <p>
            <b>Warranty:</b> {product.warranty} years
          </p>

          <p>
            <b>Created:</b> {product.dateCreated}
          </p>

          <p className={product.isAvailable ? "stock in" : "stock out"}>
            {product.isAvailable ? "In Stock ✅" : "Out of Stock ❌"}
          </p>

          <button className="cart-btn">🛒 Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
