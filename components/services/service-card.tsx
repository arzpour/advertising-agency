import { getImageSrc } from "@/utils/getImageSrc";
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
    <div className="flex flex-col space-y-2 justify-start items-center text-center sm:text-right w-full">
      <Image
        src={getImageSrc(icon, process.env.NEXT_PUBLIC_SERVICE_ICON_URL ?? "")}
        alt={`${name} image`}
        className="w-24 h-24 object-cover rounded-full !mb-3"
        width={800}
        height={800}
        loading="lazy"
        quality={90}
        sizes="96px"
      />
      <h3 className="text-gray-800 text-center sm:text-right font-medium whitespace-normal break-words w-46">
        {name}
      </h3>

      <div
        className="text-sm text-gray-500 text-center sm:text-right whitespace-normal break-words w-4/5 sm:w-46"
        dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }}
      ></div>
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
