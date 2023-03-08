import { createGlobalStyle } from "styled-components";
import bgImage from "./assets/background-stars.svg";

const GlobalStyles = createGlobalStyle`

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
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
  }

  a {
    text-decoration: none;
  }

`;

export default GlobalStyles;
