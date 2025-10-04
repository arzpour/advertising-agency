import Image from "next/image";
import React from "react";
import DeleteDialog from "./delete-dialog";
import EditDialog from "./edit-dialog";

interface IGlobalCard {
  name: string;
  icon: string;
  _id: string;
  status: "category" | "customer";
}

const GlobalCard: React.FC<IGlobalCard> = ({ icon, name, _id, status }) => {
  let iconUrl;
  let cardTitle;

  if (status === "category") {
    iconUrl = process.env.NEXT_PUBLIC_CATEGORY_ICON_URL;
    cardTitle = "دسته بندی";
  } else if (status === "customer") {
    iconUrl = process.env.NEXT_PUBLIC_CUSTOMER_ICON_URL;
    cardTitle = "مشتریان";
  } else {
    iconUrl = "";
    cardTitle = "";
  }

  return (
    <div className="flex flex-col space-y-2 justify-center items-center cursor-pointer w-64 p-8 rounded-lg bg-white shadow-md hover:shadow-2xl">
      <Image
        src={
          icon ? `${iconUrl}/${icon}` : "/gettyimages-2149038061-612x612.jpg"
        }
        alt={`${name} image`}
        width={800}
        height={800}
        className="h-20 w-20 object-cover rounded"
      />
      <h3 className="text-gray-800 truncate line-clamp-1">{name}</h3>
      <div className="flex gap-3 mt-4 justify-end items-center">
        <EditDialog title={cardTitle as SubjectsType} _id={_id} />
        <DeleteDialog title={cardTitle as SubjectsType} _id={_id} />
      </div>
    </div>
  );
};

export default GlobalCard;

export const GlobalCardSkeleton = () => {
  return (
    <div className="flex flex-col space-y-2 justify-center items-center cursor-pointer w-64 p-8 rounded-lg bg-white shadow-md hover:shadow-2xl">
      <div className="h-20 w-20 object-cover rounded bg-gray-200 animate-pulse mb-6"></div>

      <div className="truncate line-clamp-1 h-4 w-24 bg-gray-200 animate-pulse rounded-full"></div>
      <p className="text-sm text-gray-500 text-center line-clamp-1 h-4 w-44 rounded-full bg-gray-200 animate-pulse"></p>
      <div className="flex gap-2 mt-3 justify-end items-center">
        <div className="h-4 w-8 rounded-full bg-gray-200 animate-pulse"></div>
        <div className="h-4 w-8 rounded-full bg-gray-200 animate-pulse"></div>
      </div>
    </div>
  );
};
