import { useState } from "react";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import "./App.css";

function App() {
const [selectedProduct, setSelectedProduct] = useState(null);

return ( <div className="app">
{/* Header */} <header className="header"> <h1>🛒 My E-Commerce Store</h1> <nav> <a href="#">Home</a> <a href="#">Products</a> <a href="#">Contact</a> </nav> </header>

```
  {/* Main Content */}
  <main className="container">
    {selectedProduct ? (
      <ProductDetails
        product={selectedProduct}
        onBack={() => setSelectedProduct(null)}
      />
    ) : (
      <ProductList onSelect={setSelectedProduct} />
    )}
  </main>

  {/* Footer */}
  <footer className="footer">
    <p>© 2026 My E-Commerce | All Rights Reserved</p>
  </footer>
</div>


);
}

export default App;
