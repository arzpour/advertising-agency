import AddProjectBtn from "@/components/admin/projects/add-project";
import ProjectList from "@/components/admin/projects/project-list";
import React from "react";

const Projects = () => {
  return (
    <>
      <div className="mt-12 flex gap-3 justify-between items-center mx-5 ml-10">
        <h3 className="text-lg font-medium">پروژه ها</h3>

        <AddProjectBtn />
      </div>
      <ProjectList />
    </>
  );
};

export default Projects;
