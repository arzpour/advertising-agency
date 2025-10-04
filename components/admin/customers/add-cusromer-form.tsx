"use client";
import React from "react";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { queryClient } from "@/providers/tanstack.provider";
import { SubmitHandler, useForm } from "react-hook-form";
import AddForm from "../global/add-subject-form";
import { useAddCustomer } from "@/apis/mutations/customer";
import { customerSchema, customerSchemaType } from "@/validations/custoer";

interface IAddCustomerForm {
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCustomerForm: React.FC<IAddCustomerForm> = ({ setDialogOpen }) => {
  const { handleSubmit, control } = useForm<customerSchemaType>({
    mode: "all",
    resolver: zodResolver(customerSchema),
  });

  const addCustomer = useAddCustomer();

  const onSubmit: SubmitHandler<customerSchemaType> = async (data) => {
    const formData = new FormData();

    formData.append("name", data.name || "");

    if (data.icon instanceof File) {
      formData.append("icon", data.icon);
    }

    try {
      await addCustomer.mutateAsync(formData);

      toast("ایجاد شد", {
        icon: "✅",
        className: "!bg-green-100 !text-green-800 !shadow-md !h-[60px]",
      });
      setDialogOpen(false);

      queryClient.invalidateQueries({ queryKey: ["get-customers"] });
    } catch (error) {
      console.log("🚀 ~ error:", error);
      setDialogOpen(false);

      toast("اطلاعات وارد شده صحیح نیست", {
        className: "!bg-red-100 !text-red-800 !shadow-md !h-[60px]",
      });
    } finally {
      setDialogOpen(false);
    }
  };

  return (
    <AddForm
      control={control}
      status="customers"
      handleSubmit={handleSubmit(onSubmit)}
      isPending={addCustomer.isPending}
    />
  );
};

export default AddCustomerForm;
