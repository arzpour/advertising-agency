import React from "react";

interface ITicketCard {
  phoneNumber: string;
  message: string;
  time: string;
}

const TicketCard: React.FC<ITicketCard> = ({ message, phoneNumber, time }) => {
  return (
    <div className="flex flex-col justify-between p-4 leading-normal w-full">
      <div className="flex gap- justify-between items-center">
        <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
          {phoneNumber}
        </h5>
        <span>{time}</span>
      </div>
      <p className="mb-3 text-gray-700 dark:text-gray-400 text-sm">{message}</p>
    </div>
  );
};

export default TicketCard;
