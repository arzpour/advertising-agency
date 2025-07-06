import Image from "next/image";
import React from "react";

interface IServiceCard {
  title: string;
  image: string;
  description: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ description, image, title }) => {
  return (
    <div className="flex flex-col space-y-2 justify-center items-center">
      <Image
        src={image}
        alt={`${title} image`}
        className="w-20 h-20 object-cover"
        width={200}
        height={200}
      />
      <h3 className="text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500 text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
