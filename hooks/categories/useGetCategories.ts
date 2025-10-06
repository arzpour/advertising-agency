import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllCategories } from "../../apis/client/categories";
import { perPageLimit } from "../../utils/config";

interface IUseGetCategories {
  limitCus?: number;
  type: "project" | "blog" | "all";
}
const useGetCategories = ({ type, limitCus }: IUseGetCategories) => {
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
    queryKey: ["get-categories", limit, type],
    queryFn: async ({ pageParam = 1 }) =>
      await getAllCategories({ limit: limit, page: pageParam, type }),

    getNextPageParam: (lastPage, allPages) => {
      const categories = lastPage?.data?.categories;
      if (!categories || categories.length === 0) return undefined;

      const hasMore = categories.length === limit;
      return hasMore ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const allCategories =
    data?.pages.flatMap((page) => page.data?.categories) || [];

  return {
    allCategories,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};

export default useGetCategories;
