import { getProjects } from "@/apis/client/projects";
import { perPageLimit } from "@/utils/config";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const useGetProjects = (limitCus?: number) => {
  const [page, setPage] = React.useState<number>(1);
  const [allProjects, setAllProjects] = React.useState<IProjectRes[]>([]);
  const [hasMore, setHasMore] = React.useState(true);

  const limit = limitCus ?? perPageLimit;

  const { data, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ["get-projects", limit, page],
    queryFn: async () => {
      return await getProjects({
        limit: limit,
        page,
      });
    },
    placeholderData: (previousData) => previousData,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  React.useEffect(() => {
    if (data?.data.projects) {
      setAllProjects((prev) => [...prev, ...data.data.projects]);
      if (data.data.projects.length < limit) setHasMore(false);
    }
  }, [data]);

  React.useEffect(() => {
    if (!error || !isError) return;
    // errorHandler(error as AxiosError<IError>);
  }, [error, isError]);

  return {
    data,
    isLoading,
    isSuccess,
    setPage,
    page,
    setAllProjects,
    allProjects,
    setHasMore,
    hasMore,
  };
};

export default useGetProjects;
