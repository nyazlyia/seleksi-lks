import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import ProductListPage from "./ProductList";
import ProductDetailPage from "./ProductDetail";
import CartPage from "./Cart";
import SummaryPage from "./Summary";
import SearchPage from "./Search";
import LoginPage from "./Login";
import RegisterPage from "./Register";
import AdminLayout from "./AdminLayout";
import AdminDashboard from "./AdminDashboard";
import AdminProducts from "./AdminProducts";
import AdminOrders from "./AdminOrders";
import AdminUsers from "./AdminUsers";
import AdminLogin from "./AdminLogin";

const AdminRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("adminLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/admin/login" />;
};

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

            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <AdminLayout />
                </AdminRoute>
              }
            >
              <Route index element={<AdminDashboard />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="orders" element={<AdminOrders />} />
              <Route path="users" element={<AdminUsers />} />
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
