import { useEditProject } from "@/apis/mutations/projects";
import { Input } from "@/components/form/input";
// import SelectBox from "@/components/form/selectbox-categories";
import { Thumbnail } from "@/components/form/thumbnail";
import useCategoryList from "@/hooks/useGetCategories";
// import useCategoryList from "@/hooks/useCategory";
// import useSubCategoryList from "@/hooks/useSubcategory";
import { queryClient } from "@/providers/tanstack.provider";
import { useAppSelector } from "@/redux/hooks";
import {
  editProjectSchema,
  editProjectSchemaType,
} from "@/validations/project";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import AddForm from "../global/add-subject-form";
import useGetProjectById from "@/hooks/useGetProjectById";

interface IEditProjectForm {
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  _id: string;
}

const EditProjectForm: React.FC<IEditProjectForm> = ({
  _id,
  setDialogOpen,
}) => {
  const { adminPanelTab } = useAppSelector((state) => state.admin);

  const { data, isSuccess } = useGetProjectById(_id);

  const { data: categoryData } = useCategoryList({
    limitCus: Infinity,
    enabled: adminPanelTab !== "categories",
  });

  const [selectedCategory, setSelectedCategory] = React.useState<string>("");

  const categoryName = categoryData?.data?.categories.find(
    (category) => category._id === data?.category
  )?.name;

  const editProject = useEditProject();

  const categoryId =
    categoryData?.data?.categories.find(
      (category) => category.name === selectedCategory
    )?._id ?? "";

  const { control, handleSubmit, reset } = useForm<editProjectSchemaType>({
    mode: "all",
    resolver: zodResolver(editProjectSchema),
    defaultValues: {
      name: data?.name,
      description: data?.description,
      category: categoryName,
      thumbnail: data?.thumbnail,
      images: data?.images,
    },
  });

  const onSubmit: SubmitHandler<editProjectSchemaType> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("category", categoryId);

      if (data.thumbnail instanceof File) {
        formData.append("thumbnail", data.thumbnail);
      }

      if (Array.isArray(data.images)) {
        data.images.forEach((image) => {
          if (image instanceof File) {
            formData.append("images", image);
          }
        });
      }
      const response = await editProject.mutateAsync({
        data: formData,
        id: _id,
      });

      toast("ویرایش شد", {
        icon: "✅",
        className: "!bg-green-100 !text-green-800 !shadow-md !h-[60px]",
      });
      setDialogOpen(false);
      queryClient.invalidateQueries({ queryKey: ["get-projects"] });
    } catch (error) {
      setDialogOpen(false);

      toast("اطلاعات وارد شده صحیح نیست", {
        className: "!bg-red-100 !text-red-800 !shadow-md !h-[60px]",
      });
    } finally {
      setDialogOpen(false);
    }
  };

  React.useEffect(() => {
    if (isSuccess && data) {
      reset({
        name: data?.name,
        description: data?.description,
        category: categoryName,
        thumbnail: data?.thumbnail,
        images: data?.images,
      });
    }
  }, [isSuccess, data, reset, categoryName]);

  const defaultValue = {
    name: data?.name ?? "",
    description: data?.description ?? "",
    categoryName: categoryName ?? "",
    thumbnail: data?.thumbnail ?? "",
    images: data?.images ?? [],
  };

  return (
    <AddForm
      control={control}
      status="projects"
      setSelectedCategory={setSelectedCategory}
      categoryData={categoryData}
      handleSubmit={handleSubmit(onSubmit)}
      defaultData={defaultValue}
    />
  );
};

export default EditProjectForm;
