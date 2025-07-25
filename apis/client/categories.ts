import { urls } from "@/utils/urls";
import { axiosInstance } from "./instance";

type getAllCategoriesType = (_: IParams) => Promise<ICategoryResDto>;
export const getAllCategories: getAllCategoriesType = async ({
  page,
  limit,
}) => {
  const response = await axiosInstance.get(urls.category.list, {
    params: { page, limit },
  });
  return response.data;
};

type addCategoryType = (data: FormData) => Promise<ICategoryResDto>;
export const addCategory: addCategoryType = async (data) => {
  const response = await axiosInstance.post(urls.category.list, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

type deleteCategoryType = (id: string) => Promise<ICategoryResDto>;
export const deleteCategory: deleteCategoryType = async (id) => {
  const response = await axiosInstance.delete(urls.category.ById(id));
  return response.data;
};
