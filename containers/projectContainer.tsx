import React from "react";
import { getProjects } from "@/apis/client/projects";
import { getAllCategories } from "@/apis/client/categories";
import ProjectCategoryList from "@/components/projects/project-category-list";

export const revalidate = 1800;

const ProjectContainer = async () => {
  let projectData: IProjectResDto | null = null;
  let categoryData: ICategoryResDto | null = null;

  try {
    projectData = await getProjects({ page: 1, limit: 9999 });
  } catch (err) {
    console.error("🚀 ~ ProjectContainer ~ err:", err);
    // projectData = [];
  }

  try {
    categoryData = await getAllCategories({
      page: 1,
      limit: 9999,
      type: "project",
    });
  } catch (err) {
    console.error("🚀 ~ ProjectContainer ~ err:", err);
    // categoryData = [];
  }

  return (
    projectData &&
    projectData.data.projects.length > 0 && (
      <section
        id="projects"
        className="relative w-full sm:pb-4 bottom-16 scroll-mt-20"
        dir="rtl"
      >
        <div className="container mx-auto max-w-[78rem]">
          <div className="flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-3 sm:mb-6 max-w-sm text-center">
                <h2 className="text-gray-700 mb-3 text-xl leading-[1.208] font-bold bg-white rounded-t-xl pt-8 pb-6">
                  پروژه ها
                </h2>
              </div>
            </div>
          </div>

          <ProjectCategoryList
            categories={categoryData?.data.categories ?? []}
            projects={projectData.data.projects}
          />
        </div>
      </section>
    )
  );
};

export default ProjectContainer;
