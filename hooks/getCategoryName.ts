import React from "react";
import useCategoryList from "./useGetCategories";
import { useAppSelector } from "@/redux/hooks";

export const useGetCategoryName = () => {
  const { adminPanelTab } = useAppSelector((state) => state.admin);

  const { data: categoryData } = useCategoryList({
    enabled: adminPanelTab !== "categories",
    limitCus: Infinity,
  });

  const categoryMap = React.useMemo(() => {
    const map: Record<string, string> = {};
    categoryData?.data?.categories.forEach((category: ICategory) => {
      map[category._id] = category.name;
    });
    return map;
  }, [categoryData]);

  return { categoryMap };
};
