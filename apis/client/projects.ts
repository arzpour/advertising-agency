import { urls } from "@/utils/urls";
import { axiosInstance } from "./instance";

type getProjectsType = (_: IParams) => Promise<IProjectResDto>;
export const getProjects: getProjectsType = async ({ page, limit }) => {
  const response = await axiosInstance.get(urls.project.list, {
    params: { page, limit },
  });
  return response.data;
};

type getProjectByIdType = (id: string) => Promise<IProjectRes>;
export const getProjectById: getProjectByIdType = async (id) => {
  const response = await axiosInstance.get(urls.project.ById(id));
  return response.data;
};

type addProjectType = (data: FormData) => Promise<IProjectRes>;
export const addProject: addProjectType = async (data) => {
  const response = await axiosInstance.post(urls.project.list, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
