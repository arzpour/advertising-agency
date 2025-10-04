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
  Server,
  Building2,
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
    <ul className="font-medium mt-4 space-y-3 w-full scrollbar-hide relative">
      <button
        onClick={() => {
          if (setIsOpen) {
            setIsOpen(false);
          }
        }}
        className="w-full flex items-center gap-3 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer tooltip"
      >
        <House className="w-5 h-5" />
        <span className="tooltipText">صفحه اصلی</span>
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
      </button>
      <button
        className={`w-full flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer tooltip ${
          adminPanelTab === "adminInfo" ? "bg-gray-100 w-full text-red-600" : ""
        }`}
        onClick={() => {
          if (setIsOpen) {
            setIsOpen(false);
          }
          dispatch(adminPanelActions.setAdminPanelTab("adminInfo"));
        }}
        aria-label="user-info"
      >
        <User className="w-5 h-5" />
        <span className="tooltipText">اطلاعات کاربری</span>
        <Link
          href="/admin"
          onClick={() => {
            if (setIsOpen) {
              setIsOpen(false);
            }
            dispatch(adminPanelActions.setAdminPanelTab("adminInfo"));
          }}
          aria-label="user-info"
          className={`sm:hidden md:block ${
            adminPanelTab === "adminInfo" ? "font-medium" : ""
          }`}
        >
          اطلاعات کاربری
        </Link>
      </button>
      <button
        className={`w-full flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer tooltip ${
          adminPanelTab === "projects" ? "bg-gray-100 w-full text-red-600" : ""
        }`}
        aria-label="projects"
        onClick={() => {
          if (setIsOpen) {
            setIsOpen(false);
          }
          dispatch(adminPanelActions.setAdminPanelTab("projects"));
        }}
      >
        <SquareChartGantt className="w-5 h-5" />
        <span className="tooltipText lg:hidden">پروژه ها</span>
        <Link
          href="/admin"
          aria-label="projects"
          onClick={() => {
            if (setIsOpen) {
              setIsOpen(false);
            }
            dispatch(adminPanelActions.setAdminPanelTab("projects"));
          }}
          className={`sm:hidden md:block ${
            adminPanelTab === "projects" ? "font-medium" : ""
          }`}
        >
          پروژه ها
        </Link>
      </button>
      <button
        className={`w-full flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer tooltip ${
          adminPanelTab === "blogs" ? "bg-gray-100 w-full text-red-600" : ""
        }`}
        aria-label="blogs"
        onClick={() => {
          if (setIsOpen) {
            setIsOpen(false);
          }
          dispatch(adminPanelActions.setAdminPanelTab("blogs"));
        }}
      >
        <Newspaper className="w-5 h-5" />
        <span className="tooltipText lg:hidden">بلاگ ها</span>
        <Link
          href="/admin"
          aria-label="blogs"
          onClick={() => {
            if (setIsOpen) {
              setIsOpen(false);
            }
            dispatch(adminPanelActions.setAdminPanelTab("blogs"));
          }}
          className={`sm:hidden md:block ${
            adminPanelTab === "blogs" ? "font-medium" : ""
          }`}
        >
          بلاگ ها
        </Link>
      </button>
      <button
        className={`w-full flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer tooltip ${
          adminPanelTab === "services" ? "bg-gray-100 w-full text-red-600" : ""
        }`}
        aria-label="services"
        onClick={() => {
          if (setIsOpen) {
            setIsOpen(false);
          }
          dispatch(adminPanelActions.setAdminPanelTab("services"));
        }}
      >
        <Layers2 className="w-5 h-5" />
        <span className="tooltipText lg:hidden">خدمات</span>
        <Link
          href="/admin"
          aria-label="services"
          onClick={() => {
            if (setIsOpen) {
              setIsOpen(false);
            }
            dispatch(adminPanelActions.setAdminPanelTab("services"));
          }}
          className={`sm:hidden md:block ${
            adminPanelTab === "services" ? "font-medium" : ""
          }`}
        >
          خدمات
        </Link>
      </button>
      <button
        className={`w-full flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer tooltip ${
          adminPanelTab === "tickets" ? "bg-gray-100 w-full text-red-600" : ""
        }`}
        aria-label="tickets"
        onClick={() => {
          if (setIsOpen) {
            setIsOpen(false);
          }
          dispatch(adminPanelActions.setAdminPanelTab("tickets"));
        }}
      >
        <MessageSquareText className="w-5 h-5" />
        <span className="tooltipText lg:hidden">تیکت ها</span>
        <Link
          href="/admin"
          aria-label="tickets"
          onClick={() => {
            if (setIsOpen) {
              setIsOpen(false);
            }
            dispatch(adminPanelActions.setAdminPanelTab("tickets"));
          }}
          className={`sm:hidden md:block ${
            adminPanelTab === "tickets" ? "font-medium" : ""
          }`}
        >
          تیکت ها
        </Link>
      </button>
      <button
        className={`w-full flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer tooltip ${
          adminPanelTab === "categories"
            ? "bg-gray-100 w-full text-red-600"
            : ""
        }`}
        aria-label="categories"
        onClick={() => {
          if (setIsOpen) {
            setIsOpen(false);
          }
          dispatch(adminPanelActions.setAdminPanelTab("categories"));
        }}
      >
        <Server className="w-5 h-5" />
        <span className="tooltipText lg:hidden">دسته بندی ها</span>
        <Link
          href="/admin"
          aria-label="categories"
          onClick={() => {
            if (setIsOpen) {
              setIsOpen(false);
            }
            dispatch(adminPanelActions.setAdminPanelTab("categories"));
          }}
          className={`sm:hidden md:block ${
            adminPanelTab === "categories" ? "font-medium" : ""
          }`}
        >
          دسته بندی ها
        </Link>
      </button>
      <button
        className={`w-full flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer tooltip ${
          adminPanelTab === "customers" ? "bg-gray-100 w-full text-red-600" : ""
        }`}
        aria-label="customers"
        onClick={() => {
          if (setIsOpen) {
            setIsOpen(false);
          }
          dispatch(adminPanelActions.setAdminPanelTab("customers"));
        }}
      >
        <Building2 className="w-5 h-5" />
        <span className="tooltipText lg:hidden">مشتریان</span>
        <Link
          href="/admin"
          aria-label="customers"
          onClick={() => {
            if (setIsOpen) {
              setIsOpen(false);
            }
            dispatch(adminPanelActions.setAdminPanelTab("customers"));
          }}
          className={`sm:hidden md:block ${
            adminPanelTab === "customers" ? "font-medium" : ""
          }`}
        >
          مشتریان
        </Link>
      </button>
      <button
        onClick={() => {
          if (setIsOpen) {
            setIsOpen(false);
          }
        }}
        className="w-full flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer tooltip"
      >
        <Heart className="w-5 h-5" />
        <span className="tooltipText lg:hidden">علاقه مندی ها</span>
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
      </button>
      <li className="w-full flex items-center gap-4 p-2 pr-5 py-3 hover:text-red-500 cursor-pointer tooltip">
        <LogOut className="w-5 h-5" />
        <span className="tooltipText lg:hidden">خروج</span>
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
