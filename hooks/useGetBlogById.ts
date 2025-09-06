import { getBlogById } from "@/apis/client/blogs";
import { useQuery } from "@tanstack/react-query";

const useGetBlogById = (id: string) => {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["get-blog-by-id", id],
    queryFn: async () => {
      const res = await getBlogById(id);
      return res.data.blogById;
    },
    refetchOnWindowFocus: false,
    retry: 1,
  });

  return { data, isLoading, isSuccess };
};

export default useGetBlogById;
