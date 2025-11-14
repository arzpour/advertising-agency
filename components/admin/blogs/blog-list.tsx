"use client";

import React from "react";
import useGetBlogs from "@/hooks/blogs/useGetBlogs";
import BlogCard, { BlogCardSkeleton } from "./blog-card";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useGetCategoryInfo } from "@/hooks/categories/useGetCategoryInfo";
import useDragAndDrop from "@/hooks/useDragAndDrop";
import { useEditBlogOrder } from "@/apis/mutations/blog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useCategoryList from "@/hooks/categories/useGetCategoryList";

const BlogList: React.FC = () => {
  const [categoryFilter, setCategoryFilter] = React.useState<string>("all");

  const {
    allBlogs,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isSuccess,
  } = useGetBlogs();

  const { categoryMap } = useGetCategoryInfo("blog");
  const { data: categoryData } = useCategoryList({
    enabled: true,
    limitCus: 9999,
    type: "blog",
  });

  const categories = categoryData?.data?.categories || [];

  const { observerRef } = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  const editBlogOrder = useEditBlogOrder();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedBlogs = React.useMemo(() => allBlogs, [allBlogs.length]);

  const filteredBlogs = React.useMemo(() => {
    if (categoryFilter === "all") {
      return memoizedBlogs;
    }
    return memoizedBlogs.filter((blog) => blog.category === categoryFilter);
  }, [memoizedBlogs, categoryFilter]);

  const { handleDrop, setDraggedId, items, draggedId } =
    useDragAndDrop<IBlogRes>({
      getItems: filteredBlogs,
      editOrder: editBlogOrder,
    });

  return (
    <>
      {categories.length > 0 && (
        <div className="w-full flex flex-col items-center my-6">
          <Tabs
            value={categoryFilter}
            onValueChange={(value: string) => setCategoryFilter(value)}
            className="w-full flex flex-col items-center"
            dir="rtl"
          >
            <TabsList className="flex justify-center bg-gray-100 rounded-xl p-1 flex-wrap">
              <TabsTrigger
                value="all"
                className="px-4 py-2 rounded-lg text-sm data-[state=active]:bg-red-600 data-[state=active]:text-white cursor-pointer"
              >
                همه
              </TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger
                  key={category._id}
                  value={category._id}
                  className="px-4 py-2 rounded-lg text-sm data-[state=active]:bg-red-600 data-[state=active]:text-white cursor-pointer"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      )}

      {isLoading && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full my-14 justify-center items-center">
          {isLoading && [1, 2, 3, 4].map((el) => <BlogCardSkeleton key={el} />)}
        </div>
      )}

      {isSuccess && items.length > 0 && (
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
              <BlogCard {...blog} category={categoryMap[blog.category]} />
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
      {!hasNextPage && !isLoading && filteredBlogs.length === 0 && (
        <p className="mt-6 text-gray-500">
          {categoryFilter === "all"
            ? "بلاگی موجود نیست."
            : "بلاگی در این دسته‌بندی موجود نیست."}
        </p>
      )}
    </>
  );
};

export default BlogList;
