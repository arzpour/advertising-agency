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
          src={`${process.env.NEXT_PUBLIC_PROJECT_THUMBNAIL_URL}/${
            thumbnail ?? ""
          }`}
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
