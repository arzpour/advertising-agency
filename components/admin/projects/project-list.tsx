"use client";
import React from "react";
import useGetProjects from "@/hooks/projects/useGetProjects";
import ProjectCard, { ProjectCardSkeleton } from "./project-card";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useGetCategoryInfo } from "@/hooks/categories/useGetCategoryInfo";
import { useEditProjectOrder } from "@/apis/mutations/projects";
import useDragAndDrop from "@/hooks/useDragAndDrop";

const ProjectList = () => {
  const {
    allProjects,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isSuccess,
  } = useGetProjects();

  const { categoryMap } = useGetCategoryInfo("project");

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

  const { handleDrop, setDraggedId, items, draggedId } =
    useDragAndDrop<IProjectRes>({
      getItems: memoizedProjects,
      editOrder: editProjectOrder,
    });

  return (
    <>
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
      {!hasNextPage && !isLoading && allProjects.length === 0 && (
        <p className="mt-6 text-gray-500">پروژه‌ای موجود نیست.</p>
      )}
    </>
  );
};

export default ProjectList;
