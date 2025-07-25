"use client";
import { useDeleteCategory } from "@/apis/mutations/category";
import { queryClient } from "@/providers/tanstack.provider";
import React from "react";
import { toast } from "sonner";

interface IDeleteCategory {
  _id: string;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteCategory: React.FC<IDeleteCategory> = ({ _id, setDialogOpen }) => {
  const deleteCategory = useDeleteCategory();

  const onSubmit = async () => {
    await deleteCategory.mutateAsync(_id);
    toast("پاک شد", {
      icon: "✅",
      className: "!bg-green-100 !text-green-800 !shadow-md !h-[60px]",
    });
    setDialogOpen(false);
    queryClient.invalidateQueries({ queryKey: ["get-category-list"] });
    try {
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

  return (
    <div className="flex justify-end">
      <button
        type="button"
        onClick={onSubmit}
        className="shadow-sm py-1.5 px-6 text-sm cursor-pointer font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none"
      >
        تایید
      </button>
    </div>
  );
};

export default DeleteCategory;
