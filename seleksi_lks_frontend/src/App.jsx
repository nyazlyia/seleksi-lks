import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProductListPage from "./ProductList";
import ProductDetailPage from "./ProductDetail";
import CartPage from "./Cart";
import SummaryPage from "./Summary";
import SearchPage from "./Search";
import LoginPage from "./Login";
import RegisterPage from "./Register";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/summary" element={<SummaryPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
