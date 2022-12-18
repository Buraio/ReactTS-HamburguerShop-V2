import { useContext, useEffect, useState } from "react";
import magnifierIcon from "../../assets/magnifierIcon.svg";
import { ProductContext } from "../../contexts/ProductContext/ProductContext";

const SearchBar = () => {
  const { productArray, setProductFilter } = useContext(ProductContext);

  const [inputValue, setInputValue] = useState<string>("");

  const filterProductsByButton = () => {

    setProductFilter(() => {
      return productArray.filter((product) => {
        if (product.name.toLowerCase().match(inputValue.toLowerCase())) {
          return product;
        }
      });
    });
  };

  useEffect(() => {
    filterProductsByInput();
  }, [inputValue]);

  const filterProductsByInput = () => {
    setProductFilter(() => {
      const filterArr = productArray.filter((product) => {
        console.log(inputValue);
        return product.name.toLowerCase().match(inputValue.toLowerCase());
      });

      return filterArr;
    });
  };

  return (
    <div className="searchDiv">
      <input
        type="text"
        placeholder="Digitar pesquisa"
        onChange={(event: { target: HTMLInputElement }) =>
          setInputValue(event.target.value)
        }
      />
      <button onClick={filterProductsByButton}>
        <img src={magnifierIcon} alt="" />
      </button>
    </div>
  );
};

export default SearchBar;
