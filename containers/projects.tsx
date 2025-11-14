import ProjectCard from "@/components/projects/project-card";
import React from "react";

interface IProjectList {
  projects: IProjectRes[];
  categories: ICategory[];
  categoryFilter: string;
}

const Projects: React.FC<IProjectList> = ({
  projects,
  categoryFilter,
  categories,
}) => {
  const filteredProjects =
    categoryFilter === "all"
      ? projects
      : projects.filter((project) => project.category === categoryFilter);

  return (
    <div className="flex gap-4">
      {filteredProjects.length > 0 ? (
        filteredProjects.map((item, index) => (
          <ProjectCard
            key={index}
            thumbnail={item.thumbnail}
            category={item.category}
            description={item.description}
            name={item.name}
            categories={categories}
            _id={item._id}
          />
        ))
      ) : (
        <p>پروژه ای در این زیرمجموعه موجود نیست</p>
      )}
    </div>
  );
};

export default Projects;
