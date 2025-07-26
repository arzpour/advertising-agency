"use client";
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Projects from "@/containers/projects";

interface IProjectCategoryList {
  categories: ICategory[];
  projects: IProjectRes[];
}

const ProjectCategoryList: React.FC<IProjectCategoryList> = ({
  categories,
  projects,
}) => {
  const [categoryFilter, setCategoryFilter] = React.useState("all");
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const handleProject = (category: string) => {
    setCategoryFilter(category);
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="w-full flex flex-wrap justify-center">
        <div className="w-full md:px-4">
          <ul className="flex gap-2 sm:gap-4 flex-wrap justify-center mb-12 space-x-1">
            <li className="mb-1">
              <button
                onClick={() => handleProject("all")}
                className={`inline-block cursor-pointer text-sm rounded-md py-2 px-6 text-center font-medium transition-all duration-300 md:py-2 lg:px-8 ${
                  categoryFilter === "all"
                    ? "bg-red-600 text-white"
                    : "hover:bg-red-600 hover:text-white"
                }`}
              >
                همه
              </button>
            </li>
            {categories.map((el) => (
              <li className="mb-1" key={el._id}>
                <button
                  onClick={() => handleProject(el._id)}
                  className={`inline-block cursor-pointer text-sm rounded-md py-2 px-6 text-center font-medium transition-all duration-300 md:py-2 lg:px-8 ${
                    categoryFilter === el._id
                      ? "bg-red-600 text-white"
                      : "hover:bg-red-600 hover:text-white"
                  }`}
                >
                  {el.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 2xl:-left-20 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 2xl:-right-20 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
        >
          <ArrowRight />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto px-2 scrollbar-hide scroll-smooth max-w-7xl mx-auto"
        >
          <Projects
            projects={projects}
            categoryFilter={categoryFilter}
            categories={categories}
          />
        </div>{" "}
      </div>
    </>
  );
};

export default ProjectCategoryList;
