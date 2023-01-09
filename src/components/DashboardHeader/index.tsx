import logoIcon from "../../assets/logo.svg";
import exitIcon from "../../assets/exitIcon.svg";
import cartIcon from "../../assets/cartIcon.svg";
import SearchBar from "../SearchBar";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";
import StyledDashHeader from "./style";

const DashboardHeader = () => {
  const navigate = useNavigate();
  const { setCartModal } = useContext(CartContext);

  const exitToLogin = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <StyledDashHeader>
      <div className="headerContainer">
        <img src={logoIcon} alt="" />
        <div>
          <SearchBar />

          <div className="iconDiv">
            <button onClick={() => setCartModal(true)}>
              <img src={cartIcon} alt="" />
            </button>
            <button onClick={exitToLogin}>
              <img src={exitIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </StyledDashHeader>
  );
};

export default DashboardHeader;
