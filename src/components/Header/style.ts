import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  & > img {
    max-width: 200px;
  }

  & > img.styledDots {
    display: none;
  }

  @media (min-width: 1000px) {
    & > img.styledDots {
      display: inline-block;
    }

    & div {
      margin-left: 5px;
    }
  }
`;

export default StyledHeader;
