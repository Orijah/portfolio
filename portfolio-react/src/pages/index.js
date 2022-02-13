import Bio from "./Bio";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

const pages = [
  { id: "bio", name: "Bio", component: Bio },
  { id: "experience", name: "Experience", component: Experience },
  { id: "projects", name: "Projects", component: Projects },
  { id: "contact", name: "Contact", component: Contact },
];

export default pages;
