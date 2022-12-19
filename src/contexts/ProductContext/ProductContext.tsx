import { createContext, useState } from "react";
import { iProductCardProps } from "../../components/ProductCard";
import { iContextChildrenProp } from "../UserContext/userContextInterfaces";
import { iProductContext } from "./productContextInterfaces";

export const ProductContext = createContext({} as iProductContext);

const ProductProvider = ({ children }: iContextChildrenProp) => {
  const [productArray, setProductArray] = useState<iProductCardProps[]>([]);
  const [filteredProducts, setProductFilter] = useState<iProductCardProps[]>([]);

  return (
    <ProductContext.Provider
      value={{
        productArray,
        setProductArray,
        filteredProducts,
        setProductFilter,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider