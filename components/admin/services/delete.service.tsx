"use client";
import { queryClient } from "@/providers/tanstack.provider";
import React from "react";
import { toast } from "sonner";
import SubmitBtn from "../global/submitBtn";
import { useDeleteService } from "@/apis/mutations/service";

interface IDeleteService {
  _id: string;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteService: React.FC<IDeleteService> = ({ _id, setDialogOpen }) => {
  const deleteService = useDeleteService();

  const onSubmit = async () => {
    await deleteService.mutateAsync(_id);
    toast("پاک شد", {
      icon: "✅",
      className: "!bg-green-100 !text-green-800 !shadow-md !h-[60px]",
    });
    setDialogOpen(false);
    queryClient.invalidateQueries({ queryKey: ["get-service-list"] });
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

export default DeleteService;
