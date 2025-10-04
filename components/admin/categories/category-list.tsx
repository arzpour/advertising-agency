"use client";
import React from "react";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import useDragAndDrop from "@/hooks/useDragAndDrop";
import { useEditCategoryOrder } from "@/apis/mutations/category";
import useGetCategories from "@/hooks/categories/useGetCategories";
import GlobalCard, { GlobalCardSkeleton } from "../global/global-card";

interface ICategoryList {
  filterType?: CategoryTabsType;
}

const CategoryList: React.FC<ICategoryList> = ({ filterType = "all" }) => {
  const {
    allCategories,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isSuccess,
  } = useGetCategories();

  const { observerRef } = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  const editCategoryOrder = useEditCategoryOrder();

  const filteredCategories =
    filterType === "all"
      ? allCategories
      : allCategories.filter((item) => item.type === filterType);

  const { handleDrop, setDraggedId, items, draggedId, setItems } =
    useDragAndDrop<ICategory>({
      getItems: filteredCategories,
      editOrder: editCategoryOrder,
    });

  React.useEffect(() => {
    setItems(filteredCategories);
  }, [filteredCategories, setItems]);

  return (
    <>
      {isLoading && (
        <div className="flex flex-wrap gap-8 mt-16 mb-16 justify-center items-center gap-y-10">
          {isLoading &&
            [1, 2, 3, 4].map((el) => <GlobalCardSkeleton key={el} />)}
        </div>
      )}

      {isSuccess && items.length > 0 && (
        <div className="flex flex-wrap gap-8 mt-14 mb-10 justify-center items-center gap-y-10">
          {items.map((el) => (
            <div
              key={el._id}
              draggable
              onDragStart={() => setDraggedId(el._id)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(el._id)}
              className={`cursor-move transition-transform duration-200 ${
                draggedId === el._id ? "scale-105 shadow-2xl z-50" : ""
              }`}
            >
              <GlobalCard
                key={el._id}
                {...el}
                icon={el.icon ?? ""}
                status="category"
              />
            </div>
          ))}
        </div>
      )}

      {hasNextPage && (
        <div
          ref={observerRef}
          className="h-10 mt-10 flex items-center justify-center text-sm text-gray-400"
        >
          {isFetchingNextPage ? "در حال بارگذاری..." : "بارگذاری بیشتر"}
        </div>
      )}
      {!hasNextPage && !isLoading && filteredCategories.length === 0 && (
        <p className="mt-6 text-gray-500 text-right text-sm">
          دسته بندی ای موجود نیست.
        </p>
      )}
    </>
  );
};

export default CategoryList;
