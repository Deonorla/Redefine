import React from "react";
import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const links = [
  { href: "https://discord.ccom", icon: <FaDiscord /> },
  { href: "https://x.com", icon: <FaX /> },
  { href: "https://github.ccom", icon: <FaGithub /> },
  { href: "https://twitch.ccom", icon: <FaTwitch /> },
];
const Footer = () => {
  return (
    <div className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; Deonorla 2025. All rights reserved
        </p>
        <div className="flex justify-center gap-4 md:justify-start ">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a
          href="#privacy"
          className="text-center text-sm hover:underline
             md:text-right "
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
