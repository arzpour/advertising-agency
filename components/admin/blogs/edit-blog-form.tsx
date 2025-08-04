import { queryClient } from "@/providers/tanstack.provider";
import { editSchema, editSchemaType } from "@/validations/project";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import AddForm from "../global/add-subject-form";
import useGetBlogById from "@/hooks/useGetBlogById";
import { useEditBlog } from "@/apis/mutations/blog";
import { useGetCategoryInfo } from "@/hooks/useGetCategoryInfo";

interface IEditBlogForm {
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  _id: string;
}

const EditBlogForm: React.FC<IEditBlogForm> = ({ _id, setDialogOpen }) => {
  const { data: blogData, isSuccess } = useGetBlogById(_id);

  const { categoryData, categoryId, categoryName, setSelectedCategory } =
    useGetCategoryInfo();

  const editBlog = useEditBlog();

  const { control, handleSubmit, reset } = useForm<editSchemaType>({
    mode: "all",
    resolver: zodResolver(editSchema),
    defaultValues: {
      name: blogData?.name,
      description: blogData?.description,
      category: categoryName(blogData?.category ?? ""),
      thumbnail: blogData?.thumbnail,
      images: blogData?.images,
    },
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
          : blogData?.category ?? "";

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

      await editBlog.mutateAsync({
        data: formData,
        id: _id,
      });

      toast("ویرایش شد", {
        icon: "✅",
        className: "!bg-green-100 !text-green-800 !shadow-md !h-[60px]",
      });
      setDialogOpen(false);
      queryClient.invalidateQueries({ queryKey: ["get-blogs"] });
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
    name: blogData?.name ?? "",
    description: blogData?.description ?? "",
    categoryName: categoryName(blogData?.category ?? "") ?? "",
    thumbnail: blogData?.thumbnail ?? "",
    images: blogData?.images ?? [],
  };
  console.log("🚀 ~ EditBlogForm ~ defaultValue:", defaultValue);

  React.useEffect(() => {
    if (isSuccess && blogData) {
      reset({
        name: blogData?.name,
        description: blogData?.description,
        category: categoryName(blogData.category ?? ""),
        thumbnail: blogData?.thumbnail,
        images: blogData?.images,
      });
    }
  }, [isSuccess, blogData, reset, categoryName]);

  return (
    <AddForm
      control={control}
      status="blogs"
      setSelectedCategory={setSelectedCategory}
      categoryData={categoryData}
      handleSubmit={handleSubmit(onSubmit)}
      defaultData={defaultValue}
    />
  );
};

export default EditBlogForm;
