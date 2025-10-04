import { urls } from "@/utils/urls";
import { axiosInstance } from "./instance";

type getAllServicesType = (_: IParams) => Promise<IServiceResDto>;
export const getAllServices: getAllServicesType = async ({ page, limit }) => {
  const response = await axiosInstance.get(urls.service.list, {
    params: { page, limit },
  });
  return response.data;
};

type getServiceByIdType = (id: string) => Promise<IServiceByIdResDto>;
export const getServiceById: getServiceByIdType = async (id) => {
  const response = await axiosInstance.get(urls.service.ById(id));
  return response.data;
};

type addServiceType = (data: FormData) => Promise<IServiceByIdResDto>;
export const addService: addServiceType = async (data) => {
  const response = await axiosInstance.post(urls.service.list, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

type deleteServiceType = (id: string) => Promise<IServiceResDto>;
export const deleteService: deleteServiceType = async (id) => {
  const response = await axiosInstance.delete(urls.service.ById(id));
  return response.data;
};

type editServiceByIdType = (_: {
  data: FormData;
  id: string;
}) => Promise<IServiceResDto>;
export const editServiceById: editServiceByIdType = async ({ data, id }) => {
  const response = await axiosInstance.patch(urls.service.ById(id), data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

type editServiceOrderType = (data: IEditOrderReq) => Promise<IEditOrderRes>;
export const editServiceOrder: editServiceOrderType = async (data) => {
  const response = await axiosInstance.patch(urls.service.editOrder, data);
  return response.data;
};
