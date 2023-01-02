import { Route, Routes } from "react-router-dom";
import CartProvider from "../contexts/CartContext/CartContext";
import ProductProvider from "../contexts/ProductContext/ProductContext";
import DashboardPage from "../pages/Dashboard";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={
          <ProductProvider>
            <CartProvider>
              <DashboardPage />
            </CartProvider>
          </ProductProvider>
        }
      />
    </Routes>
  );
};

export default RoutesMain;
