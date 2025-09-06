import Link from "next/link";
import React from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { sanitizeHTML } from "@/utils/sanitizeHtml";

interface IProjectCard {
  category: string;
  thumbnail: string;
  description: string;
  name: string;
  categories: ICategory[];
}

const ProjectCard: React.FC<IProjectCard> = ({
  category,
  thumbnail,
  description,
  name,
  categories,
}) => {
  const categoryName =
    categories.find((item) => item._id === category)?.name ?? "نامشخص";

  return (
    <div className="rounded-lg bg-white shadow-lg w-72 rounded-t-lg">
      <div className="relative overflow-hidden bg-cover bg-no-repeat cursor-pointer rounded-t-lg">
        <Image
          src={
            thumbnail
              ? `${process.env.NEXT_PUBLIC_PROJECT_THUMBNAIL_URL}/${thumbnail}`
              : "/gettyimages-2149038061-612x612.jpg"
          }
          alt="project"
          className="rounded-t-lg"
          width={500}
          height={500}
        />
        <div className="absolute h-full w-full top-0 bg-black opacity-40 hover:opacity-20 transition-all duration-300 z-20"></div>

        <Link href="#">
          <div className="absolute inset-0 h-full w-full bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </Link>
      </div>

      <div className="px-6 py-5 text-surface dark:text-white">
        <div className="flex justify-between items-center">
          <h5 className="mb-2 text-sm text-gray-800 font-medium truncate line-clamp-1">
            {name}
          </h5>
          <p className="mb-0.5 text-xs text-gray-600">{categoryName}</p>
        </div>

        <p
          className="mb-0.5 text-xs text-gray-600"
          dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }}
        ></p>

        <Link
          href="#"
          className="flex gap-2 items-center justify-end pt-2 text-xs font-medium text-red-500"
        >
          مشاهده بیشتر
          <ArrowLeft />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

export const ProjectCardSkeleton = () => {
  return (
    <div className="rounded-lg bg-white shadow-md w-72">
      <div className="relative overflow-hidden bg-cover bg-no-repeat cursor-pointer">
        <div className="rounded-t-lg bg-gray-300 animate-pulse h-32 w-full"></div>
        <div className="absolute h-full w-full top-0 bg-gray-400 opacity-40 hover:opacity-20 transition-all duration-300 z-20"></div>

        <div className="absolute inset-0 h-full w-full bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
      </div>

      <div className="px-6 py-5 text-surface dark:text-white">
        <div className="flex justify-between items-center">
          <h5 className="mb-2 text-sm text-gray-800 h-4 w-16 font-medium truncate line-clamp-1 rounded-full bg-gray-300 animate-pulse"></h5>
          <p className="mb-0.5 text-xs text-gray-600 h-4 w-20 rounded-full bg-gray-300 animate-pulse"></p>
        </div>

        <p className="mb-0.5 text-xs text-gray-600 h-4 w-20 rounded-full bg-gray-300 animate-pulse"></p>
      </div>
    </div>
  );
};
