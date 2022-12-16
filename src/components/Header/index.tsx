import logoIcon from "../../assets/logo.svg";
import HeaderCard from "../HeaderCard";

const Header = () => {
  return (
    <header>
      <img src={logoIcon} alt="" />
      <HeaderCard />
    </header>
  );
};

export default Header;
