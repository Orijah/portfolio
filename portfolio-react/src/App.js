import "./App.css";
import * as Pages from "./pages";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

import experience from "./data/experience.json";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <SideBar></SideBar>
      <main className="container">
        <Routes>
          <Route path="about" element={<Pages.About />}></Route>
          <Route
            path="experience"
            element={<Pages.Experience exp={experience}></Pages.Experience>}
          ></Route>
          <Route path="projects" element={<Pages.Projects />}></Route>
          <Route path="blog" element={<Pages.Blog />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
