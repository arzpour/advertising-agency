// import { getCategoryById } from "@/apis/client/categories";
// import { useQuery } from "@tanstack/react-query";

// const useGetCategoryById = (id: string) => {
//   const { data, isSuccess, isLoading } = useQuery({
//     queryKey: ["get-category-by-id", id],
//     queryFn: async () => {
//       const res = await getCategoryById(id);
//       return res.data.category;
//     },
//     refetchOnWindowFocus: false,
//     retry: 1,
//   });

//   return { data, isLoading, isSuccess };
// };

// export default useGetCategoryById;
