import Link from "next/link";
import Image from "next/image";
import MenuLinks from "./menu-links";

const MenuOptions = () => {
  return (
    <div className="flex justify-center items-center gap-3 md:gap-8">
      <Link href="#header" aria-label="header">
        <Image
          src="/logo.png"
          width={200}
          height={200}
          alt="logo-image"
          priority
        />
      </Link>
      <MenuLinks />
    </div>
  );
};

export default MenuOptions;
