"use client";

import React from "react";
import useGetBlogs from "@/hooks/useGetBlogs";
import BlogCard from "./blog-card";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useGetCategoryInfo } from "@/hooks/useGetCategoryInfo";

const BlogList: React.FC = () => {
  const {
    allblogs,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isSuccess,
  } = useGetBlogs();

  const { categoryMap } = useGetCategoryInfo();

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-14 mb-10 justify-center items-center gap-y-10">
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
