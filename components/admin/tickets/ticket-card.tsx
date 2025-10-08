import { toPersianDate } from "@/utils/toPersianDate";
import React from "react";

interface ITicketCard {
  phoneNumber: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}

const TicketCard: React.FC<ITicketCard> = ({
  message,
  phoneNumber,
  createdAt,
  updatedAt,
}) => {
  return (
    <div className="flex flex-col justify-between p-4 leading-normal w-full bg-white rounded-lg">
      <div className="flex gap- justify-between items-center">
        <h5 className="mb-2 font-semibold tracking-tight text-gray-900 dark:text-white whitespace-normal break-words [overflow-wrap:anywhere]">
          {phoneNumber}
        </h5>
        <span className="text-gray-600 text-sm">
          {toPersianDate(updatedAt) ?? toPersianDate(createdAt)}
        </span>
      </div>
      <p className="text-gray-700 dark:text-gray-400 text-sm mb-1 whitespace-normal break-words [overflow-wrap:anywhere]">
        {message}
      </p>
    </div>
  );
};

export default TicketCard;

export const TicketCardSkeleton = () => {
  return (
    <div className="flex flex-col justify-between p-4 leading-normal w-full bg-white rounded-lg">
      <div className="flex justify-between items-center">
        <div className="mb-2 tracking-tight h-4 w-24 bg-gray-200 animate-pulse rounded-full"></div>
        <span className="h-4 w-10 bg-gray-200 animate-pulse rounded-full"></span>
      </div>
      <p className="text-gray-700 dark:text-gray-400 text-sm mb-1 h-4 w-48 bg-gray-200 animate-pulse rounded-full"></p>
    </div>
  );
};
