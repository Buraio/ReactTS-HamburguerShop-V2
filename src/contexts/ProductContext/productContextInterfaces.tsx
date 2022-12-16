import React from "react";
import { iProductCardProps } from "../../components/ProductCard";

export interface iProductContext {
  productArray: iProductCardProps[];
  setProductArray: React.Dispatch<React.SetStateAction<iProductCardProps[]>>;
  filteredProducts: iProductCardProps[];
  setProductFilter: React.Dispatch<React.SetStateAction<iProductCardProps[]>>
}