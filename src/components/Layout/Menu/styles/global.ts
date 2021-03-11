import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    background: ${colors.white};
    -webkit-font-smoothing: antialiased;
    color: ${colors.text};
  }
  body, input, button {
    font-family: 'Montserrat', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
  }
`;
