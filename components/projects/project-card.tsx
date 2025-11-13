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
  _id: string;
}

const ProjectCard: React.FC<IProjectCard> = ({
  category,
  thumbnail,
  description,
  name,
  categories,
  _id,
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
          width={300}
          height={200}
          loading="lazy"
        />

        <Link href={`/projects/${_id}`} aria-label="project"></Link>
      </div>

      <div className="px-6 py-5 text-surface dark:text-white">
        <div className="flex justify-between items-center">
          <h5 className="mb-2 text-sm text-gray-800 font-medium truncate line-clamp-1 whitespace-normal break-words">
            {name}
          </h5>
          <p className="mb-0.5 text-xs text-gray-600">{categoryName}</p>
        </div>

        <p
          className="mb-0.5 text-xs text-gray-600 whitespace-normal break-words"
          dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }}
        ></p>

        <Link
          href={`/projects/${_id}`}
          aria-label="more"
          className="flex gap-2 items-center justify-end pt-2 text-xs font-medium text-red-500 hover:text-red-600 transition-colors"
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
    <div className="rounded-lg bg-white shadow-secondary-1 w-72">
      <div className="relative overflow-hidden bg-cover bg-no-repeat cursor-pointer rounded-lg">
        <div className="rounded-t-lg bg-gray-300 animate-pulse h-32 w-full rounded-lg"></div>
        <div className="absolute h-full w-full top-0 bg-gray-400 opacity-40 hover:opacity-20 transition-all duration-300 z-20"></div>

        <div className="absolute inset-0 h-full w-full bg-gray-400 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
      </div>

      <div className="px-6 py-5 text-surface dark:text-white">
        <div className="flex justify-between items-center">
          <h5 className="mb-2 text-sm h-4 w-16 font-medium truncate line-clamp-1 rounded-full bg-gray-300 animate-pulse"></h5>
          <p className="mb-0.5 text-xs text-gray-600 h-4 w-20 rounded-full bg-gray-300 animate-pulse"></p>
        </div>

        <p className="mb-0.5 text-xs text-gray-600 h-4 w-20 rounded-full bg-gray-300 animate-pulse"></p>
      </div>
    </div>
  );
};
