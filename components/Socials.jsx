import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaBehance } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaBehance />, path: "" },
];

const Socials = ({ containerSyles, iconStyles }) => {
  return (
    <div className={containerSyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
