import DashboardHeader from "../../components/DashboardHeader";
import ProductList from "../../components/ProductList";
import ProductProvider from "../../contexts/ProductContext/ProductContext";

const DashboardPage = () => {
  return (
    <ProductProvider>
      <DashboardHeader />

      <ProductList />
    </ProductProvider>
  );
};

export default DashboardPage;
