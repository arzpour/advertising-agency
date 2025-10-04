import { urls } from "@/utils/urls";
import { axiosInstance } from "./instance";

type getAllCustomersType = (_: IParams) => Promise<ICustomerResDto>;
export const getAllCustomers: getAllCustomersType = async ({ page, limit }) => {
  const response = await axiosInstance.get(urls.customer.list, {
    params: { page, limit },
  });
  return response.data;
};

type getCustomerByIdType = (id: string) => Promise<ICustomerByIdResDto>;
export const getCustomerById: getCustomerByIdType = async (id) => {
  const response = await axiosInstance.get(urls.customer.ById(id));
  return response.data;
};

type addCustomerType = (data: FormData) => Promise<ICustomerByIdResDto>;
export const addCustomer: addCustomerType = async (data) => {
  const response = await axiosInstance.post(urls.customer.list, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

type deleteCustomerType = (id: string) => Promise<ICustomerResDto>;
export const deleteCustomer: deleteCustomerType = async (id) => {
  const response = await axiosInstance.delete(urls.customer.ById(id));
  return response.data;
};

type editCustomerByIdType = (_: {
  data: FormData;
  id: string;
}) => Promise<ICustomerResDto>;
export const editCustomerById: editCustomerByIdType = async ({ data, id }) => {
  const response = await axiosInstance.patch(urls.customer.ById(id), data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

type editCustomerOrderType = (data: IEditOrderReq) => Promise<IEditOrderRes>;
export const editCustomerOrder: editCustomerOrderType = async (data) => {
  const response = await axiosInstance.patch(urls.customer.editOrder, data);
  return response.data;
};
