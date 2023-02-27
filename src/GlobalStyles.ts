import { createGlobalStyle } from "styled-components";
import bgImage from "./assets/background-stars.svg";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Antonio&family=League+Spartan:wght@400;700&display=swap');
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #070724;
    background-image: url(${bgImage});
  }

  a {
    text-decoration: none;
}

`;

export default GlobalStyles;
