import React from "react";
import SearchInput from "../search/searchInput";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import AdminInfoCard from "./adminInfo-card";

const AdminHead = () => {
  return (
    <div className="flex gap-10 justify-between items-center">
      <SearchInput />
      <div className="flex gap-6 items-center">
        <div className="relative">
          <MdOutlineEmail className="w-6 h-6 text-gray-700" />
          <div className="w-2 h-2 rounded-full bg-red-500 absolute top-0 -right-1"></div>
        </div>
        <IoMdNotificationsOutline className="w-6 h-6" />
        <AdminInfoCard />
      </div>
    </div>
  );
};

export default AdminHead;
