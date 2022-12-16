import { useContext, useState } from "react";
import magnifierIcon from "../../assets/magnifierIcon.svg";
import { ProductContext } from "../../contexts/ProductContext/ProductContext";



const SearchBar = () => {

  const { productArray, setProductFilter } = useContext(ProductContext);

  const [inputValue, setInputValue] = useState<string>("");

  const filterProductsByButton = async (event: MouseEvent) => {
    event.preventDefault();

    setProductFilter(() => {
      return productArray.filter((product) => {
        if (product.name.toLowerCase()) {
          return product;
        }
      });
    });
  };

  return (
    <div className="searchDiv">
      <input type="text" placeholder="Digitar pesquisa" onChange={() => (event: InputEvent) => {setInputValue(event.target.value)
      console.log(event)}}/>
      <button>
        <img src={magnifierIcon} alt="" />
      </button>
    </div>
  );
};

export default SearchBar;