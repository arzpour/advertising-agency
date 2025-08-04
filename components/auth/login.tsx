import Image from "next/image";
import React from "react";
import LoginForm from "./login-form";

const Login = () => {
  return (
    <div className="bg-gray-100 sm:p-20 md:px-24 lg:px-32 h-dvh" dir="rtl">
      <div className="shadow-2xl flex gap-2 w-full bg-gray-50 h-full rounded-lg whitespace-nowrap overflow-hidden">
        <div className="flex flex-col justify-center px-6 py-12 lg:px-8 w-full md:w-1/2">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm flex gap-3 mb-2.5">
            <div className="flex gap-2.5 items-center relative bottom-1">
              <div>
                <div className="w-2 h-2 bg-red-500 my-2"></div>
                <div className="w-2 h-2 bg-red-500"></div>
              </div>
              <div className="w-2 h-6 relative top-1 bg-red-500"></div>

              <div>
                <div className="w-2 h-2 bg-red-500 my-2"></div>
                <div className="w-2 h-2 bg-red-500"></div>
              </div>
            </div>
            <h2 className="text-2xl/9 font-semibold tracking-tight text-gray-700 mr-2">
              ورود به پنل ادمین
            </h2>
          </div>

          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <LoginForm />
          </div>
        </div>
        <div className="relative md:w-1/2 hidden md:block">
          <Image
            src="/premium_photo-1684711741208-315dcfa993b9.avif"
            alt="login-image"
            width={200}
            height={200}
            className="w-full h-full object-fill relative"
          />
          <div className="absolute top-0 bg-black opacity-60 h-full w-full z-50"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
