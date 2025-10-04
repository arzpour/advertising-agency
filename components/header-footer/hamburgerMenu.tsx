import React from "react";
import { AlignLeft } from "lucide-react";
import MenuLinks from "./menu-links";
import Link from "next/link";
import Image from "next/image";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const clickOutSideHandler = (e: globalThis.MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", clickOutSideHandler);
    }

    return () => {
      document.removeEventListener("mousedown", clickOutSideHandler);
    };
  }, [isOpen]);

  return (
    <div
      className="sm:hidden relative w-full flex justify-between items-center px-4 py-3"
      ref={menuRef}
    >
      <button
        aria-label="align-left"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <AlignLeft className="text-gray-200 w-6 h-6" />
      </button>

      <Link href="#header" aria-label="header">
        <Image src="/logo.png" width={120} height={100} alt="logo-image" />
      </Link>

      {isOpen && (
        <div className="absolute top-9 left-0 w-full bg-white z-50 p-5 rounded shadow">
          <MenuLinks onClick={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
