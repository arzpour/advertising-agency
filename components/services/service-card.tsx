"use client";
import { getImageSrc } from "@/utils/getImageSrc";
import { sanitizeHTML } from "@/utils/sanitizeHtml";
import Image from "next/image";
import React from "react";
import ServiceModal from "./service-modal";

interface IServiceCard {
  name: string;
  icon: string;
  description: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ description, icon, name }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="flex flex-col space-y-2 justify-start items-center text-center sm:text-right w-full">
        <Image
          src={getImageSrc(
            icon,
            process.env.NEXT_PUBLIC_SERVICE_ICON_URL ?? "",
          )}
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

        <div className="relative w-4/5 sm:w-46 text-sm text-gray-500 text-center sm:text-right">
          <div
            className="line-clamp-3"
            dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }}
          />

          {description.length > 120 && (
            <button
              onClick={() => setOpen(true)}
              className="text-red-600 text-xs mt-1 cursor-pointer"
            >
              بیشتر
            </button>
          )}
        </div>

        {/* <div
        className="text-sm text-gray-500 text-center sm:text-right whitespace-normal break-words w-4/5 sm:w-46"
        dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }}
      ></div> */}
      </div>

      {open && (
        <ServiceModal onClose={() => setOpen(false)}>
          <div className="flex justify-center">
            <Image
              src={getImageSrc(
                icon,
                process.env.NEXT_PUBLIC_SERVICE_ICON_URL ?? "",
              )}
              alt={`${name} image`}
              className="w-24 h-24 object-cover rounded-full !mb-3"
              width={800}
              height={800}
              loading="lazy"
              quality={90}
              sizes="96px"
            />
          </div>
          <h3 className="text-lg font-semibold mb-4 flex justify-center">
            {name}
          </h3>
          <div
            dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }}
          />
        </ServiceModal>
      )}
    </>
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
