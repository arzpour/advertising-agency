import { sanitizeHTML } from "@/utils/sanitizeHtml";
import { toPersianDate } from "@/utils/toPersianDate";
import Image from "next/image";
import React from "react";

interface IBlogCard {
  thumbnail: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  width?: string;
}

const BlogCard: React.FC<IBlogCard> = ({
  thumbnail,
  description,
  createdAt,
  updatedAt,
  name,
}) => {
  return (
    <div className="rounded-lg bg-white shadow-lg w-full mx-5 sm:mx-0 sm:w-72">
      <div className="relative overflow-hidden bg-cover bg-no-repeat cursor-pointer">
        <Image
          src={`${process.env.NEXT_PUBLIC_BLOG_THUMBNAIL_URL}/${thumbnail}`}
          alt="project"
          className="rounded-t-lg"
          width={500}
          height={500}
        />
        <div className="absolute h-full w-full top-0 bg-black opacity-40 hover:opacity-20 transition-all duration-300 z-20"></div>
      </div>

      <div className="px-6 py-5 text-surface dark:text-white">
        <div className="flex justify-between items-center">
          <h5 className="mb-2 text-sm text-gray-800 font-medium truncate line-clamp-1">
            {name}
          </h5>
          <p className="mb-0.5 text-xs text-gray-600">
            {" "}
            {toPersianDate(updatedAt) ?? toPersianDate(createdAt)}
          </p>
        </div>

        <p
          className="mb-0.5 text-xs text-gray-600"
          dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }}
        ></p>
      </div>
    </div>
  );
};

export default BlogCard;

export const BlogCardSkeleton = () => {
  return (
    <div
      className={`rounded-lg bg-white shadow-lg w-full mx-5 sm:mx-0 sm:w-80 skeletooon h-fit`}
    >
      <div className="relative overflow-hidden bg-cover bg-no-repeat cursor-pointer">
        <div className="h-52 w-full bg-gray-100 animate-pulse rounded-t-md"></div>
        <div className="absolute h-full w-full top-0 bg-black opacity-40 hover:opacity-20 transition-all duration-300 z-20"></div>
      </div>

      <div className="px-6 py-10 text-surface dark:text-white">
        <div className="flex justify-between items-center gap-4 mb-4">
          <div className="mb-2 text-sm text-gray-800 font-medium truncate line-clamp-1 h-4 w-24 rounded-full bg-gray-300 animate-pulse"></div>
          <p className="mb-0.5 text-xs text-gray-600 h-4 w-14 rounded-full bg-gray-300 animate-pulse">
            {" "}
          </p>
        </div>

        <p className="mb-0.5 text-xs text-gray-600 h-4 w-48 rounded-full bg-gray-300 animate-pulse"></p>
      </div>
    </div>
  );
};
