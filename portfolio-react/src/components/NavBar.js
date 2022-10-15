import { NavBarIcon } from "./MenuIcons";
import { Outlet, Link } from "react-router-dom";

const NavBar = ({ pages }) => {
  return (
    <nav className="nav">
      <Link to="about">
        <NavBarIcon text="About"></NavBarIcon>
      </Link>
      <Link to="experience">
        <NavBarIcon text="Experience"></NavBarIcon>
      </Link>
      <Link to="projects">
        <NavBarIcon text="Projects"></NavBarIcon>
      </Link>
      <Link to="blog">
        <NavBarIcon text="Blog"></NavBarIcon>
      </Link>
      <div className="resume">Resume</div>
      <Outlet></Outlet>
    </nav>
  );
};

export default NavBar;
