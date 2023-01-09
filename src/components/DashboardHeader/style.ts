import styled from "styled-components";

const StyledDashHeader = styled.header`

  width: 100%;
  height: 80px;
  margin-bottom: 25px;
  background-color: var(--gray-0);

  & > div.headerContainer {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > div.headerContainer > img {
    max-width: 160px;
  }

  & div.searchDiv {
    display: none;
  }

  & div.iconDiv {

    display: flex;
    gap: 20px;

    > img {
      width: 25px;
    }
  }

`;

export default StyledDashHeader;