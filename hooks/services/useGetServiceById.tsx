import { getServiceById } from "@/apis/client/services";
import { useQuery } from "@tanstack/react-query";

const useGetServiceById = (id: string) => {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["get-service-by-id", id],
    queryFn: async () => {
      const res = await getServiceById(id);
      return res.data.service;
    },
    refetchOnWindowFocus: false,
    retry: 1,
  });

  return { data, isLoading, isSuccess };
};

export default useGetServiceById;
