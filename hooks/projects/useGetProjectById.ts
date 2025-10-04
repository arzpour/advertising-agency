import { getProjectById } from "@/apis/client/projects";
import { useQuery } from "@tanstack/react-query";

const useGetProjectById = (id: string) => {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["get-project-by-id", id],
    queryFn: async () => {
      const res = await getProjectById(id);
      return res.data.projectById;
    },
    refetchOnWindowFocus: false,
    retry: 1,
  });

  return { data, isLoading, isSuccess };
};

export default useGetProjectById;
