import Image from "next/image";
import React from "react";
import LoginForm from "./login-form";

const Login = () => {
  return (
    <div className="flex gap-2 h-svh w-full" dir="rtl">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 w-1/2">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex gap-2">
          {/* <Image
            src="/IMG_20250717_163940_569.png"
            alt="Your Company Logo"
            width={200}
            height={100}
          />
          
          */}
          <div className="flex gap-1.5 items-center relative bottom-1">
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
          <h2 className="text-2xl/9 font-semibold tracking-tight text-gray-700 mt-3">
            ورود به پنل ادمین
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <LoginForm />
        </div>
      </div>
      <Image
        src="/photo-1496917756835-20cb06e75b4e.avif"
        alt="login-image"
        width={200}
        height={200}
        className="w-1/2 h-svh object-cover object-center"
      />
    </div>
  );
};

export default Login;
