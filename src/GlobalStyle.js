import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #121212, #2b2b2b); no-repeat center center fixed;
    background-size: cover;
    color: #333;
  }
`;

export default GlobalStyle;
