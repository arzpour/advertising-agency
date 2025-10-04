"use client";
import React from "react";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import CategoryCard, { CategoryCardSkeleton } from "./category-card";
import useDragAndDrop from "@/hooks/useDragAndDrop";
import { useEditCategoryOrder } from "@/apis/mutations/category";
import useGetCategories from "@/hooks/useGetCategories";

const CategoryList = () => {
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

  const { handleDrop, setDraggedId, items, draggedId } =
    useDragAndDrop<ICategory>({
      getItems: allCategories,
      editOrder: editCategoryOrder,
    });

  return (
    <>
      {isLoading && (
        <div className="flex flex-wrap gap-8 mt-16 mb-16 justify-center items-center gap-y-10">
          {isLoading &&
            [1, 2, 3, 4].map((el) => <CategoryCardSkeleton key={el} />)}
        </div>
      )}

      {isSuccess && allCategories.length > 0 && (
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
              <CategoryCard key={el._id} {...el} icon={el.icon ?? ""} />
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
      {!hasNextPage && !isLoading && allCategories.length === 0 && (
        <p className="mt-6 text-gray-500">دسته بندی ای موجود نیست.</p>
      )}
    </>
  );
};

export default CategoryList;
