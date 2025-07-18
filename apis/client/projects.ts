import { urls } from "@/utils/urls";
import { axiosInstance } from "./instance";

type getProjectsType = (_: IParams) => Promise<IProjectResDto>;
export const getProjects: getProjectsType = async ({ page, limit }) => {
  const response = await axiosInstance.get(urls.project.list, {
    params: { page, limit },
  });
  return response.data;
};
