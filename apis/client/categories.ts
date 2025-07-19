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
