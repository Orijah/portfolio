import Logo from "./components/Logo";
import Nav from "./components/Nav";
import GlobalStyle from "./components/GlobalStyle";
import Palette from "./components/Palette";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import pages from "./pages";
import styled, { ThemeProvider } from "styled-components";
import useToggle from "./hooks/useToggle";
import gs from "./utils/gs";

const Viewport = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 100vh;
  overflow-y: auto;
  background-color: ${(p) => p.theme.bg};
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-grow: 1;
  margin: 0 auto;
  max-width: ${gs(100)};
  position: relative;
`;

const timings = {
  quick: "100ms",
};

const normalTheme = {
  bg: "#ebeef2",
  bgInfo: "#fff",
  shadows: "#bbb",
  weak: "#c3cdcf",
  normal: "#5a616e",
  strong: "#252b36",
  focus: "#252b36",
  highlight: "#ffe5ad",
  timings,
};

const triadicTheme = {
  bg: "#0B2E30",
  bgInfo: "#42052A",
  shadows: "#bbb",
  weak: "#F2AAD6",
  normal: "#35C9D4",
  strong: "#F2EDC9",
  focus: "#F2AAD6",
  highlight: "#42052A",
  timings,
};

const darkTheme = {
  bg: "#112238",
  bgInfo: "#47433B",
  shadows: "#bbb",
  weak: "#FFF4E0",
  normal: "#A5CAFA",
  strong: "#C4DEFF",
  focus: "#FFF4E0",
  highlight: "#47433B",
  timings,
};

const highContrastTheme = {
  bg: "#000",
  bgInfo: "#0000aa",
  shadows: "#bbb",
  weak: "#3e3",
  normal: "#eeee00",
  strong: "#fff",
  focus: "#f33",
  highlight: "#3333ff33",
  timings,
};

const choco = {
  bg: "#F2EFEB",
  bgInfo: "#D9D0C7",
  shadows: "#bbb",
  weak: "#3e3",
  normal: "#63594D",
  strong: "#3B3F42",
  focus: "#f33",
  highlight: "#D9D0C7",
  timings,
};

const bridgeTheme = {
  bg: "#D5E5F2",
  bgInfo: "#A9C6D9",
  shadows: "#bbb",
  weak: "#3e3",
  normal: "#402232",
  strong: "#364C59",
  focus: "#f33",
  highlight: "#A9C6D9",
  timings,
};

const techyTheme = {
  bg: "#F0F7FC",
  bgInfo: "#D8E7F0",
  shadows: "#bbb",
  weak: "#98BDD4",
  normal: "#4D6070",
  strong: "#102026",
  focus: "#98BDD4",
  highlight: "#E8CDAC",
  timings,
};

function App() {
  const [highContrast, toggleHighContrast] = useToggle();

  return (
    <Router>
      <ThemeProvider theme={highContrast ? highContrastTheme : techyTheme}>
        <GlobalStyle />
        <Viewport>
          <TopBar>
            <Logo />
            <Nav />
          </TopBar>
          <Page>
            <Palette
              highContrast={highContrast}
              handleHighContrast={toggleHighContrast}
            />
            <Routes>
              {pages.map(({ id, component }) => {
                const Component = component;
                return <Route key={id} path={id} element={<Component />} />;
              })}
            </Routes>
          </Page>
        </Viewport>
      </ThemeProvider>
    </Router>
  );
}

export default App;
