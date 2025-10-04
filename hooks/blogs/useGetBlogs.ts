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
      const blogs = lastPage?.data?.blogs;
      if (!blogs || blogs.length === 0) return undefined;

      const hasMore = blogs.length === limit;
      return hasMore ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const allBlogs = data?.pages.flatMap((page) => page.data.blogs) || [];

  return {
    allBlogs,
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
