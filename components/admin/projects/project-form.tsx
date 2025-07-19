"use client";
import React from "react";
import { toast } from "sonner";
import { Input } from "@/components/form/input";
import { Images } from "@/components/form/images";
import { zodResolver } from "@hookform/resolvers/zod";
import useCategoryList from "@/hooks/useGetCategories";
import { Thumbnail } from "@/components/form/thumbnail";
import { useAddProject } from "@/apis/mutations/projects";
import { TextEditor } from "@/components/form/textEditor";
import { queryClient } from "@/providers/tanstack.provider";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { projectSchema, projectSchemaType } from "@/validations/project";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    <form
      dir="rtl"
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mx-auto space-y-4"
    >
      <Controller
        control={control}
        name="name"
        render={({ field, fieldState }) => (
          <Input
            type="text"
            placeholder="عنوان"
            error={fieldState.error?.message}
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="category"
        render={({ field, fieldState }) => (
          <Select
            value={field.value}
            onValueChange={(value: string) => {
              field.onChange(value);
              setSelectedCategory(value);
            }}
          >
            <SelectTrigger
              className={`w-full mt-2 text-xs border rounded-md p-2 ${
                fieldState.error ? "border-red-400" : "border-gray-400"
              }`}
            >
              <SelectValue placeholder="دسته‌بندی را انتخاب کنید" />
            </SelectTrigger>
            <SelectContent>
              {(useCategoryData?.data?.categories || []).map((item) => (
                <SelectItem key={item._id} value={item.name as string}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({ field, fieldState }) => (
          <TextEditor error={fieldState.error?.message} {...field} />
        )}
      />

      <div className="flex gap-4 mt-6">
        <Thumbnail name="thumbnail" control={control} />
        <Images name="images" control={control} />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="shadow-sm py-1.5 px-6 text-sm cursor-pointer font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none"
        >
          ایجاد
        </button>
      </div>
    </form>
  );
};

export default AddProjectForm;
