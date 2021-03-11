import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --primary: #25303B;
  --secondary: #9B51E0;
  --white: #fff;
  --black: #000;
  --font: 'Manrope', sans-serif;
}
  * {
    font-family: var(--font); 
    box-sizing: border-box;
  }
  body {
    background: #F5F4F4;
    font-family: var(--font);
    color: var(--primary);
  }
`;
