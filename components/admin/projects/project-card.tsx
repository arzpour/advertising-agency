import { sanitizeHTML } from "@/utils/sanitizeHtml";
import Image from "next/image";
import React from "react";
import DeleteDialog from "../global/delete-dialog";
import EditDialog from "../global/edit-dialog";

interface IProjectCard {
  name: string;
  description: string;
  category: string;
  thumbnail: string;
  _id: string;
}

const ProjectCard: React.FC<IProjectCard> = ({
  category,
  description,
  name,
  thumbnail,
  _id,
}) => {
  return (
    <div className="w-80 rounded-lg overflow-hidden bg-white hover:shadow-2xl cursor-pointer">
      <div className="h-40">
        <Image
          src={
            thumbnail
              ? `${process.env.NEXT_PUBLIC_PROJECT_THUMBNAIL_URL}/${thumbnail}`
              : "/gettyimages-2149038061-612x612.jpg"
          }
          alt={`project-${name}`}
          width={800}
          height={800}
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
          <EditDialog title="پروژه" _id={_id} />
          <DeleteDialog title="پروژه" _id={_id} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

export const ProjectCardSkeleton = () => {
  return (
    <div className="w-80 rounded-lg overflow-hidden bg-white hover:shadow-2xl cursor-pointer">
      <div className="h-40">
        <div className="h-40 w-full object-cover object-center bg-gray-200 animate-pulse mb-4"></div>
      </div>
      <div className="h-1/2 p-4">
        <div className="flex justify-between items-center">
          <div className="mb-2 font-semibold hover:underline cursor-pointer h-4 w-24 bg-gray-200 animate-pulse rounded-full"></div>
          <p className="text-gray-600 text-xs h-4 w-20 rounded-full bg-gray-200 animate-pulse"></p>
        </div>
        <p className="text-sm font-medium text-gray-700 my-3 line-clamp-2 h-4 w-40 rounded-full bg-gray-200 animate-pulse"></p>
        <div className="flex gap-2 mt-4 mb-2 justify-end items-center">
          <div className="h-4 w-10 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="h-4 w-10 rounded-full bg-gray-200 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
