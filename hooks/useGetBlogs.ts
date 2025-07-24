import { getBlogs } from "@/apis/client/blogs";
import { perPageLimit } from "@/utils/config";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGetBlogs = (limitCus?: number) => {
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
    queryKey: ["get-blogs"],
    queryFn: async ({ pageParam = 1 }) =>
      await getBlogs({ limit: limit, page: pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      const hasMore = lastPage.data?.blogs.length === limit;
      return hasMore ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const allblogs = data?.pages.flatMap((page) => page.data.blogs) || [];

  return {
    allblogs,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};

export default useGetBlogs;
