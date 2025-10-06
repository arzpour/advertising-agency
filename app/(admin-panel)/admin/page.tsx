import React, { lazy, Suspense } from "react";
import Image from "next/image";
import PanelSideBar from "@/components/admin/panel-sidebar";

const AdminHead = lazy(() => import("@/components/admin/header/admin-header"));
const AdminPanelContent = lazy(() => import("@/containers/adminPanelContent"));

const AdminPanel = () => {
  return (
    <div dir="rtl" className="bg-gray-100 max-w-1770 mx-auto">
      <div className="flex flex-col sm:flex-row h-svh">
        <div className="hidden sm:block w-20 md:w-72 sticky top-0 h-screen overflow-y-auto bg-white shadow-lg scrollbar-hide z-10">
          <Image
            src="/logohans.png"
            alt="logo panel"
            width={200}
            height={0}
            sizes="100vw"
            className="h-auto w-4/5 mr-3 mt-3 hidden md:block"
          />
          <PanelSideBar />
        </div>
        <div className="mx-5 flex-1 overflow-y-auto scrollbar-hide sm:mx-10 w-11/12 mt-6">
          <Suspense>
            <AdminHead />
            <AdminPanelContent />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
