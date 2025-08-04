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
      <button
        onClick={() => {
          if (setIsOpen) {
            setIsOpen(false);
          }
        }}
        className="w-full flex items-center gap-3 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer"
      >
        <House className="w-5 h-5" />
        <Link href="/" className="sm:hidden md:block">
          صفحه اصلی
        </Link>
      </button>
      <button
        className={`w-full flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer ${
          adminPanelTab === "adminInfo" ? "bg-gray-100 w-full text-red-600" : ""
        }`}
        onClick={() => {
          if (setIsOpen) {
            setIsOpen(false);
          }
          dispatch(adminPanelActions.setadminPanelTab("adminInfo"));
        }}
      >
        <User className="w-5 h-5" />
        <Link
          href="/admin"
          className={`sm:hidden md:block ${
            adminPanelTab === "adminInfo" ? "font-medium" : ""
          }`}
        >
          اطلاعات کاربری
        </Link>
      </button>
      <button
        className={`w-full flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer ${
          adminPanelTab === "projects" ? "bg-gray-100 w-full text-red-600" : ""
        }`}
        onClick={() => {
          if (setIsOpen) {
            setIsOpen(false);
          }
          dispatch(adminPanelActions.setadminPanelTab("projects"));
        }}
      >
        <SquareChartGantt className="w-5 h-5" />
        <Link
          href="/admin"
          className={`sm:hidden md:block ${
            adminPanelTab === "projects" ? "font-medium" : ""
          }`}
        >
          پروژه ها
        </Link>
      </button>
      <button
        className={`w-full flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer ${
          adminPanelTab === "blogs" ? "bg-gray-100 w-full text-red-600" : ""
        }`}
        onClick={() => {
          if (setIsOpen) {
            setIsOpen(false);
          }
          dispatch(adminPanelActions.setadminPanelTab("blogs"));
        }}
      >
        <Newspaper className="w-5 h-5" />
        <Link
          href="/admin"
          className={`sm:hidden md:block ${
            adminPanelTab === "blogs" ? "font-medium" : ""
          }`}
        >
          بلاگ ها
        </Link>
      </button>
      <button
        className={`w-full flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer ${
          adminPanelTab === "categories"
            ? "bg-gray-100 w-full text-red-600"
            : ""
        }`}
        onClick={() => {
          if (setIsOpen) {
            setIsOpen(false);
          }
          dispatch(adminPanelActions.setadminPanelTab("categories"));
        }}
      >
        <Layers2 className="w-5 h-5" />
        <Link
          href="/admin"
          className={`sm:hidden md:block ${
            adminPanelTab === "categories" ? "font-medium" : ""
          }`}
        >
          خدمات
        </Link>
      </button>
      <button
        className={`w-full flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer ${
          adminPanelTab === "tickets" ? "bg-gray-100 w-full text-red-600" : ""
        }`}
        onClick={() => {
          if (setIsOpen) {
            setIsOpen(false);
          }
          dispatch(adminPanelActions.setadminPanelTab("tickets"));
        }}
      >
        <MessageSquareText className="w-5 h-5" />
        <Link
          href="/admin"
          className={`sm:hidden md:block ${
            adminPanelTab === "tickets" ? "font-medium" : ""
          }`}
        >
          تیکت ها
        </Link>
      </button>
      <button
        onClick={() => {
          if (setIsOpen) {
            setIsOpen(false);
          }
        }}
        className="w-full flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer"
      >
        <Heart className="w-5 h-5" />
        <Link href="/admin" className="sm:hidden md:block">
          علاقه مندی ها
        </Link>
      </button>
      <li className="w-full flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer">
        <LogOut className="w-5 h-5" />
        <button
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
