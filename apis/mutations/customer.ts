import { useMutation } from "@tanstack/react-query";
import {
  addCustomer,
  deleteCustomer,
  editCustomerById,
  editCustomerOrder,
} from "../client/customers";

export const useAddCustomer = () => {
  return useMutation({
    mutationKey: ["add-customer"],
    mutationFn: addCustomer,
  });
};

export const useDeleteCustomer = () => {
  return useMutation({
    mutationKey: ["delete-customer"],
    mutationFn: deleteCustomer,
  });
};

export const useEditCustomer = () => {
  return useMutation({
    mutationKey: ["edit-customer"],
    mutationFn: editCustomerById,
  });
};

export const useEditCustomerOrder = () => {
  return useMutation({
    mutationKey: ["edit-customer-order"],
    mutationFn: editCustomerOrder,
  });
};
