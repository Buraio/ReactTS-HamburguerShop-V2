import styled from "styled-components";
import StyledContainer from "../../styles/container";

const RegisterContainer = styled(StyledContainer)`

  flex-direction: column;

  @media (min-width: 1000px) {
    & {
      width: 80%;
      max-width: 1000px;
      height: 100vh;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 50px;
    }
  }

`;

export default RegisterContainer;