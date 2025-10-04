"use client";
import { queryClient } from "@/providers/tanstack.provider";
import React from "react";
import { toast } from "sonner";
import SubmitBtn from "../global/submitBtn";
import { useDeleteCustomer } from "@/apis/mutations/customer";

interface IDeleteCustomer {
  _id: string;
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteCustomer: React.FC<IDeleteCustomer> = ({ _id, setDialogOpen }) => {
  const deleteCustomer = useDeleteCustomer();

  const onSubmit = async () => {
    try {
      await deleteCustomer.mutateAsync(_id);
      toast("پاک شد", {
        icon: "✅",
        className: "!bg-green-100 !text-green-800 !shadow-md !h-[60px]",
      });
      setDialogOpen(false);
      queryClient.invalidateQueries({ queryKey: ["get-customers"] });
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

export default DeleteCustomer;
