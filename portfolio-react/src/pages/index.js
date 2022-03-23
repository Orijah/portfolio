import Bio from "./Bio";
import Experience from "./Experience";
import Projects from "./Projects";
import Blog from "./Blog";
import FavTech from "./FavTech";

const pages = [
  { id: "bio", name: "Bio", component: Bio },
  { id: "experience", name: "Experience", component: Experience },
  { id: "projects", name: "Projects", component: Projects },
  { id: "blog", name: "Blog", component: Blog },
  { id: "fav-tech", name: "Fav tech", component: FavTech },
];

export default pages;
