import logoIcon from "../../assets/logo.svg";
import exitIcon from "../../assets/exitIcon.svg";
import cartIcon from "../../assets/cartIcon.svg";
import SearchBar from "../SearchBar";

const DashboardHeader = () => {

  return (
    <header>
      <img src={logoIcon} alt="" />

      <div>
        <div>
          <SearchBar />
        </div>

        <div>
          <button><img src={cartIcon} alt="" /></button>
          <button><img src={exitIcon} alt="" /></button>
        </div>
      </div>
    </header>
  )

}

export default DashboardHeader;