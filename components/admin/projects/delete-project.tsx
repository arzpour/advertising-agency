"use client";
import { useDeleteProject } from "@/apis/mutations/projects";
import { queryClient } from "@/providers/tanstack.provider";
import React from "react";
import { toast } from "sonner";
import SubmitBtn from "../global/submitBtn";

interface IDeleteProject {
  _id: string;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteProject: React.FC<IDeleteProject> = ({ _id, setDialogOpen }) => {
  const deleteProject = useDeleteProject();

  const onSubmit = async () => {
    await deleteProject.mutateAsync(_id);
    toast("پاک شد", {
      icon: "✅",
      className: "!bg-green-100 !text-green-800 !shadow-md !h-[60px]",
    });
    setDialogOpen(false);
    queryClient.invalidateQueries({ queryKey: ["get-projects"] });
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

export default DeleteProject;
