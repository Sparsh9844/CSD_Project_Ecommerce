function ProductCard({ product, onSelect }) {
  return (
    <div className="card" onClick={() => onSelect(product)}>
      {" "}
      <img src={product.image} alt={product.name} />
      <div className="card-body">
        <h3>{product.name}</h3>

        <p className="price">₹{product.price}</p>

        <p className={product.isAvailable ? "stock in" : "stock out"}>
          {product.isAvailable ? "In Stock" : "Out of Stock"}
        </p>

        <button className="view-btn">View Details</button>
      </div>
    </div>
  );
}

export default ProductCard;
