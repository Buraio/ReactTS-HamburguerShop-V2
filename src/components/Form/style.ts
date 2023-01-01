import styled from "styled-components";

const StyledForm = styled.form`
  width: 100%;
  padding: 18px;
  border: 1px solid var(--gray-100);
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  & h2 {
    font-weight: 700;
    font-size: 16px;
    color: var(--gray-600);
  }

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & div > a {
    text-decoration: underline;
    color: var(--gray-300);
    font-weight: 600;
    font-size: 14px;
  }

  & fieldset {
    height: 50px;
    margin: 10px 0;
    border-radius: 8px;
    border: 2px solid var(--gray-600);
  }

  & > fieldset > legend {
    margin: 0 10px;
    padding: 0 5px;
    font-size: 12px;
    color: var(--gray-300);
  }

  & > button,
  & > a {
    display: inline-block;
    width: 100%;
    height: 45px;
    margin-top: 10px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    line-height: 300%;
  }

  & input:focus {
    outline: none;
  }

  & button:enabled {
    color: var(--gray-0);
    background-color: var(--color-primary);
  }

  & button:disabled,
  & > a {
    color: var(--gray-300);
    background-color: var(--gray-0);
  }

  & p {
    max-width: 75%;
    margin: 10px auto;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: var(--gray-300);
    display: flex;
  }
`;

export default StyledForm;
