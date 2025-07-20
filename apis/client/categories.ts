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

type addCategoryType = (data: FormData) => Promise<IAddCategoryResDto>;
export const addCategory: addCategoryType = async (data) => {
  const response = await axiosInstance.post(urls.category.list, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
