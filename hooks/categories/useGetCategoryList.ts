import { getAllCategories } from "@/apis/client/categories";
import { perPageLimit } from "@/utils/config";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface IUseCategoryList {
  enabled?: boolean;
  limitCus?: number;
  type: "project" | "blog";
}

const useCategoryList = ({ enabled, limitCus, type }: IUseCategoryList) => {
  const [page, setPage] = React.useState<number>(1);

  const limit = limitCus ?? perPageLimit;

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["get-category-list", page, limit, type],
    queryFn: async () => {
      const res = await getAllCategories({
        limit: limit,
        page,
        type,
      });
      return res;
    },
    refetchOnWindowFocus: false,
    retry: 1,
    enabled,
  });

  return { data, isLoading, isSuccess, setPage, page };
};

export default useCategoryList;
