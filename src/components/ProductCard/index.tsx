import React from "react";
import CardButton from "../CardButton";
import StyledProductCardLi from "./style";

export interface iProductCardProps {
  id: string;
  img: string;
  name: string;
  category: string;
  price: number;
}

const ProductCard = ({
  id,
  img,
  name,
  category,
  price,
}: iProductCardProps) => {
  return (
    <StyledProductCardLi id={id}>
      <img src={img} alt="" />
      <div>
        <h2>{name}</h2>
        <small>{category}</small>
        <span>R$ {price}</span>
      </div>
      <CardButton id={id}/>
    </StyledProductCardLi>
  );
};

export default ProductCard;
