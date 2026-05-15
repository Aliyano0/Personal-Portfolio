import React from "react";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const SocialLinkCapsule = () => {
  return (
    <div className="socialLinks inline-flex items-center px-3 py-2 xs:px-4 xs:py-3 rounded-[64px] border-[1px] border-main-text text-[22px] gap-[10px] xs:text-[26px] sm:text-[30px] md:text-[34px] text-white xs:gap-4 fixed z-50 right-3 bottom-[14px] xs:right-5 xs:bottom-3 sm:right-7 sm:bottom-5 md:right-10 md:bottom-7 ">
      <Link
        href={"https://www.linkedin.com/in/aliyano0"}
        target="_blank"
        className="hover:shadow-md hover:shadow-main-text transition-all duration-300"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        href={"mailto:aliyanaqeel97@gmail.com?subject=Hello"}
        target="_blank"
        className="hover:shadow-md hover:shadow-main-text transition-all duration-300"
      >
        <CiMail />
      </Link>
      <Link
        href={"https://x.com/Aliyan_o0"}
        target="_blank"
        className="hover:shadow-md hover:shadow-main-text transition-all duration-300"
      >
        <FaXTwitter />
      </Link>
      <Link
        href={"https://www.instagram.com/aliyan.o0/"}
        target="_blank"
        className="hover:shadow-md hover:shadow-main-text transition-all duration-300"
      >
        <FaInstagram />
      </Link>
      <Link
        href={"https://github.com/Aliyano0"}
        target="_blank"
        className="hover:shadow-md hover:shadow-main-text transition-all duration-300"
      >
        <FaGithub />
      </Link>
    </div>
  );
};

export default SocialLinkCapsule;
