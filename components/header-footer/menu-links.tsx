import Link from "next/link";

const MenuLinks = () => (
  <ul
    className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-8 md:gap-11 lg:gap-14 sm:items-center"
    dir="rtl"
  >
    <li>
      <Link
        href="#aboutUs"
        className="hover:text-red-500 text-xs sm:text-sm lg:text-base"
      >
        درباره ما
      </Link>
    </li>
    <li>
      <Link
        href="#services"
        className="hover:text-red-500 text-xs sm:text-sm lg:text-base"
      >
        خدمات
      </Link>
    </li>
    <li>
      <Link
        href="#projects"
        className="hover:text-red-500 text-xs sm:text-sm lg:text-base"
      >
        پروژه‌ها
      </Link>
    </li>
    <li>
      <Link
        href="#blogs"
        className="hover:text-red-500 text-xs sm:text-sm lg:text-base"
      >
        وبلاگ
      </Link>
    </li>
    <li>
      <Link
        href="#clients"
        className="hover:text-red-500 text-xs sm:text-sm lg:text-base"
      >
        مشتریان
      </Link>
    </li>
    <li>
      <Link
        href="#contactUs"
        className="hover:text-red-500 text-xs sm:text-sm lg:text-base"
      >
        ارتباط با ما
      </Link>
    </li>
  </ul>
);

export default MenuLinks;
