import React from "react";
import SearchInput from "../../form/searchInput";
import { Mail, Bell } from "lucide-react";
import AdminInfoCard from "../adminInfo-card";
import HamburgerMenu from "./hamburgerMenu";

const AdminHead = () => {
  return (
    <div className="flex gap-5 lg:gap-10 justify-between items-center fixed inset-x-0 md:relative bg-gray-100 w-full sm:pr-32 px-5 md:inset-auto md:px-5">
      <div className="max-w-4/5 sm:hidden">
        <HamburgerMenu />
      </div>
      <SearchInput />
      <div className="flex gap-8 items-center">
        <Bell className="w-6 h-6" />
        <div className="relative">
          <Mail className="w-6 h-6 text-gray-700" />
          <div className="w-2 h-2 rounded-full bg-red-500 absolute top-0 right-0"></div>
        </div>
        <AdminInfoCard />
      </div>
    </div>
  );
};

export default AdminHead;
