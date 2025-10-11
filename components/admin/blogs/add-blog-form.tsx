"use client";
import React from "react";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { queryClient } from "@/providers/tanstack.provider";
import { SubmitHandler, useForm } from "react-hook-form";
import { addSchema, addSchemaType } from "@/validations/project";
import AddForm from "../global/add-subject-form";
import { useAppSelector } from "@/redux/hooks";
import { useAddBlog } from "@/apis/mutations/blog";
import useCategoryList from "@/hooks/categories/useGetCategoryList";

interface IAddBlogForm {
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddBlogForm: React.FC<IAddBlogForm> = ({ setDialogOpen }) => {
  const [selectedCategory, setSelectedCategory] = React.useState("");

  const { adminPanelTab } = useAppSelector((state) => state.admin);

  const { handleSubmit, control } = useForm<addSchemaType>({
    mode: "all",
    resolver: zodResolver(addSchema),
  });

  const addBlog = useAddBlog();
  const { data: categoryData } = useCategoryList({
    enabled: adminPanelTab !== "categories",
    limitCus: 9999,
    type: "blog",
  });

  const categoryId =
    categoryData?.data?.categories.find(
      (category: ICategory) => category.name === selectedCategory
    )?._id ?? "";

  const onSubmit: SubmitHandler<addSchemaType> = async (data) => {
    const formData = new FormData();

    formData.append("name", data.name || "");
    formData.append("description", data.description || "");
    formData.append("category", categoryId);

    if (data.thumbnail instanceof File) {
      formData.append("thumbnail", data.thumbnail);
    }

    if (Array.isArray(data.images)) {
      data.images.forEach((image: File) => {
        if (image instanceof File) {
          formData.append("images", image);
        }
      });
    }

    try {
      await addBlog.mutateAsync(formData);

      toast("ایجاد شد", {
        icon: "✅",
        className: "!bg-green-100 !text-green-800 !shadow-md !h-[60px]",
      });
      setDialogOpen(false);
      queryClient.invalidateQueries({ queryKey: ["get-blogs"] });
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
      status="blogs"
      setSelectedCategory={setSelectedCategory}
      categoryData={categoryData}
      handleSubmit={handleSubmit(onSubmit)}
      isPending={addBlog.isPending}
    />
  );
};

export default AddBlogForm;
