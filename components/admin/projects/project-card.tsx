import { sanitizeHTML } from "@/utils/sanitizeHtml";
import Image from "next/image";
import React from "react";
import { Trash, Edit } from "lucide-react";

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
        <p
          className="text-sm font-medium text-gray-700 my-3 line-clamp-2"
          dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }}
        ></p>
        <div className="flex gap-3 mt-6 mb-2 justify-end items-center">
          <Edit className="w-4 h-4 text-red-500" />
          <Trash className="w-4 h-4 text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
