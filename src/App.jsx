
import { useState } from "react";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="container">
      <h1>E-Commerce</h1>

      {selectedProduct ? (
        <ProductDetails
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
        />
      ):(
        <ProductList onSelect={setSelectedProduct}/>
      )}
    </div>
  );
}

export default App;