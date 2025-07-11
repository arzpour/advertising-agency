import Link from "next/link";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import {
  FaLinkedinIn,
  FaPhoneAlt,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="relative h-full w-full p-10 mt-10 py-10 flex flex-col gap-y-4">
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>
      <img
        src="/istockphoto-1385970223-1024x1024.jpg"
        alt="footer-image"
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
      />

      <div className="relative z-20 flex gap-20 justify-start items-start px-40">
        <nav className="space-y-6">
          <h6 className="text-white text-base text-start">خدمات</h6>
          <ul className="space-y-4 text-start">
            <li>
              <Link href="#" className="text-white text-sm hover:text-red-500">
                برندینگ و استراتژی
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-sm hover:text-red-500">
                تولید محتوا تصویری
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-sm hover:text-red-500">
                تولید محتوا گرافیکی و متنی
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-sm hover:text-red-500">
                مدیریت شبکه های اجتماعی
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-sm hover:text-red-500">
                طراحی سایت و سئو
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="space-y-6">
          <h6 className="text-white text-base text-start">شرکت</h6>
          <ul className="space-y-4 text-start">
            <li>
              <Link href="#" className="text-white text-sm hover:text-red-500">
                درباره ما
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-sm hover:text-red-500">
                ارتباط با ما
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-sm hover:text-red-500">
                پروژه‌ها
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="space-y-6">
          <h6 className="text-white text-base text-start">سایر</h6>
          <ul className="space-y-4 text-start">
            <li>
              <Link href="#" className="text-white text-sm hover:text-red-500">
                ادمین
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-sm hover:text-red-500">
                مشتریان
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white text-sm hover:text-red-500">
                ثبت شکایات
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="space-y-6">
          <h6 className="text-white text-base text-start">دسترسی سریع</h6>
          <ul className="space-y-4 text-start">
            <li className="flex gap-3 items-center">
              <CiLocationOn className="w-5 h-5 relative bottom-0.5 text-white" />
              <p className="text-gray-300 text-sm">
                آدرس: <span>تهران سعادت آباد ......</span>{" "}
              </p>
            </li>
            <li className="flex gap-3 items-center">
              <MdEmail className="w-4 h-4 relative bottom-0.5 text-white" />
              <span className="text-gray-300 text-sm">saeeed@gmail.com</span>
            </li>
            <li className="flex gap-3 items-center">
              <FaPhoneAlt className="w-4 h-4 relative bottom-0.5 text-white" />
              <span className="text-gray-300 text-sm">+21-32374672</span>
            </li>
          </ul>
        </nav>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.3689116129785!2d51.42392006080537!3d35.71714467246129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0163e5761819%3A0xdec0a45e7d0d5d5!2sHaft-e%20Tir%20Square%2C%20Tehran%2C%20Iran!5e0!3m2!1sen!2s!4v1752248605985!5m2!1sen!2s"
            width="400"
            height="250"
            style={{ border: 0, borderRadius: 8 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gray-200 z-20 mt-8"></div>
      <div className="flex justify-between items-center z-20">
        <div className="flex gap-4 items-center">
          <FaInstagram className="w-4 h-4 text-white" />
          <FaTelegramPlane className="w-4 h-4 text-white" />
          <FaLinkedinIn className="w-4 h-4 text-white" />
          <FaWhatsapp className="w-4 h-4 text-white" />
        </div>
        <span className="text-white text-sm">
          © طرح سایت/لوگو تنها متعلق به این وبسایت می‌باشد.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
