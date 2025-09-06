"use client";
// import dynamic from "next/dynamic";
import React from "react";
import HamburgerMenu from "./hamburgerMenu";
import MenuOptions from "./menu-options";

// const MenuOptions = dynamic(() => import("./menu-options"), { ssr: true });

const Menu = () => {
  const [isSticky, setIsSticky] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 315);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`w-full z-30 bg-black/45 sm:text-white shadow-md transition-all duration-300 ${
        isSticky ? "fixed top-0" : "absolute top-0 sm:bottom-0 sm:top-auto"
      }`}
    >
      <div className="hidden sm:block max-w-1400 mx-auto">
        <MenuOptions />
      </div>
      <HamburgerMenu />
    </nav>
  );
};

export default Menu;
