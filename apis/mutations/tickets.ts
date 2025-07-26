import { addTickets } from "../client/tickets";
import { useMutation } from "@tanstack/react-query";

export const useAddTicket = () => {
  return useMutation({
    mutationKey: ["add-ticket"],
    mutationFn: addTickets,
  });
};
