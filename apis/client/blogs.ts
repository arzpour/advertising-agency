import { urls } from "@/utils/urls";
import { axiosInstance } from "./instance";

type getBlogsType = (_: IParams) => Promise<IBlogResDto>;
export const getBlogs: getBlogsType = async ({ page, limit }) => {
  const response = await axiosInstance.get(urls.blog.list, {
    params: { page, limit },
  });
  return response.data;
};

type addBlogType = (data: FormData) => Promise<IBlogResDto>;
export const addBlog: addBlogType = async (data) => {
  const response = await axiosInstance.post(urls.blog.list, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

type deleteBlogType = (id: string) => Promise<IBlogResDto>;
export const deleteBlog: deleteBlogType = async (id) => {
  const response = await axiosInstance.delete(urls.blog.ById(id));
  return response.data;
};
