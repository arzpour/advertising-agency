"use client";
import React from "react";
// import ProjectCard from "./project-card";
import useGetProjects from "@/hooks/useGetProjects";

const ProjectList = () => {
  const { data: projectList, isSuccess } = useGetProjects();

  const isExist =
    projectList?.data.projects.length && projectList?.data.projects.length > 0;

  return (
    <>
      {projectList?.data.projects.map((el) => (
        <div key={el} className={`${!!isSuccess && !!isExist ? "" : "hidden"}`}>
          {/* <ProjectCard /> */}
        </div>
      ))}

      {isSuccess && !isExist && <p>پروژه ای موجود نیست</p>}
    </>
  );
};

export default ProjectList;
