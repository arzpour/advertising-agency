import { getProjectById } from "@/apis/client/projects";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const useGetProjectById = (id: string) => {
  const { data, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ["get-project-by-id", id],
    queryFn: async () => {
      const res = await getProjectById(id);
      return res.data.projectById;
    },
    refetchOnWindowFocus: false,
    retry: 1,
  });

  React.useEffect(() => {
    if (!error || !isError) return;
    // errorHandler(error as AxiosError<IError>);
  }, [error, isError]);
  return { data, isLoading, isSuccess };
};

export default useGetProjectById;
