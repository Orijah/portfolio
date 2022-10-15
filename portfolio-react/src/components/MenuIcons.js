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

export const NavBarIcon = ({ text }) => {
  return (
    <>
      <div className="navbar-icon">{text}</div>
    </>
  );
};
