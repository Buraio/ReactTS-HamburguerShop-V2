import { useContext } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import CartModal from "../../components/Modal";
import ProductList from "../../components/ProductList";
import { CartContext } from "../../contexts/CartContext/CartContext";

const DashboardPage = () => {
  const { cartModal } = useContext(CartContext);

  return (
    <>
      <DashboardHeader />

      <ProductList />

      {cartModal === true && <CartModal />}
    </>
  );
};

export default DashboardPage;
