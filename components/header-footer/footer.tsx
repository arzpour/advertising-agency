import React from "react";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import ContactUs from "../contact-us/contact-us";

const Footer = () => {
  return (
    <footer className="relative h-full w-full p-10 mt-10 py-10 flex flex-col gap-y-4">
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-10"></div>
      <Image
        src="/istockphoto-1385970223-1024x1024.jpg"
        alt="footer-image"
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
        width={200}
        height={200}
        loading="lazy"
      />

      <div className="relative z-20 flex flex-wrap md:flex-nowrap gap-10 md:gap-7 lg:gap-10 justify-start xl:justify-center items-start px-0 2xl:px-40">
        {/* <nav className="space-y-6">
          <h6 className="text-white text-base text-start">خدمات</h6>
          <ul className="space-y-4 text-start">
            <li>
              <Link
                href="#"
                aria-label="branding"
                className="text-white text-sm hover:text-red-500"
              >
                برندینگ و استراتژی
              </Link>
            </li>
            <li>
              <Link
                href="#"
                aria-label="images"
                className="text-white text-sm hover:text-red-500"
              >
                تولید محتوا تصویری
              </Link>
            </li>
            <li>
              <Link
                href="#"
                aria-label="text"
                className="text-white text-sm hover:text-red-500"
              >
                تولید محتوا گرافیکی و متنی
              </Link>
            </li>
            <li>
              <Link
                href="#"
                aria-label="media"
                className="text-white text-sm hover:text-red-500"
              >
                مدیریت شبکه های اجتماعی
              </Link>
            </li>
            <li>
              <Link
                href="#"
                aria-label="seo-site"
                className="text-white text-sm hover:text-red-500"
              >
                طراحی سایت و سئو
              </Link>
            </li>
          </ul>
        </nav> */}
        {/* <nav className="space-y-6">
          <h6 className="text-white text-base text-start">شرکت</h6>
          <ul className="space-y-4 text-start">
            <li>
              <Link
                href="#"
                aria-label="about-us"
                className="text-white text-sm hover:text-red-500"
              >
                درباره ما
              </Link>
            </li>
            <li>
              <Link
                href="#"
                aria-label="contact-us"
                className="text-white text-sm hover:text-red-500"
              >
                ارتباط با ما
              </Link>
            </li>
            <li>
              <Link
                href="#"
                aria-label="hire"
                className="text-white text-sm hover:text-red-500"
              >
                استخدام
              </Link>
            </li>
          </ul>
        </nav> */}
        {/* <nav className="space-y-6">
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
        </nav> */}
        <nav className="space-y-6">
          <h6 className="text-white text-base text-start">دسترسی سریع</h6>
          <ul className="space-y-4 text-start">
            <li className="flex gap-3 items-center">
              <MapPin className="w-5 h-5 relative bottom-0.5 text-white" />
              <p className="text-gray-300 text-sm">
                آدرس: <span>تهران سعادت آباد ......</span>{" "}
              </p>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="w-4 h-4 relative bottom-0.5 text-white" />
              <span className="text-gray-300 text-sm">saeeed@gmail.com</span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="w-4 h-4 relative bottom-0.5 text-white" />
              <span className="text-gray-300 text-sm">+21-32374672</span>
            </li>
          </ul>
        </nav>
        <div>
          <ContactUs />
        </div>
      </div>

      <div className="h-[1px] w-full bg-gray-200 z-20 mt-8"></div>
      <div className="flex flex-wrap gap-y-3 justify-between items-center z-20">
        <div className="flex gap-4 items-center">
          <Instagram className="w-4 h-4 text-white" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0,0,256,256"
          >
            <g
              fill="#339af0"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
            >
              <g transform="scale(5.12,5.12)">
                <path d="M25,2c12.703,0 23,10.297 23,23c0,12.703 -10.297,23 -23,23c-12.703,0 -23,-10.297 -23,-23c0,-12.703 10.297,-23 23,-23zM32.934,34.375c0.423,-1.298 2.405,-14.234 2.65,-16.783c0.074,-0.772 -0.17,-1.285 -0.648,-1.514c-0.578,-0.278 -1.434,-0.139 -2.427,0.219c-1.362,0.491 -18.774,7.884 -19.78,8.312c-0.954,0.405 -1.856,0.847 -1.856,1.487c0,0.45 0.267,0.703 1.003,0.966c0.766,0.273 2.695,0.858 3.834,1.172c1.097,0.303 2.346,0.04 3.046,-0.395c0.742,-0.461 9.305,-6.191 9.92,-6.693c0.614,-0.502 1.104,0.141 0.602,0.644c-0.502,0.502 -6.38,6.207 -7.155,6.997c-0.941,0.959 -0.273,1.953 0.358,2.351c0.721,0.454 5.906,3.932 6.687,4.49c0.781,0.558 1.573,0.811 2.298,0.811c0.725,0 1.107,-0.955 1.468,-2.064z"></path>
              </g>
            </g>
          </svg>

          <Linkedin className="w-4 h-4 text-white" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0,0,256,256"
          >
            <g
              fill="#20c997"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
            >
              <g transform="scale(5.12,5.12)">
                <path
                  className="w-5 h-5 md:w-6 md:h-6 "
                  d="M25,2c-12.682,0 -23,10.318 -23,23c0,3.96 1.02289,7.85306 2.96289,11.28906l-2.92578,10.44141c-0.096,0.343 -0.00386,0.70984 0.24414,0.96484c0.191,0.197 0.45175,0.30469 0.71875,0.30469c0.08,0 0.16123,-0.0103 0.24023,-0.0293l10.89648,-2.69922c3.327,1.786 7.07328,2.72852 10.86328,2.72852c12.682,0 23,-10.318 23,-23c0,-12.682 -10.318,-23 -23,-23zM16.64258,14c0.394,0 0.78586,0.00548 1.13086,0.02148c0.363,0.018 0.85108,-0.138 1.33008,1c0.492,1.168 1.67236,4.03708 1.81836,4.33008c0.148,0.292 0.24678,0.63248 0.05078,1.02148c-0.196,0.389 -0.29384,0.63361 -0.58984,0.97461c-0.296,0.341 -0.62072,0.75948 -0.88672,1.02148c-0.296,0.291 -0.60377,0.60545 -0.25977,1.18945c0.344,0.584 1.52916,2.49306 3.28516,4.03906c2.255,1.986 4.15805,2.60253 4.74805,2.89453c0.59,0.292 0.9353,0.24252 1.2793,-0.14648c0.344,-0.39 1.47614,-1.70216 1.86914,-2.28516c0.393,-0.583 0.78613,-0.48797 1.32813,-0.29297c0.542,0.194 3.44516,1.60448 4.03516,1.89648c0.59,0.292 0.98481,0.43864 1.13281,0.68164c0.148,0.242 0.14825,1.40853 -0.34375,2.76953c-0.492,1.362 -2.85233,2.60644 -3.98633,2.77344c-1.018,0.149 -2.3067,0.21158 -3.7207,-0.23242c-0.857,-0.27 -1.95623,-0.62752 -3.36523,-1.22852c-5.923,-2.526 -9.79189,-8.41569 -10.08789,-8.80469c-0.295,-0.389 -2.41016,-3.1603 -2.41016,-6.0293c0,-2.869 1.52441,-4.27928 2.06641,-4.86328c0.542,-0.584 1.18217,-0.73047 1.57617,-0.73047z"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <span className="text-white text-sm">
          © طرح سایت/لوگو تنها متعلق به این وبسایت می‌باشد.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
