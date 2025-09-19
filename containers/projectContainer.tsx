import React from "react";
import { getProjects } from "@/apis/client/projects";
import { getAllCategories } from "@/apis/client/categories";
import ProjectCategoryList from "@/components/projects/project-category-list";

export const revalidate = 1800;

const ProjectContainer = async () => {
  const projectData = await getProjects({ page: 1, limit: 10 });
  const categoryData = await getAllCategories({ page: 1, limit: 6 });

  return (
    <section
      id="projects"
      className="relative w-full sm:pb-15 bottom-16"
      dir="rtl"
    >
      <div className="container mx-auto max-w-[78rem]">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-11 sm:mb-14 max-w-sm text-center">
              <h2 className="text-gray-700 mb-3 text-xl leading-[1.208] font-bold bg-white rounded-t-xl pt-8 pb-6">
                پروژه ها
              </h2>
              <p className="text-gray-600 text-sm px-5 sm:px-0">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </p>
            </div>
          </div>
        </div>

        <ProjectCategoryList
          categories={categoryData.data.categories}
          projects={projectData.data.projects}
        />
      </div>
    </section>
  );
};

export default ProjectContainer;
