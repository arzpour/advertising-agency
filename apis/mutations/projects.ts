import { useMutation } from "@tanstack/react-query";
import { addProject } from "../client/projects";

export const useAddProject = () => {
  return useMutation({
    mutationKey: ["add-project"],
    mutationFn: addProject,
  });
};
