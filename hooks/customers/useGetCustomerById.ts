import { getCustomerById } from "@/apis/client/customers";
import { useQuery } from "@tanstack/react-query";

const useGetCustomerById = (id: string) => {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["get-customer-by-id", id],
    queryFn: async () => {
      const res = await getCustomerById(id);
      return res.data.customer;
    },
    refetchOnWindowFocus: false,
    retry: 1,
  });

  return { data, isLoading, isSuccess };
};

export default useGetCustomerById;
