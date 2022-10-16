import { Link } from "react-router-dom";

export const SideBarIcon = ({
  icon,
  text = "",
  link = "https://www.google.com/",
}) => {
  return (
    <a href={link}>
      <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
      </div>
    </a>
  );
};

export const NavBarIcon = ({ text, to }) => {
  return (
    <div className="navbar-icon">
      <Link to={to}>{text}</Link>
    </div>
  );
};
