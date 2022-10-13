import { FaGithub, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import SideBarIcon from "./MenuIcons";

const SideBar = () => {
  return (
    <>
      <div className="fixed bottom-5 left-5 w-16 h-60 p-1 flex flex-col bg-white text-gray-900 shadow">
        <SideBarIcon icon={<FaGithub />}></SideBarIcon>
        <SideBarIcon icon={<FaLinkedinIn />}></SideBarIcon>
        <SideBarIcon icon={<FaTwitter />}></SideBarIcon>
        <SideBarIcon icon={<FaEnvelope />}></SideBarIcon>
      </div>
    </>
  );
};

export default SideBar;
