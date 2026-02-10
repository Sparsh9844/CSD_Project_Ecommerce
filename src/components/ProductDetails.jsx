import StarRating from "./StarRating";

function ProductDetails({ product, onBack }) {
  return (
    <div className="detail">
      <button onClick={onBack}>Back</button>

      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>

      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <h3>{product.price}</h3>

      <p>{product.desc}</p>
      <p>Warranty: {product.warranty} years</p>
      <p>Created in: {product.dateCreated}</p>

      <p>status: {product.isAvailable ? "InStock✅" : "Out of Stock ❌"}</p>

      <button className="btn">Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
