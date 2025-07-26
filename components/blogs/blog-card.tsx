import { sanitizeHTML } from "@/utils/sanitizeHtml";
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
  width,
}) => {
  return (
    <div className={`relative ${width ? width : "w-xl"} h-60 cursor-pointer`}>
      <Image
        src={`${process.env.NEXT_PUBLIC_BLOG_THUMBNAIL_URL}/${thumbnail}`}
        alt={`image-${name}`}
        className="w-full h-60 rounded-xl"
        width={500}
        height={500}
      />

      <div className="absolute h-full rounded-xl overflow-hidden whitespace-nowrap w-full top-0 bg-black opacity-45 hover:opacity-25 transition-all duration-300 ease-in-out z-20"></div>
      <div className="flex justify-between items-center">
        <h4 className="absolute bottom-17 right-5 z-40 text-red-500 underline line-clamp-1">
          {name}
        </h4>
        <span className="absolute bottom-17 left-3 z-40 text-gray-300 text-xs">
          {updatedAt ?? createdAt}
        </span>
      </div>
      <p
        className="absolute bottom-7 right-5 z-40 text-gray-300 truncate line-clamp-2 overflow-ellipsis"
        dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }}
      ></p>
    </div>
  );
};

export default BlogCard;
