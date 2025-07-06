"use client";
import Link from "next/link";
import React from "react";

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
      className={`w-full z-30 bg-black/45 text-white shadow-md  ${
        isSticky ? "fixed top-0" : "absolute bottom-0"
      }`}
    >
      <ul className="flex justify-center gap-8 py-4 items-center" dir="rtl">
        <li>
          <Link href="#" className="hover:text-red-500 font-medium">
            صفحه اصلی
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-red-500 font-medium">
            خدمات
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-red-500 font-medium">
            نمونه کار
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-red-500 font-medium">
            وبلاگ
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-red-500 font-medium">
            درباره ما
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-red-500 font-medium">
            ارتباط با ما
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
