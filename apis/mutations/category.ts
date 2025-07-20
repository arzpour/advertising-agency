import { useMutation } from "@tanstack/react-query";
import { addCategory } from "../client/categories";

export const useAddCategory = () => {
  return useMutation({
    mutationKey: ["add-category"],
    mutationFn: addCategory,
  });
};
