"use client";
import React from "react";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { queryClient } from "@/providers/tanstack.provider";
import { SubmitHandler, useForm } from "react-hook-form";
import AddForm from "../global/add-subject-form";
import { categorySchema, categorySchemaType } from "@/validations/category";
import { useAddCustomer } from "@/apis/mutations/customer";

interface IAddCustomerForm {
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCustomerForm: React.FC<IAddCustomerForm> = ({ setDialogOpen }) => {
  const [selectedType, setSelectedType] = React.useState("");

  const { handleSubmit, control } = useForm<customerSchemaType>({
    mode: "all",
    resolver: zodResolver(categorySchema),
  });

  const addCustomer = useAddCustomer();

  const onSubmit: SubmitHandler<categorySchemaType> = async (data) => {
    const formData = new FormData();

    formData.append("name", data.name || "");
    formData.append("type", selectedType || "");

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

      queryClient.invalidateQueries({ queryKey: ["get-category-list"] });
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
      status="categories"
      handleSubmit={handleSubmit(onSubmit)}
      isPending={addCategory.isPending}
      setSelectedType={setSelectedType}
    />
  );
};

export default AddCustomerForm;
