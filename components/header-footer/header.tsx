import Link from "next/link";
import React from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import Menu from "./menu";

const Header = () => {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;

  return (
    <header className="relative h-[33rem] w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
      >
        <source src="/6561920-uhd_3840_2160_25fps.mp4" type="video/mp4" />
        مرورگر شما ویدیو را پشتیبانی نمی‌کند.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/45 z-10"></div>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-2xl font-medium md:text-4xl md:font-bold mb-4">
          آژانس تبلیغاتی هانس
        </h1>
        <div className="flex gap-4 md:gap-6 items-center">
          <Link href={`tel:${phoneNumber}`} aria-label="phone">
            <FaPhone className="md:w-6 md:h-5 text-gray-300" />
          </Link>
          <Link
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="whatsapp"
          >
            <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
          </Link>
        </div>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
