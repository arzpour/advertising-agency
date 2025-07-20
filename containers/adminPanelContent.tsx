"use client";
import React from "react";
import { useAppSelector } from "@/redux/hooks";
import AddDialog from "@/components/admin/global/add-subject";
import ProjectList from "@/components/admin/projects/project-list";

const AdminPanelContent = () => {
  const { adminPanelTab } = useAppSelector((state) => state.admin);

  const showAddButtonTabs = ["projects", "blogs", "categories"] as const;
  const shouldShowAddDialog = showAddButtonTabs.includes(
    adminPanelTab as "projects" | "categories" | "blogs"
  );

  return (
    <>
      {shouldShowAddDialog && (
        <div className="mt-12 flex gap-3 justify-between items-center ml-10">
          <h3 className="text-lg font-medium">
            {adminPanelTab === "projects"
              ? "پروژه"
              : adminPanelTab === "blogs"
              ? "وبلاگ"
              : adminPanelTab === "categories"
              ? "خدمات"
              : ""}
          </h3>
          <AddDialog
            status={adminPanelTab as "projects" | "categories" | "blogs"}
          />
        </div>
      )}

      <ProjectList />
    </>
  );
};

export default AdminPanelContent;
