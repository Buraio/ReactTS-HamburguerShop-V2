import styled from "styled-components";

const StyledList = styled.ul`
  width: 100%;
  display: flex;
  overflow-x: auto;
  gap: 10px;

  & > li {
    flex-shrink: 0;
  }

  @media (min-width: 620px) {
    max-width: 620px;
    margin: 0 auto;
    overflow-x: hidden;
    flex-wrap: wrap;
    gap: 5px;
  }

  @media (min-width: 940px) {
    max-width: 940px;
    gap: 20px;
  }

  @media (min-width: 1260px) {
    max-width: 1260px;
  }
`;

export default StyledList;
