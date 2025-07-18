import React from "react";
import Image from "next/image";
import PanelSideBar from "@/components/admin/panel-sidebar";

const AdminPanel = () => {
  return (
    <div dir="rtl" className="bg-gray-100 max-w-1770 mx-auto h-screen">
      <div className="flex flex-col sm:flex-row">
        <div className="hidden sm:block w-20 md:w-72 bg-white shadow-lg h-svh">
          <Image
            src={"/IMG_20250717_163940_569.png"}
            alt="logo panel"
            width={200}
            height={200}
            className="mr-5 mt-3"
          />
          <PanelSideBar />
        </div>
        <div className="mx-5 sm:mx-10 w-11/12"></div>
      </div>
    </div>
  );
};

export default AdminPanel;
