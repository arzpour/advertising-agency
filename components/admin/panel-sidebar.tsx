"use client";
import React from "react";
import Link from "next/link";
import { LuLogOut } from "react-icons/lu";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { GrProjects, GrArticle } from "react-icons/gr";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import useLogout from "@/hooks/useLogout";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { adminPanelActions } from "@/redux/features/admin.slice";

const PanelSideBar = () => {
  const dispatch = useAppDispatch();
  const { adminPanelTab } = useAppSelector((state) => state.admin);

  const { logoutHandler } = useLogout();

  return (
    <ul className="font-medium mt-4 space-y-3">
      <li className="flex items-center gap-3 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer">
        <AiOutlineHome className="w-5 h-5" />
        <Link href="/" className="hidden md:block">
          صفحه اصلی
        </Link>
      </li>
      <button
        className={`flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer ${
          adminPanelTab === "adminInfo" ? "bg-gray-300 w-full text-red-600" : ""
        }`}
        onClick={() =>
          dispatch(adminPanelActions.setadminPanelTab("adminInfo"))
        }
      >
        <FaRegUser className="w-5 h-5" />
        <Link
          href="/profile"
          className={`hidden md:block ${
            adminPanelTab === "adminInfo" ? "font-medium" : ""
          }`}
        >
          اطلاعات کاربری
        </Link>
      </button>
      <button
        className={`flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer ${
          adminPanelTab === "projects" ? "bg-gray-100 w-full text-red-600" : ""
        }`}
        onClick={() => dispatch(adminPanelActions.setadminPanelTab("projects"))}
      >
        <GrProjects className="w-5 h-5" />
        <Link
          href="/profile"
          className={`hidden md:block ${
            adminPanelTab === "projects" ? "font-medium" : ""
          }`}
        >
          پروژه ها
        </Link>
      </button>
      <button
        className={`flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer ${
          adminPanelTab === "blogs" ? "bg-gray-300 w-full text-red-600" : ""
        }`}
        onClick={() => dispatch(adminPanelActions.setadminPanelTab("blogs"))}
      >
        <GrArticle className="w-5 h-5" />
        <Link
          href="/profile"
          className={`hidden md:block ${
            adminPanelTab === "blogs" ? "font-medium" : ""
          }`}
        >
          بلاگ ها
        </Link>
      </button>
      <button
        className={`flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer ${
          adminPanelTab === "tickets" ? "bg-gray-300 w-full text-red-600" : ""
        }`}
        onClick={() => dispatch(adminPanelActions.setadminPanelTab("tickets"))}
      >
        <BiMessageSquareDetail className="w-5 h-5" />
        <Link
          href="/profile"
          className={`hidden md:block ${
            adminPanelTab === "tickets" ? "font-medium" : ""
          }`}
        >
          تیکت ها
        </Link>
      </button>
      <li className="flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer">
        <FaRegHeart className="w-5 h-5" />
        <Link href="/profile" className="hidden md:block">
          علاقه مندی ها
        </Link>
      </li>
      <li className="flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer">
        <LuLogOut className="w-5 h-5" />
        <button onClick={logoutHandler} className="md:block cursor-pointer">
          خروج
        </button>
      </li>
    </ul>
  );
};

export default PanelSideBar;
