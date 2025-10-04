import React from "react";
import { useAppSelector } from "@/redux/hooks";

export const useGetCategoryInfo = () => {
  const { adminPanelTab } = useAppSelector((state) => state.admin);

  const [selectedCategory, setSelectedCategory] = React.useState<string>("");

  const { data: categoryData } = useCategoryList({
    limitCus: Infinity,
    enabled: adminPanelTab !== "categories",
  });

  const categoryMap = React.useMemo(() => {
    const map: Record<string, string> = {};
    categoryData?.data?.categories.forEach((category) => {
      map[category._id] = category.name;
    });
    return map;
  }, [categoryData]);

  const categoryName = React.useCallback(
    (categoryId: string): string => {
      return (
        categoryData?.data?.categories.find(
          (category) => category._id === categoryId
        )?.name ?? ""
      );
    },
    [categoryData]
  );

  const categoryId = React.useMemo(() => {
    return (
      categoryData?.data?.categories.find(
        (category: ICategory) => category.name === selectedCategory
      )?._id ?? ""
    );
  }, [categoryData, selectedCategory]);

  return {
    categoryData,
    categoryName,
    categoryId,
    selectedCategory,
    setSelectedCategory,
    categoryMap,
  };
};
