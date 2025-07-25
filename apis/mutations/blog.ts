import { useMutation } from "@tanstack/react-query";
import { addBlog, deleteBlog } from "../client/blogs";

export const useAddBlog = () => {
  return useMutation({
    mutationKey: ["add-blog"],
    mutationFn: addBlog,
  });
};

export const useDeleteBlog = () => {
  return useMutation({
    mutationKey: ["delete-blog"],
    mutationFn: deleteBlog,
  });
};
