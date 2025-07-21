"use client";
import React from "react";
import useGetProjects from "@/hooks/useGetProjects";
import ProjectCard from "./project-card";
import useCategoryList from "@/hooks/useGetCategories";
import { useAppSelector } from "@/redux/hooks";

const ProjectList = () => {
  const { adminPanelTab } = useAppSelector((state) => state.admin);
  const observerRef = React.useRef<HTMLDivElement>(null);

  const { setPage, hasMore, allProjects } = useGetProjects();

  const { data: categoryData } = useCategoryList({
    enabled: adminPanelTab !== "categories",
    limitCus: Infinity,
  });

  const categoryMap = React.useMemo(() => {
    const map: Record<string, string> = {};
    categoryData?.data?.categories.forEach((category: ICategory) => {
      map[category._id] = category.name;
    });
    return map;
  }, [categoryData]);

  React.useEffect(() => {
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      {
        threshold: 1,
      }
    );

    const currentElement = observerRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [hasMore]);

  return (
    <>
      <div className="flex flex-wrap gap-8 mt-14 mb-10 justify-center items-center gap-y-10">
        {allProjects.map((el) => (
          <ProjectCard
            key={el._id}
            {...el}
            category={categoryMap[el.category]}
          />
        ))}
      </div>

      {/* {isSuccess && !isExist && <p className="mt-4">پروژه ای موجود نیست</p>} */}

      {hasMore && (
        <div
          ref={observerRef}
          className="h-10 mt-10 flex justify-center items-center text-sm text-gray-400"
        >
          در حال بارگذاری...
        </div>
      )}
    </>
  );
};

export default ProjectList;
