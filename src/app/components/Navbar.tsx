"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialLinkCapsule from "./SocialLinkCapsule";


const navLinks = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About", href: "/about" },
  { id: 3, name: "Projects", href: "/projects" },
  { id: 4, name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <header className="w-full h-25 sm:h-30">
      <nav
        className="w-full h-full sm:px-22.5 flex-col md:flex-row flex justify-between items-center bg-main-bg text-main-text relative pt-3 sm:pt-5"
        role="navigation"
      >
        <div className="logo text-3xl sm:text-4xl font-dm-serif-display">
          <Link href={"/"}>
            My Portfolio<span className="text-[#F2BCBC]">.</span>
          </Link>
        </div>
        <ul className="nav-links w-62 flex items-center justify-between text-sm sm:text-base font-normal font-roboto">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={` pb-1.25 transition-shadow duration-200 ${
                pathName === link.href
                  ? "text-main-text shadow-inset-nav shadow-main-text"
                  : "text-main-para hover:text-main-text hover:shadow-inset-nav hover:shadow-main-text"
              }`}
            >
              <Link className="transition-colors duration-200" href={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <SocialLinkCapsule />
    </header>
  );
};

export default Navbar;
