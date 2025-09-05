import { urls } from "@/utils/urls";
import { axiosInstance } from "./instance";

type getProjectsType = (_: IParams) => Promise<IProjectResDto>;
export const getProjects: getProjectsType = async ({ page, limit }) => {
  const response = await axiosInstance.get(urls.project.list, {
    params: { page, limit },
  });
  return response.data;
};

type getProjectByIdType = (id: string) => Promise<IProjectByIdResDto>;
export const getProjectById: getProjectByIdType = async (id) => {
  const response = await axiosInstance.get(urls.project.ById(id));
  return response.data;
};

type addProjectType = (data: FormData) => Promise<IProjectResDto>;
export const addProject: addProjectType = async (data) => {
  const response = await axiosInstance.post(urls.project.list, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

type deleteProjectType = (id: string) => Promise<IProjectResDto>;
export const deleteProject: deleteProjectType = async (id) => {
  const response = await axiosInstance.delete(urls.project.ById(id));
  return response.data;
};

type editProjectByIdType = (_: {
  data: FormData;
  id: string;
}) => Promise<IProjectResDto>;
export const editProjectById: editProjectByIdType = async ({ data, id }) => {
  const response = await axiosInstance.patch(urls.project.ById(id), data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

type editProjectOrderType = (
  data: IEditProjectOrderReq
) => Promise<IEditProjectOrderRes>;
export const editProjectOrder: editProjectOrderType = async (data) => {
  const response = await axiosInstance.patch(urls.project.editOrder, data);
  return response.data;
};
