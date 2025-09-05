"use client";
import React from "react";
import useGetProjects from "@/hooks/useGetProjects";
import ProjectCard, { ProjectCardSkeleton } from "./project-card";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useGetCategoryInfo } from "@/hooks/useGetCategoryInfo";
import { useEditProjectOrder } from "@/apis/mutations/projects";

const ProjectList = () => {
  const {
    allProjects,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isSuccess,
  } = useGetProjects();

  const { categoryMap } = useGetCategoryInfo();

  const { observerRef } = useInfiniteScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  });

  const [items, setItems] = React.useState<typeof allProjects>([]);
  const [draggedId, setDraggedId] = React.useState<string | null>(null);

  const editOrder = useEditProjectOrder();

  const handleDrop = async (id: string) => {
    if (!draggedId) return;

    const draggedIndex = items.findIndex((p) => p._id === draggedId);
    const droppedIndex = items.findIndex((p) => p._id === id);

    const newItems = [...items];
    const [draggedItem] = newItems.splice(draggedIndex, 1);
    newItems.splice(droppedIndex, 0, draggedItem);

    setItems(newItems);
    setDraggedId(null);

    try {
      const changedOrders = newItems
        .map((item, index) => ({
          id: item._id,
          order: index + 1,
        }))
        .filter((o, i) => o.id !== items[i]?._id);

      await editOrder.mutateAsync({ orders: changedOrders });
    } catch (error) {
      console.log("🚀 ~ handleDrop ~ error:", error);
    }
  };

  React.useEffect(() => {
    if (items.length === 0 && allProjects.length > 0) {
      setItems(allProjects);
    }
  }, [allProjects, items.length]);

  return (
    <>
      {isLoading && (
        <div className="flex flex-wrap gap-8 mt-14 mb-14 justify-center items-center gap-y-10">
          {isLoading &&
            [1, 2, 3, 4].map((el) => <ProjectCardSkeleton key={el} />)}
        </div>
      )}

      {isSuccess && allProjects.length > 0 && (
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
