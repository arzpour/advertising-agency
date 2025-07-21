import { sanitizeHTML } from "@/utils/sanitizeHtml";
import Image from "next/image";
import React from "react";

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
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_PROJECT_THUMBNAIL_URL}/${
            thumbnail ?? ""
          }`}
          alt={`project-${name}`}
          width={800}
          height={0}
          className="h-32 w-32 object-cover object-center "
        />
        {/* <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt=""> */}
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p
            className="mb-3 font-normal text-gray-700 dark:text-gray-400"
            dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }}
          ></p>
          <div className="bg-[#EDF2F7] p-4 rounded-full">#{category}</div>
        </div>
      </a>
    </>
  );
};

export default BlogCard;
