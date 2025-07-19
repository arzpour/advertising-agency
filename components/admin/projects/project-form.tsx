"use client";
import { queryClient } from "@/providers/tanstack.provider";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useAddProject } from "@/apis/mutations/projects";
import { projectSchema, projectSchemaType } from "@/validations/project";
import useCategoryList from "@/hooks/useGetCategories";

const AddProjectForm: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("");

  const { handleSubmit, control } = useForm<projectSchemaType>({
    mode: "all",
    resolver: zodResolver(projectSchema),
  });

  const addProject = useAddProject();
  const { data: useCategoryData } = useCategoryList(Infinity);

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
      console.log("🚀 ~ onSubmit: ~ error:", error);
      toast("اطلاعات وارد شده صحیح نیست", {
        className: "!bg-red-100 !text-red-800 !shadow-md !h-[60px]",
      });

      // errorHandler(error as AxiosError<IError>);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full mx-auto">
      <div className="flex gap-4 items-center mb-8"></div>

      <div className="my-4">
        <button
          type="submit"
          className="shadow-sm py-1.5 px-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-400 focus:outline-none"
        >
          ایجاد
        </button>
      </div>
    </form>
  );
};

export default AddProjectForm;
