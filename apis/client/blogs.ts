import { urls } from "@/utils/urls";
import { axiosInstance } from "./instance";

type addBlogType = (data: FormData) => Promise<IAddBlogResDto>;
export const addBlog: addBlogType = async (data) => {
  const response = await axiosInstance.post(urls.blog.list, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
