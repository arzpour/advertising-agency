"use client";
import { useDeleteCategory } from "@/apis/mutations/category";
import { queryClient } from "@/providers/tanstack.provider";
import React from "react";
import { toast } from "sonner";
import SubmitBtn from "../global/submitBtn";

interface IDeleteCategory {
  _id: string;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteCategory: React.FC<IDeleteCategory> = ({ _id, setDialogOpen }) => {
  const deleteCategory = useDeleteCategory();

  const onSubmit = async () => {
    try {
      await deleteCategory.mutateAsync(_id);
      toast("پاک شد", {
        icon: "✅",
        className: "!bg-green-100 !text-green-800 !shadow-md !h-[60px]",
      });
      setDialogOpen(false);
      queryClient.invalidateQueries({ queryKey: ["get-category-list"] });
      queryClient.invalidateQueries({ queryKey: ["get-categories"] });
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error);
      setDialogOpen(false);

      toast("مشکلی رخ داده است", {
        className: "!bg-red-100 !text-red-800 !shadow-md !h-[60px]",
      });
    } finally {
      setDialogOpen(false);
    }
  };

  return <SubmitBtn onSubmit={onSubmit} />;
};

export default DeleteCategory;
