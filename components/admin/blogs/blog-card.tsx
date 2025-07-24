import { sanitizeHTML } from "@/utils/sanitizeHtml";
import Image from "next/image";
import React from "react";
import { Trash, Edit } from "lucide-react";

interface IBlogCard {
  name: string;
  description: string;
  category: string;
  thumbnail: string;
}

const BlogCard: React.FC<IBlogCard> = ({
  category,
  description,
  name,
  thumbnail,
}) => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="my-4 mr-4">
          <Image
            src={`${process.env.NEXT_PUBLIC_BLOG_THUMBNAIL_URL}/${
              thumbnail ?? ""
            }`}
            alt={`project-${name}`}
            width={200}
            height={0}
            className="h-24 w-24 object-cover object-center rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <div className="flex gap- justify-between items-center">
            <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <div className="flex gap-3 justify-end items-start mr-10">
              <Edit className="w-4 h-4 text-red-500" />
              <Trash className="w-4 h-4 text-red-500" />
            </div>
          </div>
          <p
            className="mb-3 text-gray-700 dark:text-gray-400 text-sm"
            dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }}
          ></p>
          <div className="bg-[#EDF2F7] py-2 px-4 rounded-full text-xs truncate">
            #{category}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
