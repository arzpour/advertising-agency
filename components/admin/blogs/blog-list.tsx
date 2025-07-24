"use client";

import React from "react";
import useGetBlogs from "@/hooks/useGetBlogs";
import BlogCard from "./blog-card";
import { useGetCategoryName } from "@/hooks/getCategoryName";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

const BlogList: React.FC = () => {
  const {
    allblogs,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isSuccess,
  } = useGetBlogs();

  const { categoryMap } = useGetCategoryName();

  const { observerRef } = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  if (!isLoading && allblogs.length === 0) {
    return <p className="mt-6 text-gray-500">بلاگی موجود نیست.</p>;
  }

  return (
    <>
      {isSuccess && allblogs.length > 0 && (
        <div className="flex flex-wrap gap-8 mt-14 mb-10 justify-center items-center gap-y-10">
          {allblogs.map((blog) => (
            <BlogCard
              key={blog._id}
              {...blog}
              category={categoryMap[blog.category]}
            />
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
    </>
  );
};

export default BlogList;
