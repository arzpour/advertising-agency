"use client";
import React from "react";
import { AlignLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PanelSideBar from "../panel-sidebar";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="sm:hidden w-full flex justify-between items-center">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="align-left"
      >
        <AlignLeft className="w-6 h-6" />
      </button>

      <Link href="#header" aria-label="header" className="hidden md:block">
        <Image src="/logo.png" width={120} height={100} alt="logo-image" />
      </Link>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white z-50 py-5 rounded shadow">
          <PanelSideBar setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
