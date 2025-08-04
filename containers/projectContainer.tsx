import React from "react";
import { getProjects } from "@/apis/client/projects";
import { getAllCategories } from "@/apis/client/categories";
import ProjectCategoryList from "@/components/projects/project-category-list";

const ProjectContainer = async () => {
  const projectData = await getProjects({ page: 1, limit: 10 });
  const categoryData = await getAllCategories({ page: 1, limit: 6 });

  return (
    <section id="projects" className="relative w-full py-5" dir="rtl">
      <div className="container mx-auto max-w-[78rem]">
        <div className="flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-14 max-w-md text-center">
              <h2 className="text-gray-700 mb-3 text-xl md:text-3xl leading-[1.208] font-bold">
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
