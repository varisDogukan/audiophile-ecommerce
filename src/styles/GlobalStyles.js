import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --clr-orange: #D87D4A;
    --clr-orange-light: #fbaf85;
    --clr-black: #000000;
    --clr-black2: #101010;
    --clr-black3: #0E0E0E;
    --clr-white: #FFFFFF;
    --clr-white2: #FAFAFA;
    --clr-white3: #F1F1F1;
    --clr-white4: #F2F2F2;
    --clr-grey: #2C2C2C;
    --clr-grey2: #808080;
    --clr-grey3: #4C4C4C;

    --max-width: 1110px;
    --font-family: 'Manrope', sans-serif;
    --transition: all .2s linear;
    --border: 1px solid #cfcfcf;
  }

  *, *::before, *::after { box-sizing: border-box; }

  * { margin: 0; padding: 0; }

  html { 
    font-size: 100%; /*16px*/  
  } 

  html, body, #root { height: 100%; }

  body {
    background-color: var(--dark-1);
    font-family:var(--font-family);  
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }

  ul { list-style: none; }

  a { 
    text-decoration: none; 
    color: inherit;
  }

  input, button, textarea, select { font: inherit; }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  p, h1, h2, h3, h4, h5, h6 { overflow-wrap: break-word; }

  h1, h2, h3, h4, h5 {
    margin-top: 0;
    font-family: var(--font-family);
    line-height: 1.3;
  }

  #root { isolation: isolate; }

  .max-container {
    max-width: var(--max-width);
    margin: 0 auto;    
  }  
`;

export default GlobalStyles;
