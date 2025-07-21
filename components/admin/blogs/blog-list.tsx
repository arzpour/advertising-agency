"use client";
import React from "react";
import useGetBlogs from "@/hooks/useGetBlogs";
import BlogCard from "./blog-card";
import { useGetCategoryName } from "@/hooks/getCategoryName";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

const BlogList = () => {
  const {
    allblogs,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useGetBlogs();

  const { categoryMap } = useGetCategoryName();

  const { observerRef } = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  return (
    <>
      <div className="flex flex-wrap gap-8 mt-14 mb-10 justify-center items-center gap-y-10">
        {allblogs.map((el) => (
          <BlogCard key={el._id} {...el} category={categoryMap[el.category]} />
        ))}
      </div>

      {hasNextPage && (
        <div
          ref={observerRef}
          className="h-10 mt-10 flex items-center justify-center text-sm text-gray-400"
        >
          {isFetchingNextPage ? "در حال بارگذاری..." : "بارگذاری بیشتر"}
        </div>
      )}

      {!hasNextPage && !isLoading && allblogs.length === 0 && (
        <p className="text-center mt-6 text-gray-500">پروژه‌ای موجود نیست.</p>
      )}
    </>
  );
};

export default BlogList;
