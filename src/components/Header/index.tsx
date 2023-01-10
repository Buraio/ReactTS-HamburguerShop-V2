import logoIcon from "../../assets/logo.svg";
import HeaderCard from "../HeaderCard";
import StyledHeader from "./style";
import styledDots from "../../assets/styledDots.svg";

const Header = () => {
  return (
    <StyledHeader>
      <img src={logoIcon} alt="" />
      <HeaderCard />
      <img className="styledDots" src={styledDots} alt="" />
    </StyledHeader>
  );
};

export default Header;
