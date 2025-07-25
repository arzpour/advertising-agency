"use client";
import { useDeleteBlog } from "@/apis/mutations/blog";
import { queryClient } from "@/providers/tanstack.provider";
import React from "react";
import { toast } from "sonner";
import SubmitBtn from "../global/submitBtn";

interface IDeleteBlog {
  _id: string;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteBlog: React.FC<IDeleteBlog> = ({ _id, setDialogOpen }) => {
  const deleteBlog = useDeleteBlog();

  const onSubmit = async () => {
    await deleteBlog.mutateAsync(_id);
    toast("پاک شد", {
      icon: "✅",
      className: "!bg-green-100 !text-green-800 !shadow-md !h-[60px]",
    });
    setDialogOpen(false);
    queryClient.invalidateQueries({ queryKey: ["get-blogs"] });
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

  return <SubmitBtn onSubmit={onSubmit} />;
};

export default DeleteBlog;
