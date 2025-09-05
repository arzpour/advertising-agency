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

type getCategoryByIdType = (id: string) => Promise<ICategoryByIdResDto>;
export const getCategoryById: getCategoryByIdType = async (id) => {
  const response = await axiosInstance.get(urls.category.ById(id));
  return response.data;
};

type addCategoryType = (data: FormData) => Promise<ICategoryByIdResDto>;
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

type editCategoryByIdType = (_: {
  data: FormData;
  id: string;
}) => Promise<ICategoryResDto>;
export const editCategoryById: editCategoryByIdType = async ({ data, id }) => {
  const response = await axiosInstance.patch(urls.category.ById(id), data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

type editCategoryOrderType = (data: IEditOrderReq) => Promise<IEditOrderRes>;
export const editCategoryOrder: editCategoryOrderType = async (data) => {
  const response = await axiosInstance.patch(urls.category.editOrder, data);
  return response.data;
};
