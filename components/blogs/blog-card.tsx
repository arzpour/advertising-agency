// import Image from "next/image";
import React from "react";

interface IBlogCard {
  image: string;
  title: string;
  description: string;
  time: string;
  width?: string;
}

const BlogCard: React.FC<IBlogCard> = ({
  image,
  description,
  time,
  title,
  width,
}) => {
  return (
    <div className={`relative ${width ? width : "w-xl"} h-60 cursor-pointer`}>
      {/* <Image src={image} alt="blog-" width={200} height={200} /> */}
      <img
        src={image}
        alt={`image-${title}`}
        className="w-full h-60 rounded-xl"
      />
      <div className="absolute h-full rounded-xl overflow-hidden whitespace-nowrap w-full top-0 bg-black opacity-45 hover:opacity-25 transition-all duration-300 ease-in-out z-20"></div>
      <div className="flex justify-between items-center">
        <h4 className="absolute bottom-17 right-5 z-40 text-red-500 underline line-clamp-1">
          {title}
        </h4>
        <span className="absolute bottom-17 left-3 z-40 text-gray-300 text-xs">
          {time}
        </span>
      </div>
      <p className="absolute bottom-7 right-5 z-40 text-gray-300 truncate line-clamp-2 overflow-ellipsis">
        {description}
      </p>
    </div>
  );
};

export default BlogCard;
