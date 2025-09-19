import { useEditProject } from "@/apis/mutations/projects";
import { queryClient } from "@/providers/tanstack.provider";
import { editSchema, editSchemaType } from "@/validations/project";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import AddForm from "../global/add-subject-form";
import useGetProjectById from "@/hooks/useGetProjectById";
import { useGetCategoryInfo } from "@/hooks/useGetCategoryInfo";

interface IEditProjectForm {
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  _id: string;
}

const EditProjectForm: React.FC<IEditProjectForm> = ({
  _id,
  setDialogOpen,
}) => {
  const { data: projectData, isSuccess } = useGetProjectById(_id);

  const { categoryData, categoryId, categoryName, setSelectedCategory } =
    useGetCategoryInfo();
  const editProject = useEditProject();

  const { control, handleSubmit, reset } = useForm<editSchemaType>({
    mode: "all",
    resolver: zodResolver(editSchema),
  });

  const onSubmit: SubmitHandler<editSchemaType> = async (data) => {
    try {
      const formData = new FormData();

      if (!!data.name) {
        formData.append("name", data.name);
      }

      if (!!data.description) {
        formData.append("description", data.description);
      }

      const category =
        categoryId !== "" || !!categoryId
          ? categoryId
          : projectData?.category ?? "";

      if (!!category) {
        formData.append("category", category);
      }

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
      await editProject.mutateAsync({
        data: formData,
        id: _id,
      });

      toast("ویرایش شد", {
        icon: "✅",
        className: "!bg-green-100 !text-green-800 !shadow-md !h-[60px]",
      });
      setDialogOpen(false);
      queryClient.invalidateQueries({ queryKey: ["get-projects"] });
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
    name: projectData?.name ?? "",
    description: projectData?.description ?? "",
    categoryName: categoryName(projectData?.category ?? "") ?? "",
    thumbnail: projectData?.thumbnail ?? "",
    images: projectData?.images ?? [],
  };

  React.useEffect(() => {
    if (isSuccess && projectData) {
      reset({
        name: projectData?.name,
        description: projectData?.description,
        category: categoryName(projectData.category ?? ""),
        thumbnail: projectData?.thumbnail,
        images: projectData?.images,
      });
    }
  }, [isSuccess, projectData, reset, categoryName]);

  return (
    <AddForm
      control={control}
      status="projects"
      setSelectedCategory={setSelectedCategory}
      categoryData={categoryData}
      handleSubmit={handleSubmit(onSubmit)}
      defaultData={defaultValue}
      isPending={editProject.isPending}
    />
  );
};

export default EditProjectForm;
