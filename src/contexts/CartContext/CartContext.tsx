import React, { createContext, useState } from "react";
import { iProductCardProps } from "../../components/ProductCard";
import { iContextChildrenProp } from "../UserContext/userContextInterfaces";

interface iCartContextProps {
  cartProductArray: iProductCardProps[];
  setCartProduct: React.Dispatch<React.SetStateAction<iProductCardProps[]>>;
  cartModal: boolean;
  setCartModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartContext = createContext({} as iCartContextProps);

const CartProvider = ({ children }: iContextChildrenProp) => {
  const [cartProductArray, setCartProduct] = useState<iProductCardProps[]>([]);
  const [cartModal, setCartModal] = useState<boolean>(false);

  return (
    <CartContext.Provider
      value={{ cartProductArray, setCartProduct, cartModal, setCartModal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
