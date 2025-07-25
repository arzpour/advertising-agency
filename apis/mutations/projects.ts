import { useMutation } from "@tanstack/react-query";
import { addProject, deleteProject, editProjectById } from "../client/projects";

export const useAddProject = () => {
  return useMutation({
    mutationKey: ["add-project"],
    mutationFn: addProject,
  });
};

export const useDeleteProject = () => {
  return useMutation({
    mutationKey: ["delete-project"],
    mutationFn: deleteProject,
  });
};

export const useEditProject = () => {
  return useMutation({
    mutationKey: ["edit-project"],
    mutationFn: editProjectById,
  });
};
