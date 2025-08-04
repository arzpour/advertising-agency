"use client";
import React from "react";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import CategoryCard, { CategoryCardSkeleton } from "./category-card";
import useGetCategories from "@/hooks/useGetCategoryList";

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
          {allCategories.map((el) => (
            <CategoryCard key={el._id} {...el} icon={el.icon ?? ""} />
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
