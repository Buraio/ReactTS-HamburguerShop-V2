import styled from "styled-components";

const StyledTotalCart = styled.div`
  min-height: 150px;
  padding: 20px 10px;
  background-color: var(--gray-4);
  border-top: 2px solid var(--gray-3);
  border-radius: 0 0 5px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > div {
    display: flex;
    justify-content: space-between;
  }

  & > div > span,
  small {
    font-weight: var(--font-weight-2);
    font-size: var(--font-size-5);
  }

  & > div > small,
  & > button {
    color: var(--gray-300);
  }

  & > button {
    width: 100%;
    height: 60px;
    background-color: var(--gray-100);
    border-radius: 8px;
    font-size: var(--font-size-5);
    font-weight: var(--font-weight-2);
  }
`;

export default StyledTotalCart;
