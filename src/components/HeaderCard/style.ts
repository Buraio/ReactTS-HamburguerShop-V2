import styled from "styled-components";

const StyledHeaderCard = styled.div`
  width: 100%;
  height: 95px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--gray-100);
  box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);

  & > div {
    width: 60px;
    height: 60px;
    background-color: rgba(39, 174, 96, 0.1);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > p {
    max-width: 70%;
    font-weight: 400;
    font-size: 12px;
    color: var(--gray-300);
  }

  @media (min-width: 400px) {
    & p {
      font-size: 14px;
    }
  }
`;

export default StyledHeaderCard;
