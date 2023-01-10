import styled from "styled-components";

const StyledModal = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 70px 15px;
  background-color: var(--gray-0);
  border-radius: 5px;
  
  & > header {
    padding: 15px;
    margin-bottom: 20px;
    background-color: var(--color-primary);
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px 5px 0 0;
  }

  & > header > h2 {
    font-size: 14px;
  }

  & > header > button {
    color: rgba(255, 255, 255, 0.6);
    font-size: var(--font-size-4);
  }

  & .noProducts {
    padding: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  & .noProducts > p {
    font-size: 16px;
    font-weight: 600;
  }

  & .noProducts > span {
    font-size: 12px;
    color: var(--gray-300);
  }

`;

export default StyledModal;
