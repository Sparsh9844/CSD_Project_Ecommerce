function ProductCard({product, onSelect}) {
  return (
    <div className="card" onClick={() => onSelect(product)}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p className={product.isAvailable ? "In" : "out"}>
        {product.isAvailable ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}

export default ProductCard;