import { sanitizeHTML } from "@/utils/sanitizeHtml";
import Image from "next/image";
import React from "react";
import { Trash, Edit } from "lucide-react";
import DeleteDialog from "../global/delete-dialog";

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
    <>
      <div className="flex flex-col gap-4 items-center bg-white border border-gray-200 cursor-pointer rounded-lg shadow-sm hover:shadow-2xl md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800">
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
        <div className="flex flex-col justify-between p-4 leading-normal w-full">
          <div className="flex justify-between items-center">
            <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h5>
            <div className="flex gap-3 justify-end items-start mr-10">
              <Edit className="w-4 h-4 text-red-500 cursor-pointer" />
              <DeleteDialog title="بلاگ" _id={_id} />
            </div>
          </div>
          <p
            className="mb-3 text-gray-700 dark:text-gray-400 text-sm truncate"
            dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }}
          ></p>
          <div className="flex justify-end">
            <span className="bg-[#EDF2F7] py-2 px-4 rounded-full text-xs truncate">
              #{category}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;





