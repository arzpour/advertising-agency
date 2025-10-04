import { useMutation } from "@tanstack/react-query";
import {
  addService,
  deleteService,
  editServiceById,
  editServiceOrder,
} from "../client/services";

export const useAddService = () => {
  return useMutation({
    mutationKey: ["add-service"],
    mutationFn: addService,
  });
};

export const useDeleteService = () => {
  return useMutation({
    mutationKey: ["delete-service"],
    mutationFn: deleteService,
  });
};

export const useEditService = () => {
  return useMutation({
    mutationKey: ["edit-service"],
    mutationFn: editServiceById,
  });
};

export const useEditServiceOrder = () => {
  return useMutation({
    mutationKey: ["edit-service-order"],
    mutationFn: editServiceOrder,
  });
};
