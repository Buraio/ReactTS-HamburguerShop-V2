import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  :root {
    --color-primary: #27AE60;
    --color-secondary: #EB5757;

    --information: #155BCB;
    --success: #168821;
    --warning: #FFCD07;
    --negative: #E60000;

    --gray-0: #F5F5F5;
    --gray-100: #E0E0E0;
    --gray-300: #828282;
    --gray-600: #333333;

    --font-family: "Inter", sans-serif;

    --font-size-1: 1.625rem;
    --font-size-2: 1.375rem;
    --font-size-3: 1.125rem;
    --font-size-4: 1rem;
    --font-size-5: 0.875rem;
    --font-size-6: 0.75rem;

    --font-weight-1: 700;
    --font-weight-2: 600;
    --font-weight-3: 400;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button, a {
    cursor: pointer;
  }

  button {
    border: none;
    background: transparent;
  }

  a {
    text-decoration: none;
    color: unset;
  }

  ul, ol, li {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6, p, a, span, li, button, input, label, select, option, fieldset, legend, small {
    font-family: var(--font-family);
  }

  /* legend {
    display: none;
  } */

  body {
    height: 100vh;
  }

  @media (min-width: 375px) {

    body {
      overflow-x: hidden;
    }

  }

`;

export default GlobalStyles;
