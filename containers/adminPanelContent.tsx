"use client";
import React, { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import ProjectList from "@/components/admin/projects/project-list";
import AddProjectForm from "@/components/admin/projects/add-project-form";
import AddCategoryForm from "@/components/admin/categories/add-category-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import AddBlogForm from "@/components/admin/blogs/add-blog-form";
import BlogList from "@/components/admin/blogs/blog-list";

const AdminPanelContent = () => {
  const { adminPanelTab } = useAppSelector((state) => state.admin);
  const [dialogOpen, setDialogOpen] = useState(false);

  const showAddButtonTabs = ["projects", "blogs", "categories"] as const;
  const shouldShowAddDialog = showAddButtonTabs.includes(
    adminPanelTab as (typeof showAddButtonTabs)[number]
  );

  const getDialogTitle = () => {
    switch (adminPanelTab) {
      case "projects":
        return "پروژه";
      case "blogs":
        return "وبلاگ";
      case "categories":
        return "خدمات";
      default:
        return "";
    }
  };

  const renderDialogContent = () => {
    if (adminPanelTab === "projects")
      return <AddProjectForm setDialogOpen={setDialogOpen} />;
    if (adminPanelTab === "categories")
      return <AddCategoryForm setDialogOpen={setDialogOpen} />;
    if (adminPanelTab === "blogs")
      return <AddBlogForm setDialogOpen={setDialogOpen} />;
    return null;
  };

  const renderLists = () => {
    if (adminPanelTab === "projects") return <ProjectList />;
    if (adminPanelTab === "categories") return null;
    if (adminPanelTab === "blogs") return <BlogList />;
    return null;
  };

  return (
    <>
      {shouldShowAddDialog && (
        <div className="mt-12 flex gap-3 justify-between items-center ml-10">
          <h3 className="text-lg font-medium">{getDialogTitle()}</h3>

          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-red-500 hover:bg-red-400 text-white rounded-full px-6 cursor-pointer">
                افزودن {getDialogTitle()}
              </Button>
            </DialogTrigger>

            <DialogContent className="max-w-6xl">
              <DialogHeader>
                <DialogTitle className="text-right mt-6">
                  افزودن {getDialogTitle()} جدید
                </DialogTitle>
              </DialogHeader>
              {renderDialogContent()}
            </DialogContent>
          </Dialog>
        </div>
      )}

      {renderLists()}
    </>
  );
};

export default AdminPanelContent;
