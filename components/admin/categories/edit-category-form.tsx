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
import useGetCategoryById from "@/hooks/useGetCategoryById";
import { useEditCategory } from "@/apis/mutations/category";

interface IEditCategoryForm {
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  _id: string;
}

const EditCategoryForm: React.FC<IEditCategoryForm> = ({
  _id,
  setDialogOpen,
}) => {
  const { data: categoryData, isSuccess } = useGetCategoryById(_id);

  const editCategory = useEditCategory();

  const { control, handleSubmit, reset } = useForm<editCategorySchemaType>({
    mode: "all",
    resolver: zodResolver(editCategorySchema),
    defaultValues: {
      name: categoryData?.name,
      description: categoryData?.description,
      icon: categoryData?.icon,
    },
  });

  const onSubmit: SubmitHandler<editCategorySchemaType> = async (data) => {
    try {
      const formData = new FormData();

      if (!!data.name) {
        formData.append("name", data.name);
      }

      if (!!data.description) {
        formData.append("description", data.description);
      }

      if (data.icon instanceof File) {
        formData.append("thumbnail", data.icon);
      }

      await editCategory.mutateAsync({
        data: formData,
        id: _id,
      });

      toast("ویرایش شد", {
        icon: "✅",
        className: "!bg-green-100 !text-green-800 !shadow-md !h-[60px]",
      });
      setDialogOpen(false);
      queryClient.invalidateQueries({ queryKey: ["get-category-list"] });
    } catch (error) {
      setDialogOpen(false);

      toast("اطلاعات وارد شده صحیح نیست", {
        className: "!bg-red-100 !text-red-800 !shadow-md !h-[60px]",
      });
    } finally {
      setDialogOpen(false);
    }
  };

  const defaultValue = {
    name: categoryData?.name ?? "",
    description: categoryData?.description ?? "",
    thumbnail: categoryData?.icon ?? "",
  };

  React.useEffect(() => {
    if (isSuccess && categoryData) {
      reset({
        name: categoryData?.name,
        description: categoryData?.description,
        icon: categoryData?.icon,
      });
    }
  }, [isSuccess, categoryData, reset]);

  return (
    <AddForm
      control={control}
      status="categories"
      handleSubmit={handleSubmit(onSubmit)}
      defaultData={defaultValue}
    />
  );
};

export default EditCategoryForm;
