import { sanitizeHTML } from "@/utils/sanitizeHtml";
import Image from "next/image";
import React from "react";
import DeleteDialog from "../global/delete-dialog";
import EditDialog from "../global/edit-dialog";

interface ICategoryCard {
  name: string;
  icon: string;
  description: string;
  _id: string;
}

const CategoryCard: React.FC<ICategoryCard> = ({
  description,
  icon,
  name,
  _id,
}) => {
  return (
    <div className="flex flex-col space-y-2 justify-center items-center cursor-pointer w-64 p-8 rounded-lg bg-white shadow-md hover:shadow-2xl">
      <Image
        src={`${process.env.NEXT_PUBLIC_CATEGORY_ICON_URL}/${icon ?? ""}`}
        alt={`${name} image`}
        width={800}
        height={800}
        className="h-20 w-20 object-cover rounded"
      />
      <h3 className="text-gray-800 truncate line-clamp-1">{name}</h3>
      <p
        className="text-sm text-gray-500 text-center line-clamp-1"
        dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }}
      ></p>
      <div className="flex gap-3 mt-4 justify-end items-center">
        <EditDialog title="خدمات" _id={_id} />
        <DeleteDialog title="خدمات" _id={_id} />
      </div>
    </div>
  );
};

export default CategoryCard;

export const CategoryCardSkeleton = () => {
  return (
    <div className="flex flex-col space-y-2 justify-center items-center cursor-pointer w-64 p-8 rounded-lg bg-white shadow-md hover:shadow-2xl">
      <div className="h-20 w-20 object-cover rounded bg-gray-300 animate-pulse mb-4"></div>

      <div className="truncate line-clamp-1 h-4 w-24 bg-gray-300 animate-pulse rounded-full"></div>
      <p className="text-sm text-gray-500 text-center line-clamp-1 h-4 w-40 rounded-full bg-gray-300 animate-pulse"></p>
      <div className="flex gap-3 mt-4 justify-end items-center">
        <div className="h-4 w-16 rounded-full bg-gray-300 animate-pulse"></div>
        <div className="h-4 w-16 rounded-full bg-gray-300 animate-pulse"></div>
      </div>
    </div>
  );
};
