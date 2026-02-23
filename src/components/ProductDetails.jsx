function ProductDetails({ product, onBack }) {
  return (
    <div className="details-container">
      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>

      <div className="details-layout">
        {/* LEFT IMAGE */}
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        {/* RIGHT INFO */}
        <div className="details-info">
          <h2>{product.name}</h2>

          <p className="details-desc">{product.desc}</p>

          <p className="details-price">₹ {product.price}</p>

          <p>
            Warranty: <strong>{product.warranty} years</strong>
          </p>

          <p
            className={
              product.isAvailable ? "badge in-stock" : "badge out-stock"
            }
          >
            {product.isAvailable ? "In Stock" : "Out of Stock"}
          </p>

          <button className="add-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
