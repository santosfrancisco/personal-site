import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --primary: #25303B;
  --secondary: #9B51E0;
  --white: #fff;
  --black: #000;
}
  * {
    font-family: 'Fira Sans', sans-serif; 
    box-sizing: border-box;
  }
  body {
    background: #F5F4F4;
    font-family: 'Fira Sans', sans-serif;
    color: var(--primary);
  }
`;
