import { urls } from "@/utils/urls";
import { axiosInstance } from "./instance";

type getBlogsType = (_: IParams) => Promise<IBlogResDto>;
export const getBlogs: getBlogsType = async ({ page, limit }) => {
  const response = await axiosInstance.get(urls.blog.list, {
    params: { page, limit },
  });
  return response.data;
};

type addBlogType = (data: FormData) => Promise<IAddBlogResDto>;
export const addBlog: addBlogType = async (data) => {
  const response = await axiosInstance.post(urls.blog.list, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
