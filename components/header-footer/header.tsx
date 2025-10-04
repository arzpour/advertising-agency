import Link from "next/link";
import React from "react";
import { Phone, Instagram } from "lucide-react";
import Menu from "./menu";

const Header = () => {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;

  return (
    <header
      id="header"
      className="relative h-[33rem] w-full overflow-hidden font-Vazirmatn scroll-mt-20"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
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
            <Phone className="md:w-6 md:h-5 text-white" />
          </Link>
          <Link
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="whatsapp"
          >
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
          </Link>
          <Link href="https://www.instagram.com/setarz" aria-label="instagram">
            <Instagram className="md:w-6 md:h-6 text-[#CF2C8C]" />
          </Link>
        </div>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
