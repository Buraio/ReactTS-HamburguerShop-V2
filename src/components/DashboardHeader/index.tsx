import logoIcon from "../../assets/logo.svg";
import exitIcon from "../../assets/exitIcon.svg";
import cartIcon from "../../assets/cartIcon.svg";
import SearchBar from "../SearchBar";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";

const DashboardHeader = () => {
  const navigate = useNavigate();
  const { setCartModal } = useContext(CartContext);

  const exitToLogin = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <header>
      <img src={logoIcon} alt="" />

      <div>
        <div>
          <SearchBar />
        </div>

        <div>
          <button onClick={() => setCartModal(true)}>
            <img src={cartIcon} alt="" />
          </button>
          <button onClick={exitToLogin}>
            <img src={exitIcon} alt="" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
