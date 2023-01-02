import React from "react";

//Import Components
import Socials from "./Socials";
import Logo from "../img/header/logoM.png";
import MobileNav from "./MobileNav";

//Import Link
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between uppercase">
        {/* Logo Section */}
        <Link to={"/"} className="max-w-[140px]">
          <img src={Logo} alt="" />
        </Link>

        {/* Nav - Intially hidden - show on desktop mode */}
        <nav className="hidden xl:flex gap-x-12 font-semibold">
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            About
          </Link>
          <Link
            to={"/portfolio"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Portfolio
          </Link>
          <Link
            to={"/contact"}
            className="text-[#696c6d] hover:text-primary transition"
          >
            Contact
          </Link>
        </nav>
      </div>
      {/* Socials */}
      <Socials />

      {/* MobileNav */}
      <MobileNav />
    </header>
  );
};

export default Header;
