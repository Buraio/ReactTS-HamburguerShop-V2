import React from "react";
import StyledProductCardLi from "./style";

export interface iProductCardProps {
  id: string;
  img: string;
  name: string;
  category: string;
  price: number;
  children: React.ReactNode;
}

const ProductCard = ({
  id,
  img,
  name,
  category,
  price,
  children,
}: iProductCardProps) => {
  return (
    <StyledProductCardLi id={id}>
      <img src={img} alt="" />
      <div>
        <h2>{name}</h2>
        <small>{category}</small>
        <span>R$ {price}</span>
      </div>
      {children}
    </StyledProductCardLi>
  );
};

export default ProductCard;
