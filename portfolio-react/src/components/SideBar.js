import { FaGithub, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { SideBarIcon } from "./MenuIcons";

const SideBar = () => {
  return (
    <>
      <div className="fixed bottom-5 left-5 w-16 h-60 p-1 flex flex-col bg-white text-gray-900">
        <SideBarIcon
          icon={<FaGithub />}
          text="Github"
          link="https://github.com/nathankagi"
        ></SideBarIcon>
        <SideBarIcon
          icon={<FaLinkedinIn />}
          text="LinkedIn"
          link="https://www.linkedin.com/in/nathankagi/"
        ></SideBarIcon>
        <SideBarIcon
          icon={<FaTwitter />}
          text="Twitter"
          link="https://twitter.com/nathankagi"
        ></SideBarIcon>
        <SideBarIcon
          icon={<FaEnvelope />}
          link="npkagi@outlook.com"
          text="npkagi@outlook.com"
        ></SideBarIcon>
      </div>
    </>
  );
};

export default SideBar;
