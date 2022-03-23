import React from "react";
import { Global, css, useTheme } from "@emotion/react";

const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      css={css`
        @font-face {
          font-family: "OpenMoji Color";
          src: url("/public/OpenMoji-Color.ttf") format("ttf");
        }

        body {
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          font-family: "IBM Plex Mono", monospace, "OpenMoji Color",
            "Apple Color Emoji";
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
          color: ${theme.normal};
        }

        button {
          cursor: pointer;
        }
      `}
    />
  );
};

export default GlobalStyles;
