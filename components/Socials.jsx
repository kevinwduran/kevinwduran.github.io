import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaBehance } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/kevinwduran" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/kevin-duran-b06b09315/" },
  { icon: <FaBehance />, path: "https://www.behance.net/kevinduran22" },
];

const Socials = ({ containerSyles, iconStyles }) => {
  return (
    <div className={containerSyles}>
      {socials.map((item, index) => {
        return (
          <Link target="_blank" key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
