import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import { ProductContext } from "../../contexts/ProductContext/ProductContext";
import StyledCardButton from "./style";

interface iCardbuttonProps {
  id: string;
}

const CardButton = ({ id }: iCardbuttonProps) => {
  const { productArray } = useContext(ProductContext);
  const { cartProductArray, setCartProduct } = useContext(CartContext);

  const addProductToCart = (event: { target: HTMLInputElement }) => {
    const productCardId = event.target.id;
    console.log(productArray);

    productArray.map((product) => {
      // console.log(productCardId)
      // console.log(`${product.id}`)
      if (`${product.id}` === productCardId) {
        console.log("pão");
        setCartProduct((oldArray) => [...oldArray, product]);
        console.log(cartProductArray);
      }
    });
  };

  // useEffect(() => {

  // }, [cartProductArray])

  return (
    <StyledCardButton id={id} onClick={() => addProductToCart}>
      Adicionar
    </StyledCardButton>
  );
};

export default CardButton;
