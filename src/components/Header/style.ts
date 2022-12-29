import styled from "styled-components";

const StyledHeader = styled.header`

  max-width: 400px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  & > img {
    max-width: 200px;
  }

`;

export default StyledHeader;