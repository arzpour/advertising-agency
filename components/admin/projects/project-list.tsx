"use client";
import React from "react";
import useGetProjects from "@/hooks/useGetProjects";
import ProjectCard from "./project-card";
import { useGetCategoryName } from "@/hooks/getCategoryName";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";

const ProjectList = () => {
  const {
    allProjects,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isSuccess
  } = useGetProjects();

  const { categoryMap } = useGetCategoryName();

  const { observerRef } = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  return (
    <>
    {isSuccess && allProjects.length > 0 && (

      <div className="flex flex-wrap gap-8 mt-14 mb-10 justify-center items-center gap-y-10">
        {allProjects.map((el) => (
          <ProjectCard
            key={el._id}
            {...el}
            category={categoryMap[el.category]}
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

      {!hasNextPage && !isLoading && allProjects.length === 0 && (
        <p className="mt-6 text-gray-500">پروژه‌ای موجود نیست.</p>
      )}
    </>
  );
};

export default ProjectList;
