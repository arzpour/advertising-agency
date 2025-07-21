import Image from "next/image";
import React from "react";

interface IProjectCard {
  name: string;
  description: string;
  category: string;
  thumbnail: string;
}

const ProjectCard: React.FC<IProjectCard> = ({
  category,
  description,
  name,
  thumbnail,
}) => {
  return (
    <div className="w-80 rounded-lg overflow-hidden bg-white hover:shadow-2xl ">
      <div className="h-40">
        <Image
          src={`${process.env.NEXT_PUBLIC_PROJECT_THUMBNAIL_URL}/${
            thumbnail ?? ""
          }`}
          alt={`project-${name}`}
          width={800}
          height={0}
          className="h-40 w-full object-cover object-center "
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex justify-between items-center">
          <h3 className="mb-2 font-semibold hover:underline cursor-pointer">
            {name}
          </h3>
          <p className="text-gray-600 text-xs">{category}</p>
        </div>
        <p className="text-sm font-bold text-gray-700 my-3 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
