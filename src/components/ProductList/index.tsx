import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext/ProductContext";
import { iProductContext } from "../../contexts/ProductContext/productContextInterfaces";
import { burguerKenzieApi } from "../../services/api";
import ProductCard, { iProductCardProps } from "../ProductCard";

const ProductList = () => {
  const { productArray, setProductArray, filteredProducts } =
    useContext(ProductContext);

  useEffect(() => {
    const token = localStorage.getItem("@token");

    if (!token) {
    } else {
      const requestProductsFromApi = async () => {
        try {
          const request = await burguerKenzieApi.get("products", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          console.log(request);

          setProductArray(request.data);
          console.log(productArray);
        } catch (error) {
          console.error(error);
        }
      };

      requestProductsFromApi();
    }
  }, []);

  const renderProducts = (array: iProductCardProps[]) => {
    return array.map((product, index) => {
      const { id, name, category, price, img }: iProductCardProps = product;

      return (
        <ProductCard
          key={index}
          id={id}
          name={name}
          category={category}
          price={price}
          img={img}
        >
          <button></button>
        </ProductCard>
      );
    });
  };

  return (
    <ul>
      {filteredProducts.length !== 0
        ? renderProducts(filteredProducts)
        : renderProducts(productArray)}
    </ul>
  );
};

export default ProductList;
