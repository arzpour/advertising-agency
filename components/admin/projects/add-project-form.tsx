"use client";
import React from "react";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import useCategoryList from "@/hooks/useGetCategories";
import { useAddProject } from "@/apis/mutations/projects";
import { queryClient } from "@/providers/tanstack.provider";
import { SubmitHandler, useForm } from "react-hook-form";
import { projectSchema, projectSchemaType } from "@/validations/project";
import AddForm from "../global/add-subject-form";
import { useAppSelector } from "@/redux/hooks";

const AddProjectForm = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("");

  const { adminPanelTab } = useAppSelector((state) => state.admin);

  const { handleSubmit, control } = useForm<projectSchemaType>({
    mode: "all",
    resolver: zodResolver(projectSchema),
  });

  const addProject = useAddProject();
  const { data: useCategoryData } = useCategoryList({
    enabled: adminPanelTab === "categories",
    limitCus: Infinity,
  });

  const categoryId =
    useCategoryData?.data?.categories.find(
      (category: ICategory) => category.name === selectedCategory
    )?._id || "";

  const onSubmit: SubmitHandler<projectSchemaType> = async (data) => {
    console.log(
      "🚀 ~ constonSubmit:SubmitHandler<projectSchemaType>= ~ data:",
      data
    );
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
      queryClient.invalidateQueries({ queryKey: ["get-projects"] });
    } catch (error) {
      console.log(
        "🚀 ~ constonSubmit:SubmitHandler<blogSchemaType>= ~ error:",
        error
      );
      toast("اطلاعات وارد شده صحیح نیست", {
        className: "!bg-red-100 !text-red-800 !shadow-md !h-[60px]",
      });

      // errorHandler(error as AxiosError<IError>);
    }
  };

  return (
    <AddForm
      control={control}
      status="projects"
      setSelectedCategory={setSelectedCategory}
      useCategoryData={useCategoryData}
      handleSubmit={handleSubmit(onSubmit)}
    />
  );
};

export default AddProjectForm;
