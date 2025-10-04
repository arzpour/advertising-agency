import { useInfiniteQuery } from "@tanstack/react-query";
import { perPageLimit } from "../../utils/config";
import { getAllCustomers } from "@/apis/client/customers";

const useGetCustomers = (limitCus?: number) => {
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
    queryKey: ["get-customers"],
    queryFn: async ({ pageParam = 1 }) =>
      await getAllCustomers({ limit: limit, page: pageParam }),

    getNextPageParam: (lastPage, allPages) => {
      const customers = lastPage?.data?.customers;
      if (!customers || customers.length === 0) return undefined;

      const hasMore = customers.length === limit;
      return hasMore ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const allCustomers =
    data?.pages.flatMap((page) => page.data?.customers) || [];

  return {
    allCustomers,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};

export default useGetCustomers;
