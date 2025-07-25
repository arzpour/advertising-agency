import { sanitizeHTML } from "@/utils/sanitizeHtml";
import Image from "next/image";
import React from "react";
import { Trash, Edit } from "lucide-react";
import DeleteDialog from "../global/delete-dialog";

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
        height={200}
        className="h-20 w-20 object-cover rounded"
      />
      <h3 className="text-gray-800 truncate line-clamp-1">{name}</h3>
      <p
        className="text-sm text-gray-500 text-center line-clamp-1"
        dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }}
      ></p>
      <div className="flex gap-3 mt-4 justify-end items-center">
        <Edit className="w-4 h-4 text-red-500 cursor-pointer" />
        <DeleteDialog title="خدمات" _id={_id} />
      </div>
    </div>
  );
};

export default CategoryCard;
