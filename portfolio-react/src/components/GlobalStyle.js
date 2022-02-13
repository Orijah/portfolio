import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "OpenMoji Color";
    src: url("/public/OpenMoji-Color.ttf") format("ttf");
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "IBM Plex Mono", monospace, "OpenMoji Color", "Apple Color Emoji";
    position: relative;
  }

  body,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(p) => p.theme.normal}
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
