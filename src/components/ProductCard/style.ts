import styled from "styled-components";

const StyledProductCardLi = styled.li`
  width: 100%;
  max-width: 300px;
  border: 2px solid #e0e0e0;
  border-radius: 5px;

  & > img {
    width: 100%;
    max-height: 160px;
    object-fit: contain;
    background-color: var(--gray-4);
  }

  & > div {
    margin: 14px 21px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  & > div > h2 {
    font-size: var(--font-size-3);
  }

  & > div > small {
    color: var(--gray-2);
    font-size: var(--font-size-6);
  }

  & > div > span {
    font-weight: var(--font-weight-2);
    font-size: var(--font-size-5);
    color: var(--color-primary);
  }

  @media (min-width: 375px) {
    flex-shrink: 0;
  }
`;

export default StyledProductCardLi;
