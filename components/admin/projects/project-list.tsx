"use client";
import React from "react";
import useGetProjects from "@/hooks/projects/useGetProjects";
import ProjectCard, { ProjectCardSkeleton } from "./project-card";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useGetCategoryInfo } from "@/hooks/categories/useGetCategoryInfo";
import { useEditProjectOrder } from "@/apis/mutations/projects";
import useDragAndDrop from "@/hooks/useDragAndDrop";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useCategoryList from "@/hooks/categories/useGetCategoryList";

const ProjectList = () => {
  const [categoryFilter, setCategoryFilter] = React.useState<string>("all");

  const {
    allProjects,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isSuccess,
  } = useGetProjects();

  const { categoryMap } = useGetCategoryInfo("project");
  const { data: categoryData } = useCategoryList({
    enabled: true,
    limitCus: 9999,
    type: "project",
  });

  const categories = categoryData?.data?.categories || [];

  const { observerRef } = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });
  const editProjectOrder = useEditProjectOrder();

  const memoizedProjects = React.useMemo(
    () => allProjects,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [allProjects.length]
  );

  const filteredProjects = React.useMemo(() => {
    if (categoryFilter === "all") {
      return memoizedProjects;
    }
    return memoizedProjects.filter(
      (project) => project.category === categoryFilter
    );
  }, [memoizedProjects, categoryFilter]);

  const { handleDrop, setDraggedId, items, draggedId } =
    useDragAndDrop<IProjectRes>({
      getItems: filteredProjects,
      editOrder: editProjectOrder,
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
        <div className="flex flex-wrap gap-8 mt-14 mb-14 justify-center items-center gap-y-10">
          {isLoading &&
            [1, 2, 3, 4].map((el) => <ProjectCardSkeleton key={el} />)}
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
              <ProjectCard {...el} category={categoryMap[el.category]} />
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
      {!hasNextPage && !isLoading && filteredProjects.length === 0 && (
        <p className="mt-6 text-gray-500">
          {categoryFilter === "all"
            ? "پروژه‌ای موجود نیست."
            : "پروژه‌ای در این دسته‌بندی موجود نیست."}
        </p>
      )}
    </>
  );
};

export default ProjectList;
