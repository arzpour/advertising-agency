import { useInfiniteQuery } from "@tanstack/react-query";
import { perPageLimit } from "../utils/config";
import { getAllServices } from "@/apis/client/services";

const useGetServices = (limitCus?: number) => {
  const limit = limitCus ?? perPageLimit;

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useInfiniteQuery({
    queryKey: ["get-service-list"],
    queryFn: async ({ pageParam = 1 }) =>
      await getAllServices({ limit: limit, page: pageParam }),

    getNextPageParam: (lastPage, allPages) => {
      const services = lastPage?.data?.services;
      if (!services || services.length === 0) return undefined;

      const hasMore = services.length === limit;
      return hasMore ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const allServices = data?.pages.flatMap((page) => page.data?.services) || [];

  return {
    allServices,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};

export default useGetServices;
