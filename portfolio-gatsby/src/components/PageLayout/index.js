import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import { css, useTheme } from "@emotion/react";
import GlobalStyles from "./GlobalStyles";
import Helmet from "react-helmet";
import { ThemeProvider } from "@emotion/react";
import useLocalStorageState from "use-local-storage-state";
import themes from "../../utils/themes";
import Palette from "../Palette";
import "../../reset.css";

const Wrappers = (props) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,200;0,300;0,400;0,500;0,700;1,200;1,300;1,400;1,700&family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider
        theme={themes[props.highContrast ? "highContrastTheme" : "techyTheme"]}
      >
        <GlobalStyles />
        {props.children}
      </ThemeProvider>
    </>
  );
};

const Layout = (props) => {
  const theme = useTheme();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        margin: 0;
        height: 100vh;
        overflow-y: auto;
        background-color: ${theme.bg};
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <Logo />
        <Nav />
      </div>
      <div
        css={css`
          flex-grow: 1;
          position: relative;
          overflow-y: auto;
        `}
      >
        <Palette {...props} />
        {props.children}
      </div>
    </div>
  );
};

export default function PageLayout(props) {
  const [highContrast, setHighContrast] = useLocalStorageState(
    "use-high-contrast",
    false
  );

  return (
    <Wrappers highContrast={highContrast}>
      <Layout
        highContrast={highContrast}
        handleHighContrast={() => setHighContrast((s) => !s)}
      >
        {props.children}
      </Layout>
    </Wrappers>
  );
}
