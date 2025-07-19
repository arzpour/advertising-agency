import React from "react";
import SearchInput from "../form/searchInput";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import AdminInfoCard from "./adminInfo-card";

const AdminHead = () => {
  return (
    <div className="flex gap-10 justify-between items-center">
      <SearchInput />
      <div className="flex gap-8 items-center">
        <IoMdNotificationsOutline className="w-6 h-6" />
        <div className="relative">
          <MdOutlineEmail className="w-6 h-6 text-gray-700" />
          <div className="w-2 h-2 rounded-full bg-red-500 absolute top-0 right-0"></div>
        </div>
        <AdminInfoCard />
      </div>
    </div>
  );
};

export default AdminHead;
