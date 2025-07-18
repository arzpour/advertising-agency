"use client";
import React from "react";
import ProjectCard from "./project-card";
import useGetProjects from "@/hooks/useGetProjects";

const ProjectList = () => {
  const { data: projectList } = useGetProjects();
  console.log("🚀 ~ Projects ~ projectList:", projectList);

  return (
    <div>
      {/* {projectList.ma} */}
      <ProjectCard />
    </div>
  );
};

export default ProjectList;
