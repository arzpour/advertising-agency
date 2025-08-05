import { sanitizeHTML } from "@/utils/sanitizeHtml";
import Image from "next/image";
import React from "react";

interface IServiceCard {
  name: string;
  icon: string;
  description: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ description, icon, name }) => {
  return (
    <div className="flex flex-col space-y-2 justify-center items-center">
      <Image
        src={`${process.env.NEXT_PUBLIC_CATEGORY_ICON_URL}/${icon}`}
        alt={`${name} image`}
        className="w-20 h-20 object-cover rounded-full"
        width={200}
        height={200}
      />
      <h3 className="text-gray-800 truncate line-clamp-1">{name}</h3>

      <p
        className="text-sm text-gray-500 text-center"
        dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }}
      ></p>
    </div>
  );
};

export default ServiceCard;

export const ServiceCardSkeleton = () => {
  return (
    <div className="flex flex-col space-y-2 justify-center items-center">
      <div className="w-20 h-20 object-cover rounded-full bg-gray-200 animate-pulse"></div>
      <div className="text-gray-800 truncate line-clamp-1 h-4 w-16 rounded-full bg-gray-200 animate-pulse"></div>

      <p className="text-sm text-gray-500 text-center h-4 w-40 rounded-full bg-gray-200 animate-pulse"></p>
    </div>
  );
};
