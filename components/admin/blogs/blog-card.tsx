import { sanitizeHTML } from "@/utils/sanitizeHtml";
import Image from "next/image";
import React from "react";
import DeleteDialog from "../global/delete-dialog";
import EditDialog from "../global/edit-dialog";

interface IBlogCard {
  name: string;
  description: string;
  category: string;
  thumbnail: string;
  _id: string;
}

const BlogCard: React.FC<IBlogCard> = ({
  category,
  description,
  name,
  thumbnail,
  _id,
}) => {
  return (
    <div className="flex flex-col gap-4 items-center bg-white border border-gray-200 cursor-pointer rounded-lg shadow-sm hover:shadow-2xl md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800">
      <div className="my-4 mr-4">
        <Image
          src={
            thumbnail
              ? `${process.env.NEXT_PUBLIC_BLOG_THUMBNAIL_URL}/${thumbnail}`
              : "/gettyimages-2149038061-612x612.jpg"
          }
          alt={`project-${name}`}
          width={200}
          height={200}
          className="h-24 w-24 object-cover object-center rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal w-full">
        <div className="flex justify-between items-center">
          <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white whitespace-normal break-words">
            {name}
          </h5>
          <div className="flex gap-3 justify-end items-start mr-10">
            <EditDialog title="بلاگ" _id={_id} />
            <DeleteDialog title="بلاگ" _id={_id} />
          </div>
        </div>
        <p
          className="mb-3 text-gray-700 dark:text-gray-400 text-sm truncate whitespace-normal break-words"
          dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }}
        ></p>
        {!!category && (
          <div className="flex justify-end">
            <span className="bg-[#EDF2F7] py-2 px-4 rounded-full text-xs truncate">
              #{category}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;

export const BlogCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 items-center bg-white border border-gray-200 cursor-pointer rounded-lg shadow-sm hover:shadow-2xl md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800">
      <div className="w-36">
        <div className="h-32 w-36 bg-gray-200 animate-pulse object-cover object-center rounded-md"></div>
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal w-full">
        <div className="flex justify-between items-center">
          <div className="mb-2 tracking-tight h-4 w-24 bg-gray-200 animate-pulse rounded-full"></div>
          <div className="flex gap-2 justify-end items-start mr-10">
            <div className="h-4 w-8 rounded-full bg-gray-200 animate-pulse"></div>
            <div className="h-4 w-8 rounded-full bg-gray-200 animate-pulse"></div>
          </div>
        </div>
        <p className="text-sm truncate my-1 h-4 w-40 rounded-full bg-gray-200 animate-pulse"></p>
        <div className="flex justify-end">
          <span className="py-2 px-4 rounded-full text-xs truncate h-4 w-28 bg-gray-200 animate-pulse"></span>
        </div>
      </div>
    </div>
  );
};
