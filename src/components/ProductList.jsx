import products from "../data/product";
import ProductCard from "./productCard";

function ProductList({ onSelect}) {
  return (
    <div>
      {products.map((product) => (
        <ProductCard
          key = {product.id}
          product={product}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default ProductList;

