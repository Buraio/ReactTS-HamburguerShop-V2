import logoIcon from "../../assets/logo.svg";
import HeaderCard from "../HeaderCard";
<<<<<<< Updated upstream
=======
import StyledHeader from "./style";
import styledDots from "../../assets/styledDots.svg";
>>>>>>> Stashed changes

const Header = () => {
  return (
    <StyledHeader>
      <img src={logoIcon} alt="" />
      <HeaderCard />
<<<<<<< Updated upstream
    </header>
=======
      <img className="styledDots" src={styledDots} alt="" />
    </StyledHeader>
>>>>>>> Stashed changes
  );
};

export default Header;
