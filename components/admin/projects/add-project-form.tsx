"use client";
import React from "react";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddProject } from "@/apis/mutations/projects";
import { queryClient } from "@/providers/tanstack.provider";
import { SubmitHandler, useForm } from "react-hook-form";
import { addSchema, addSchemaType } from "@/validations/project";
import AddForm from "../global/add-subject-form";
import { useAppSelector } from "@/redux/hooks";

interface IAddProjectForm {
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddProjectForm: React.FC<IAddProjectForm> = ({ setDialogOpen }) => {
  const [selectedCategory, setSelectedCategory] = React.useState("");

  const { adminPanelTab } = useAppSelector((state) => state.admin);

  const { handleSubmit, control } = useForm<addSchemaType>({
    mode: "all",
    resolver: zodResolver(addSchema),
  });

  const addProject = useAddProject();
  const { data: categoryData } = useCategoryList({
    enabled: adminPanelTab !== "categories",
    limitCus: Infinity,
  });

  const categoryId =
    categoryData?.data?.categories.find(
      (category: ICategory) => category.name === selectedCategory
    )?._id || "";

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
      await addProject.mutateAsync(formData);

      toast("ایجاد شد", {
        icon: "✅",
        className: "!bg-green-100 !text-green-800 !shadow-md !h-[60px]",
      });
      setDialogOpen(false);
      queryClient.invalidateQueries({ queryKey: ["get-projects"] });
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
      status="projects"
      setSelectedCategory={setSelectedCategory}
      categoryData={categoryData}
      handleSubmit={handleSubmit(onSubmit)}
      isPending={addProject.isPending}
    />
  );
};

export default AddProjectForm;
