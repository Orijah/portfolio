import GlobalStyle from "./components/GlobalStyle";
import Palette from "./components/Palette";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import pages from "./pages";
import { ThemeProvider } from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import PageLayout from "./components/PageLayout";
import themes from "./utils/themes";

export default function App() {
  const [highContrast, setHighContrast] = useLocalStorageState(
    "use-high-contrast",
    false
  );

  return (
    <Router>
      <ThemeProvider
        theme={themes[highContrast ? "highContrastTheme" : "techyTheme"]}
      >
        <GlobalStyle />
        <PageLayout>
          <Palette
            highContrast={highContrast}
            handleHighContrast={() => setHighContrast((s) => !s)}
          />
          <Routes>
            {pages.map(({ id, component }) => {
              const Component = component;
              return <Route key={id} path={id} element={<Component />} />;
            })}
          </Routes>
        </PageLayout>
      </ThemeProvider>
    </Router>
  );
}
