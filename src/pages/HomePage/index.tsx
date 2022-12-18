import DashboardHeader from "../../components/DashboardHeader";
import ProductList from "../../components/ProductList";
import CartProvider from "../../contexts/CartContext/CartContext";
import ProductProvider from "../../contexts/ProductContext/ProductContext";

const DashboardPage = () => {
  return (
    <ProductProvider>
      <CartProvider>
        <DashboardHeader />

        <ProductList />
      </CartProvider>
    </ProductProvider>
  );
};

export default DashboardPage;
