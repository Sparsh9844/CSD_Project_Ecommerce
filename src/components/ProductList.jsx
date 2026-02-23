import products from "../data/product";
import ProductCard from "./ProductCard";

function ProductList({ onSelect }) {
  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onSelect={onSelect} />
      ))}
    </div>
  );
}

export default ProductList;
