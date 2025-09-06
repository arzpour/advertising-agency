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
          src={
            thumbnail
              ? `${process.env.NEXT_PUBLIC_BLOG_THUMBNAIL_URL}/${thumbnail}`
              : "/gettyimages-2149038061-612x612.jpg"
          }
          alt="project"
          className="rounded-t-lg"
          width={500}
          height={500}
          loading="lazy"
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
    <div className={`relative h-60 cursor-pointer`}>
      <div className="w-full h-60 rounded-t-xl bg-gray-300 animate-pulse"></div>

      <div className="absolute h-full rounded-xl overflow-hidden whitespace-nowrap w-full top-0 bg-black opacity-45 hover:opacity-25 transition-all duration-300 ease-in-out z-20"></div>
      <div className="flex justify-between items-center">
        <div className="absolute bottom-17 right-5 z-40 text-red-500 underline line-clamp-1 h-4 w-24 bg-gray-300 animate-pulse rounded-full"></div>
        <span className="absolute bottom-17 left-3 z-40 text-gray-300 text-xs"></span>
      </div>
      <p className="absolute bottom-7 right-5 z-40 text-gray-300 truncate line-clamp-2 overflow-ellipsis h-4 w-40 rounded-full bg-gray-300 animate-pulse"></p>
    </div>
  );
};
