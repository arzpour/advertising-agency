"use client";

import React from "react";
import useGetBlogs from "@/hooks/useGetBlogs";
import BlogCard, { BlogCardSkeleton } from "./blog-card";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useGetCategoryInfo } from "@/hooks/useGetCategoryInfo";
import useDragAndDrop from "@/hooks/useDragAndDrop";
import { useEditBlogOrder } from "@/apis/mutations/blog";

const BlogList: React.FC = () => {
  const {
    allBlogs,
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

  const editBlogOrder = useEditBlogOrder();

  const { handleDrop, setDraggedId, items, draggedId } =
    useDragAndDrop<IBlogRes>({
      getItems: allBlogs,
      editOrder: editBlogOrder,
    });

  if (!isLoading && allBlogs.length === 0) {
    return <p className="mt-6 text-gray-500">بلاگی موجود نیست.</p>;
  }

  return (
    <>
      {isLoading && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full my-14 justify-center items-center">
          {isLoading && [1, 2, 3, 4].map((el) => <BlogCardSkeleton key={el} />)}
        </div>
      )}

      {isSuccess && allBlogs.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mt-14 mb-10 justify-center items-center gap-y-10">
          {items.map((blog) => (
            <div
              key={blog._id}
              draggable
              onDragStart={() => setDraggedId(blog._id)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(blog._id)}
              className={`cursor-move transition-transform duration-200 ${
                draggedId === blog._id ? "scale-105 shadow-2xl z-50" : ""
              }`}
            >
              <BlogCard {...blog} category={categoryMap[blog.category]} />{" "}
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
    </>
  );
};

export default BlogList;
