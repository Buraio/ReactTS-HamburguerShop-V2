import { MouseEvent, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../../contexts/CartContext/CartContext";
import { ProductContext } from "../../contexts/ProductContext/ProductContext";
import StyledCardButton from "./style";
import "react-toastify/dist/ReactToastify.css";
interface iCardbuttonProps {
  id: string;
}

const CardButton = ({ id }: iCardbuttonProps) => {
  const { productArray } = useContext(ProductContext);
  const { cartProductArray, setCartProduct } = useContext(CartContext);

  const addProductToCart = (event: MouseEvent) => {
    const target = event.target as HTMLButtonElement;
    const productCardId = target.id;
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

    toast.success("Item adicionado ao carrinho");
  };

  // useEffect(() => {

  // }, [cartProductArray])

  return (
    <StyledCardButton
      id={id}
      onClick={(event) => {
        addProductToCart(event);
      }}
    >
      Adicionar
    </StyledCardButton>
  );
};

export default CardButton;
