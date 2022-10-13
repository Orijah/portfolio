const SideBarIcon = ({ icon, text = "tooltip" }) => {
  return (
    <div className="sidebar-icon">
      {icon}

      <span className="sidebar-tooltip">{text}</span>
    </div>
  );
};

const NavBarIcon = ({ icon }) => {
  return <div className="navbar-icon">{icon}</div>;
};

export default SideBarIcon;
