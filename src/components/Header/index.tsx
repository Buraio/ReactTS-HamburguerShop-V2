import logoIcon from "../../assets/logo.svg";
import HeaderCard from "../HeaderCard";
import StyledHeader from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <img src={logoIcon} alt="" />
      <HeaderCard />
    </StyledHeader>
  );
};

export default Header;
