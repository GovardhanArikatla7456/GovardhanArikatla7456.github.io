import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#3f8efc',
    secondary: '#1A1A1D',
    background: '#F9F7F0',
    //#F0F2F5
    text: '#333',
    white: '#fff',
    grey: '#888',
  },
  fonts: {
    main: "'Roboto', sans-serif",
    code: "'Courier New', Courier, monospace",
  },
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: ${props => props.theme.fonts.main};
  }
  
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }

  section {
    padding: 50px 20px;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.secondary};
  }

  nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-around;
    background-color: ${props => props.theme.colors.secondary};
    margin: 0;
  }

  nav a {
    color: ${props => props.theme.colors.white};
    font-weight: bold;
  }

  nav a:hover {
    color: ${props => props.theme.colors.primary};
  }
`;
