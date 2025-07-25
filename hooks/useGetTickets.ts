import { useInfiniteQuery } from "@tanstack/react-query";
import { perPageLimit } from "../utils/config";
import { getTickets } from "@/apis/client/tickets";

const useGetTickets = (limitCus?: number) => {
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
    queryKey: ["get-tickets"],
    queryFn: async ({ pageParam = 1 }) =>
      await getTickets({ limit: limit, page: pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      const tickets = lastPage?.data?.tickets;
      if (!tickets || tickets.length === 0) return undefined;

      const hasMore = tickets.length === limit;
      return hasMore ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const allTickets = data?.pages.flatMap((page) => page.data?.tickets) || [];

  return {
    allTickets,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};

export default useGetTickets;
