import { urls } from "@/utils/urls";
import { axiosInstance } from "./instance";

type getTicketsType = (_: IParams) => Promise<any>;
export const getTickets: getTicketsType = async ({ page, limit }) => {
  const response = await axiosInstance.get(urls.ticket, {
    params: { page, limit },
  });
  console.log("🚀 ~ getTickets ~ response:", response)
  return response.data;
};
