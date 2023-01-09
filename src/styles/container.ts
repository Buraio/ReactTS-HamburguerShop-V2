import styled from "styled-components";

const StyledContainer = styled.div`

  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  gap: 15px;

  @media (min-width: 450px) {
    & {
      width: 80%;
    }
  }

  @media (min-width: 650px) {
    & {
      width: 70%;
    }
  }

  @media (min-width: 800px) {
    & {
      width: 60%;
    }
  }

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

export default StyledContainer;