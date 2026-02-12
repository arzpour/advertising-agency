import { getImageSrc } from "@/utils/getImageSrc";
import { sanitizeHTML } from "@/utils/sanitizeHtml";
// import { toPersianDate } from "@/utils/toPersianDate";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IBlogCard {
  thumbnail: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  _id: string;
}

const BlogCard: React.FC<IBlogCard> = ({
  thumbnail,
  description,
  // createdAt,
  // updatedAt,
  name,
  _id,
}) => {
  return (
    <Link href={`/blogs/${_id}`} className="block w-full">
      <div className="rounded-lg bg-white shadow-lg mx-15 sm:mx-0 sm:w-72 hover:shadow-xl transition-shadow">
        <div className="relative overflow-hidden bg-cover bg-no-repeat cursor-pointer">
          <Image
            src={getImageSrc(
              thumbnail,
              process.env.NEXT_PUBLIC_BLOG_THUMBNAIL_URL ?? ""
            )}
            alt="project"
            className="rounded-t-lg h-48"
            width={1500}
            height={1500}
            loading="lazy"
            quality={90}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 288px"
          />
        </div>

        <div className="px-6 py-5 text-surface dark:text-white">
          <div className="flex justify-between items-center">
            <h5 className="mb-2 text-sm text-gray-800 font-medium truncate line-clamp-1 whitespace-normal">
              {name}
            </h5>
            {/* <p className="mb-0.5 text-xs text-gray-600 whitespace-normal break-words">
              {" "}
              {toPersianDate(updatedAt) ?? toPersianDate(createdAt)}
            </p> */}
          </div>

          <div
            className="mb-0.5 text-xs text-gray-600 line-clamp-4"
            dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }}
          ></div>

          <Link
            href={`/blogs/${_id}`}
            aria-label="more"
            className="flex gap-2 items-center justify-end pt-2 text-xs font-medium text-red-500 hover:text-red-600 transition-colors"
          >
            مشاهده بیشتر
            <ArrowLeft />
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

// export const BlogCardSkeleton = () => {
//   return (
//     <div className="h-60 bg-gray-400 animate-pulse cursor-pointer">
//       <div className="w-full h-60 rounded-t-xl bg-gray-300 animate-pulse"></div>

//       {/* <div className="absolute h-full rounded-xl overflow-hidden whitespace-nowrap w-full top-0 bg-black opacity-45 hover:opacity-25 transition-all duration-300 ease-in-out z-20"></div> */}
//       <div className="flex justify-between items-center">
//         <div className="z-40 text-red-500 underline line-clamp-1 h-4 w-24 bg-gray-300 animate-pulse rounded-full"></div>
//         <span className="z-40 text-gray-300 text-xs"></span>
//       </div>
//       <p className="z-40 text-gray-300 truncate line-clamp-2 overflow-ellipsis h-4 w-40 rounded-full bg-gray-300 animate-pulse"></p>
//     </div>
//   );
// };
