import React from "react";
import Image from "next/image";
import PanelSideBar from "@/components/admin/panel-sidebar";
import AdminHead from "@/components/admin/admin-head";
import AdminPanelContent from "@/containers/adminPanelContent";

const AdminPanel = () => {
  return (
    <div dir="rtl" className="bg-gray-100 max-w-1770 mx-auto h-screen">
      <div className="flex flex-col sm:flex-row">
        <div className="hidden sm:block w-20 md:w-72 bg-white shadow-lg h-svh">
          <Image
            src="/IMG_20250717_163940_569.png"
            alt="logo panel"
            width={200}
            height={0}
            sizes="100vw"
            className="h-auto w-4/5 mr-3 mt-3"
          />
          <PanelSideBar />
        </div>
        <div className="mx-5 sm:mx-10 w-11/12 mt-6">
          <AdminHead />
          <AdminPanelContent />
        </div>
      </div>
    </div>
  );
};

// لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.

export default AdminPanel;
