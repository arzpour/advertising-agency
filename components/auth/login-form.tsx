"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchema, loginSchemaType } from "@/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle, EyeOff, Eye } from "lucide-react";
import { useLogin } from "@/apis/mutations/auth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { setAccessToken, setRefreshToken, setRole } from "@/utils/session";
import { useAppDispatch } from "@/redux/hooks";
import { adminPanelActions } from "@/redux/features/admin.slice";

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const login = useLogin();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginSchemaType>({
    mode: "all",
    resolver: zodResolver(loginSchema),
  });

  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit: SubmitHandler<loginSchemaType> = async (data) => {
    try {
      const response = await login.mutateAsync(data);

      const token = response.token;

      setRole(response.data.user.role);

      if (token) {
        setAccessToken(token.accessToken);
        setRefreshToken(token.refreshToken);
      }

      dispatch(
        adminPanelActions.setAdminInfo({
          name: `${response.data.user.firstname} ${response.data.user.lastname}`,
          email: response.data.user.phoneNumber,
        })
      );

      if (response.data.user.role === "ADMIN") {
        router.push("/admin");
        toast("وارد شدید", {
          icon: "✅",
          className: "!bg-green-100 !text-green-800 !shadow-md !h-[60px]",
        });
      }
    } catch (error) {
      toast("اطلاعات وارد شده صحیح نیست", {
        className: "!bg-red-100 !text-red-800 !shadow-md !h-[60px]",
      });

      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="md:max-w-md w-full mx-auto text-white"
    >
      <div>
        <div className="relative flex items-center">
          <input
            {...register("username")}
            type="text"
            name="username"
            required
            autoComplete="username"
            placeholder="نام کاربری یا تلفن همراه خود را وارد کنید"
            className="block w-full rounded-md border-b border-gray-700 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6 outline-none"
          />
        </div>
        {errors.username && (
          <p className="text-red-500 mt-3 text-xs font-medium">
            {errors.username.message}
          </p>
        )}
      </div>

      <div className="mt-5">
        <div className="relative flex items-center">
          <input
            {...register("password")}
            name="password"
            type={!showPassword ? "password" : "text"}
            required
            autoComplete="current-password"
            placeholder="رمز عبور را وارد کنید"
            className="block w-full rounded-md border-b border-gray-600 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6 outline-none"
          />
          {showPassword ? (
            <Eye
              onClick={showPasswordHandler}
              className="w-4 h-4 absolute left-2 text-gray-600 cursor-pointer"
            />
          ) : (
            <EyeOff
              onClick={showPasswordHandler}
              className="w-4 h-4 absolute left-2 text-gray-600 cursor-pointer"
            />
          )}
        </div>
        {errors.password && (
          <p className="text-red-500 mt-3 text-xs font-medium">
            {errors.password.message}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
        <div className="hidden sm:flex gap-2 items-center">
          <input
            id="remember-me"
            type="checkbox"
            className="h-4 w-4 shrink-0 rounded"
          />
          <label
            htmlFor="remember-me"
            className="text-gray-400 ml-3 block text-sm"
          >
            مرا به خاطر بسپار
          </label>
        </div>

        <a href={"/"} className="text-red-500 text-sm hover:underline">
          رمز عبور را فراموش کرده اید؟
        </a>
      </div>

      <div className="mt-4 sm:mt-6">
        {login.isPending && !login.isError ? (
          <button
            type="submit"
            className="flex gap-2 items-center w-full cursor-pointer mb-3 justify-center rounded-md bg-slate-600 px-3 py-2 text-sm/6 font-semibold text-white shadow-xs hover:bg-slate-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
          >
            <span>در حال ورود</span>
            <LoaderCircle className="w-5 h-5 animate-spin" />
          </button>
        ) : (
          <button
            type="submit"
            className="flex w-full mb-3 justify-center cursor-pointer rounded-md bg-slate-600 px-3 py-2 text-sm/6 font-semibold text-white shadow-xs hover:bg-slate-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
          >
            ورود
          </button>
        )}
        <a
          href={"/"}
          className="text-gray-500 text-center text-sm hover:underline mt-9 whitespace-nowrap"
        >
          بازگشت به سایت
        </a>
      </div>
    </form>
  );
};

export default LoginForm;
