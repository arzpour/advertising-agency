import { getProjects } from "@/apis/client/projects";
import { perPageLimit } from "@/utils/config";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGetProjects = (limitCus?: number) => {
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
    queryKey: ["get-projects"],
    queryFn: async ({ pageParam = 1 }) =>
      await getProjects({ limit: limit, page: pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      const projects = lastPage?.data?.projects;
      if (!projects || projects.length === 0) return undefined;

      const hasMore = projects.length === limit;
      return hasMore ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  const allProjects = data?.pages.flatMap((page) => page.data.projects) || [];

  return {
    allProjects,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
    isSuccess,
  };
};

export default useGetProjects;
