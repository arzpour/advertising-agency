import { queryClient } from "@/providers/tanstack.provider";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import AddForm from "../global/add-subject-form";
import {
  editCategorySchema,
  editCategorySchemaType,
} from "@/validations/category";
import useGetCustomerById from "@/hooks/customers/useGetCustomerById";
import { useEditCustomer } from "@/apis/mutations/customer";

interface IEditCustomerForm {
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  _id: string;
}

const EditCustomerForm: React.FC<IEditCustomerForm> = ({
  _id,
  setDialogOpen,
}) => {
  const { data: customerData, isSuccess } = useGetCustomerById(_id);

  const editCustomer = useEditCustomer();

  const { control, handleSubmit, reset } = useForm<editCategorySchemaType>({
    mode: "all",
    resolver: zodResolver(editCategorySchema),
    defaultValues: {
      name: customerData?.name,
      icon: customerData?.icon,
    },
  });

  const onSubmit: SubmitHandler<editCategorySchemaType> = async (data) => {
    try {
      const formData = new FormData();

      if (data.name) {
        formData.append("name", data.name);
      }

      if (data.icon instanceof File) {
        formData.append("icon", data.icon);
      }

      await editCustomer.mutateAsync({
        data: formData,
        id: _id,
      });

      toast("ویرایش شد", {
        icon: "✅",
        className: "!bg-green-100 !text-green-800 !shadow-md !h-[60px]",
      });
      setDialogOpen(false);
      queryClient.invalidateQueries({ queryKey: ["get-customers"] });
    } catch {
      setDialogOpen(false);

      toast("اطلاعات وارد شده صحیح نیست", {
        className: "!bg-red-100 !text-red-800 !shadow-md !h-[60px]",
      });
    } finally {
      setDialogOpen(false);
    }
  };

  const defaultValue = {
    name: customerData?.name ?? "",
    icon: customerData?.icon ?? "",
  };

  React.useEffect(() => {
    if (isSuccess && customerData) {
      reset({
        name: customerData?.name,
        icon: customerData?.icon,
      });
    }
  }, [isSuccess, customerData, reset]);

  return (
    <AddForm
      control={control}
      status="customers"
      handleSubmit={handleSubmit(onSubmit)}
      defaultData={defaultValue}
      isPending={editCustomer.isPending}
    />
  );
};

export default EditCustomerForm;
