import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import TotalCart from "../TotalCart";
import ModalBackground from "./modalBackground";
import StyledModal from "./style";

const CartModal = () => {
  const { cartProductArray, setCartModal } = useContext(CartContext);

  return (
    <ModalBackground>
      <StyledModal>
        <header>
          <h2>Carrinho de compras</h2>
          <button onClick={() => setCartModal(false)}>X</button>
        </header>
        <div className="noProducts">
          <p>Sua sacola está vazia</p>
          <span>Adicione itens</span>
        </div>

        <ul>

          {cartProductArray.map((product) => {
            return (
              <>
                <p>{product.price}</p>
              </>
            );
          })}

        </ul>

        <TotalCart />
      </StyledModal>
    </ModalBackground>
  );
};

export default CartModal;
