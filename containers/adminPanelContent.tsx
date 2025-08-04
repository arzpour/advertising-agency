"use client";

import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import dynamic from "next/dynamic";

// Dynamic imports
const ProjectList = dynamic(
  () => import("@/components/admin/projects/project-list")
);
const AddProjectForm = dynamic(
  () => import("@/components/admin/projects/add-project-form")
);
const CategoryList = dynamic(
  () => import("@/components/admin/categories/category-list")
);
const TicketList = dynamic(
  () => import("@/components/admin/tickets/ticket-list")
);
const AddCategoryForm = dynamic(
  () => import("@/components/admin/categories/add-category-form")
);
const BlogList = dynamic(() => import("@/components/admin/blogs/blog-list"));
const AddBlogForm = dynamic(
  () => import("@/components/admin/blogs/add-blog-form")
);

// Constants
const TAB_CONFIG = {
  projects: {
    title: "پروژه",
    ListComponent: ProjectList,
    FormComponent: AddProjectForm,
  },
  blogs: {
    title: "بلاگ",
    ListComponent: BlogList,
    FormComponent: AddBlogForm,
  },
  categories: {
    title: "خدمات",
    ListComponent: CategoryList,
    FormComponent: AddCategoryForm,
  },
  tickets: {
    title: "تیکت",
    ListComponent: TicketList,
    FormComponent: null,
  },
} as const;

const AdminPanelContent = () => {
  const { adminPanelTab } = useAppSelector((state) => state.admin);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const tab = TAB_CONFIG[adminPanelTab as keyof typeof TAB_CONFIG];

  if (!tab) return null;

  const { title, ListComponent, FormComponent } = tab;

  return (
    <>
      <div className="mt-12 flex gap-3 justify-between items-center mx-5 lg:ml-10">
        <h3 className="text-lg font-medium">{title}</h3>

        {title !== "تیکت" && (
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-red-500 hover:bg-red-400 text-white rounded-full px-6 cursor-pointer">
                افزودن {title}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-6xl">
              <DialogHeader>
                <DialogTitle className="text-right mt-6 mb-3">
                  افزودن {title} جدید
                </DialogTitle>
              </DialogHeader>
              <FormComponent setDialogOpen={setDialogOpen} />
            </DialogContent>
          </Dialog>
        )}
      </div>

      <ListComponent />
    </>
  );
};

export default AdminPanelContent;
