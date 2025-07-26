import { urls } from "@/utils/urls";
import { axiosInstance } from "./instance";

type getTicketsType = (_: IParams) => Promise<ITicketResDto>;
export const getTickets: getTicketsType = async ({ page, limit }) => {
  const response = await axiosInstance.get(urls.ticket, {
    params: { page, limit },
  });
  return response.data;
};

type addTicketsType = (data: ISendTicketReq) => Promise<IAddTicketResDto>;
export const addTickets: addTicketsType = async (data) => {
  const response = await axiosInstance.post(urls.ticket, data);
  return response.data;
};
