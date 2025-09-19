"use client";
import React from "react";
import Link from "next/link";
import {
  LogOut,
  MessageSquareText,
  Heart,
  SquareChartGantt,
  Newspaper,
  House,
  User,
  Layers2,
} from "lucide-react";
import useLogout from "@/hooks/useLogout";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { adminPanelActions } from "@/redux/features/admin.slice";

interface IPanelSideBar {
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const PanelSideBar: React.FC<IPanelSideBar> = ({ setIsOpen }) => {
  const dispatch = useAppDispatch();
  const { adminPanelTab } = useAppSelector((state) => state.admin);

  const { logoutHandler } = useLogout();

  return (
    <ul className="font-medium mt-4 space-y-3 w-full">
      <div className="w-full flex items-center gap-3 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer">
        <House className="w-5 h-5" />
        <Link
          href="/"
          aria-label="home-page"
          className="sm:hidden md:block"
          onClick={() => {
            if (setIsOpen) {
              setIsOpen(false);
            }
          }}
        >
          صفحه اصلی
        </Link>
      </div>
      <div
        className={`w-full flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer ${
          adminPanelTab === "adminInfo" ? "bg-gray-100 w-full text-red-600" : ""
        }`}
      >
        <User className="w-5 h-5" />
        <Link
          href="/admin"
          onClick={() => {
            if (setIsOpen) {
              setIsOpen(false);
            }
            dispatch(adminPanelActions.setadminPanelTab("adminInfo"));
          }}
          aria-label="user-info"
          className={`sm:hidden md:block ${
            adminPanelTab === "adminInfo" ? "font-medium" : ""
          }`}
        >
          اطلاعات کاربری
        </Link>
      </div>
      <div
        className={`w-full flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer ${
          adminPanelTab === "projects" ? "bg-gray-100 w-full text-red-600" : ""
        }`}
      >
        <SquareChartGantt className="w-5 h-5" />
        <Link
          href="/admin"
          aria-label="projects"
          onClick={() => {
            if (setIsOpen) {
              setIsOpen(false);
            }
            dispatch(adminPanelActions.setadminPanelTab("projects"));
          }}
          className={`sm:hidden md:block ${
            adminPanelTab === "projects" ? "font-medium" : ""
          }`}
        >
          پروژه ها
        </Link>
      </div>
      <div
        className={`w-full flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer ${
          adminPanelTab === "blogs" ? "bg-gray-100 w-full text-red-600" : ""
        }`}
      >
        <Newspaper className="w-5 h-5" />
        <Link
          href="/admin"
          aria-label="blogs"
          onClick={() => {
            if (setIsOpen) {
              setIsOpen(false);
            }
            dispatch(adminPanelActions.setadminPanelTab("blogs"));
          }}
          className={`sm:hidden md:block ${
            adminPanelTab === "blogs" ? "font-medium" : ""
          }`}
        >
          بلاگ ها
        </Link>
      </div>
      <div
        className={`w-full flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer ${
          adminPanelTab === "categories"
            ? "bg-gray-100 w-full text-red-600"
            : ""
        }`}
      >
        <Layers2 className="w-5 h-5" />
        <Link
          href="/admin"
          aria-label="services"
          onClick={() => {
            if (setIsOpen) {
              setIsOpen(false);
            }
            dispatch(adminPanelActions.setadminPanelTab("categories"));
          }}
          className={`sm:hidden md:block ${
            adminPanelTab === "categories" ? "font-medium" : ""
          }`}
        >
          خدمات
        </Link>
      </div>
      <div
        className={`w-full flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer ${
          adminPanelTab === "tickets" ? "bg-gray-100 w-full text-red-600" : ""
        }`}
      >
        <MessageSquareText className="w-5 h-5" />
        <Link
          href="/admin"
          aria-label="tickets"
          onClick={() => {
            if (setIsOpen) {
              setIsOpen(false);
            }
            dispatch(adminPanelActions.setadminPanelTab("tickets"));
          }}
          className={`sm:hidden md:block ${
            adminPanelTab === "tickets" ? "font-medium" : ""
          }`}
        >
          تیکت ها
        </Link>
      </div>
      <div className="w-full flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer">
        <Heart className="w-5 h-5" />
        <Link
          href="/admin"
          onClick={() => {
            if (setIsOpen) {
              setIsOpen(false);
            }
          }}
          aria-label="liked"
          className="sm:hidden md:block"
        >
          علاقه مندی ها
        </Link>
      </div>
      <li className="w-full flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer">
        <LogOut className="w-5 h-5" />
        <button
          aria-label="exit"
          onClick={logoutHandler}
          className="sm:hidden md:block cursor-pointer"
        >
          خروج
        </button>
      </li>
    </ul>
  );
};

export default PanelSideBar;
