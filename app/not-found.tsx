import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="bg-gray-100 sm:p-20 md:px-24 lg:px-32 h-dvh" dir="rtl">
      <div className="lg:shadow-xl flex gap-2 w-full lg:bg-gray-50 h-full lg:rounded-lg whitespace-nowrap overflow-hidden">
        <div className="flex flex-col justify-center px-6 py-12 lg:px-8 w-full lg:w-1/2">
          <div className="text-start lg:pr-4">
            <p className="text-3xl md:text-4xl font-semibold text-red-500">
              404
            </p>
            <h2 className="mt-4 font-semibold tracking-tight text-balance text-gray-600 text-xl">
              صفحه ای که به دنبال آن بودید یافت نشد
            </h2>
            <div className="mt-8 gap-x-6">
              <Link
                href="/"
                aria-label="home-page"
                className="rounded-md bg-red-500 px-5 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-400"
              >
                صفحه اصلی
              </Link>
            </div>
          </div>
        </div>
        <div className="relative md:w-1/2 hidden lg:block">
          <Image
            src="/premium_photo-1684711741208-315dcfa993b9.avif"
            alt="login-image"
            width={200}
            height={200}
            className="w-full h-full object-fill relative"
          />
          <div className="absolute top-0 bg-black opacity-30 h-full w-full z-50"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
