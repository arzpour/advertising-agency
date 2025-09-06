import { getAllCategories } from "@/apis/client/categories";
import { perPageLimit } from "@/utils/config";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface IUseCategoryList {
  enabled?: boolean;
  limitCus?: number;
}

const useCategoryList = ({ enabled, limitCus }: IUseCategoryList) => {
  const [page, setPage] = React.useState<number>(1);

  const limit = limitCus ?? perPageLimit;

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["get-categories", page, limit],
    queryFn: async () => {
      const res = await getAllCategories({
        limit: limit,
        page,
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
