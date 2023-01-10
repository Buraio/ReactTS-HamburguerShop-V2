import React from "react";
import StyledTotalCart from "./style";

const TotalCart = () => {
  const removeAllFromCart = () => {};

  return (
    <StyledTotalCart>
      <div>
        <span>Total</span>
        <small>R$ 0.00</small>
      </div>
      <button className="" onClick={removeAllFromCart}>
        Remover todos
      </button>
    </StyledTotalCart>
  );
};

export default TotalCart;
