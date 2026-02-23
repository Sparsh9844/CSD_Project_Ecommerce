import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";

/* ---------- HEADER ---------- */
function Header({ user, setUser }) {
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <header className="header">
      <h2 className="logo">
        <Link to="/">ShopEase</Link>
      </h2>

      <div className="nav-buttons">
        {user ? (
          <>
            <span className="welcome">Hi, {user.name}</span>
            <button onClick={handleLogout} className="nav-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-btn">
              Login
            </Link>
            <Link to="/signup" className="nav-btn">
              Signup
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="footer">© {new Date().getFullYear()} ShopEase</footer>
  );
}

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [user, setUser] = useState(null);

  // Load user from localStorage
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  return (
    <BrowserRouter>
      <Header user={user} setUser={setUser} />

      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              {!selectedProduct ? (
                <ProductList onSelect={setSelectedProduct} />
              ) : (
                <ProtectedRoute user={user}>
                  <ProductDetails
                    product={selectedProduct}
                    onBack={() => setSelectedProduct(null)}
                  />
                </ProtectedRoute>
              )}
            </div>
          }
        />

        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
