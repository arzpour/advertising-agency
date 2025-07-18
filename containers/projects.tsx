import ProjectList from "@/components/admin/projects/project-list";
import React from "react";

const Projects = () => {
  return (
    <>
      <div className="mt-12 flex gap-3 justify-between items-center mx-5 ml-10">
        <h3 className="text-lg font-medium">پروژه ها</h3>
        <button className="bg-red-500 text-white px-5 py-1.5 rounded-full">
          افزودن پروژه
        </button>
      </div>
      <ProjectList />
    </>
  );
};

export default Projects;
