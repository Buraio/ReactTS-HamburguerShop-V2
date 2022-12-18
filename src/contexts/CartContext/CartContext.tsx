import React, { createContext, useState } from "react";
import { iProductCardProps } from "../../components/ProductCard";
import { iContextChildrenProp } from "../UserContext/userContextInterfaces";

interface iCartContextProps {
  cartProductArray: iProductCardProps[];
  setCartProduct: React.Dispatch<React.SetStateAction<iProductCardProps[]>>;
}

export const CartContext = createContext({} as iCartContextProps);

const CartProvider = ({ children }: iContextChildrenProp) => {
  const [cartProductArray, setCartProduct] = useState<iProductCardProps[]>([]);

  return (
    <CartContext.Provider value={{ cartProductArray, setCartProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
