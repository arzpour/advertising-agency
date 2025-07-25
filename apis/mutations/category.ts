import { useMutation } from "@tanstack/react-query";
import { addCategory, deleteCategory } from "../client/categories";

export const useAddCategory = () => {
  return useMutation({
    mutationKey: ["add-category"],
    mutationFn: addCategory,
  });
};

export const useDeleteCategory = () => {
  return useMutation({
    mutationKey: ["delete-category"],
    mutationFn: deleteCategory,
  });
};
