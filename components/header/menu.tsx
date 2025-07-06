"use client";
import Link from "next/link";
import React from "react";

const Menu = () => {
  const [isSticky, setIsSticky] = React.useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 315);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full z-30 bg-black/45 text-white shadow-md transition-all duration-300 ${
        isSticky ? "fixed top-0" : "absolute bottom-0"
      }
      `}
    >
      <ul className="flex justify-center gap-14 py-4 items-center" dir="rtl">
        <li>
          <Link href="#" className="hover:text-red-500 font-medium">
            صفحه اصلی
          </Link>
        </li>
        <li
          className="relative"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <Link href="#" className="hover:text-red-500 font-medium">
            خدمات
          </Link>

          {isServicesOpen && (
            <ul
              className={`absolute ${
                isSticky ? "top-7" : "bottom-6"
              } w-96 right-0 bg-white py-5 px-6 shadow-md z-50 rounded space-y-3.5`}
            >
              <li>
                <Link href="#" className="text-gray-800 hover:text-red-500">
                  برندینگ و استراتژی
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-800 hover:text-red-500">
                  تولید محتوا تصویری
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-800 hover:text-red-500">
                  تولید محتوا گرافیکی و متنی
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-800 hover:text-red-500">
                  مدیریت شبکه های اجتماعی
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-800 hover:text-red-500">
                  طراحی سایت و سئو
                </Link>
              </li>
            </ul>
          )}
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
