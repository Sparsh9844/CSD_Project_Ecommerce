import products from "../data/product";
import ProductCard from "./ProductCard"; // ✅ Fix case

function ProductList({ onSelect }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default ProductList;
