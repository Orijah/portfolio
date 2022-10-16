import { NavBarIcon } from "./MenuIcons";
import { Outlet, Link } from "react-router-dom";

const NavBar = ({ pages }) => {
  return (
    <nav className="nav">
      <NavBarIcon text="About" to="about"></NavBarIcon>
      <NavBarIcon text="Experience" to="experience"></NavBarIcon>
      <NavBarIcon text="Projects" to="projects"></NavBarIcon>
      <NavBarIcon text="Blog" to="blog"></NavBarIcon>
      <div className="resume">Resume</div>
      <Outlet></Outlet>
    </nav>
  );
};

export default NavBar;
