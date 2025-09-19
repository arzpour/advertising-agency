import Link from "next/link";

interface MenuLinksProps {
  onClick?: () => void;
}

const menuOptions = [
      { href: "#aboutUs", label: "درباره ما" },
      { href: "#services", label: "خدمات" },
      { href: "#projects", label: "پروژه‌ها" },
      { href: "#blogs", label: "وبلاگ" },
      { href: "#clients", label: "مشتریان" },
      { href: "#contactUs", label: "ارتباط با ما" },
    ]

const MenuLinks: React.FC<MenuLinksProps> = ({ onClick }) => (
  <ul
    className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-7 md:gap-11 lg:gap-14 sm:items-center"
    dir="rtl"
  >
    {menuOptions.map((item) => (
      <li key={item.href}>
        <Link
          href={item.href}
          aria-label={item.label}
          className="hover:text-red-500 text-xs sm:text-sm lg:text-base"
          onClick={onClick}
        >
          {item.label}
        </Link>
      </li>
    ))}
  </ul>
);

export default MenuLinks;
