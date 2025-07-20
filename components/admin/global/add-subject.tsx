import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import AddProjectForm from "../projects/add-project-form";
import AddCategoryForm from "../categories/add-category-form";

interface IAddDialog {
  status: "projects" | "categories" | "blogs";
}

const AddDialog: React.FC<IAddDialog> = ({ status }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-red-500 hover:bg-red-400 text-white rounded-full px-6 cursor-pointer">
          افزودن{" "}
          {status === "projects"
            ? "پروژه"
            : status === "blogs"
            ? "وبلاگ"
            : status === "categories"
            ? "خدمات"
            : ""}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-6xl">
        <DialogHeader>
          <DialogTitle className="text-right mt-6">
            افزودن{" "}
            {status === "projects"
              ? "پروژه"
              : status === "blogs"
              ? "وبلاگ"
              : status === "categories"
              ? "خدمات"
              : ""}{" "}
            جدید
          </DialogTitle>
        </DialogHeader>
        {status === "projects" ? <AddProjectForm /> : status === "categories" ? <AddCategoryForm/> : null}
      </DialogContent>
    </Dialog>
  );
};

export default AddDialog;
