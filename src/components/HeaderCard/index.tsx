import StyledHeaderCard from "./style";
import shoppingBag from "../../assets/shoppingBagIcon.svg";

const HeaderCard = () => {
  return (
    <StyledHeaderCard>
      <div>
        <img src={shoppingBag} alt="" />
      </div>
      <p>
        A vida é como um sanduíche, é preciso recheá-la com os
        <span>melhores</span> ingredientes.
      </p>
    </StyledHeaderCard>
  );
};

export default HeaderCard;
