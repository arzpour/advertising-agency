// import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowLeft } from "lucide-react";

interface IPortfolioCard {
  showCard: string;
  category: string;
  ImageHref: string;
  text: string;
  buttonHref: string;
}

const PortfolioCard: React.FC<IPortfolioCard> = ({
  showCard,
  category,
  ImageHref,
  text,
  buttonHref,
}) => {
  let categoryFa;

  if (category === "branding") {
    categoryFa = "برندینگ";
  } else if (category === "Content production") {
    categoryFa = "تولید محتوا";
  } else if (category === "marketing") {
    categoryFa = "مارکتینگ";
  } else if (category === "development") {
    categoryFa = "توسعه";
  } else if (category === "design") {
    categoryFa = "گرافیک";
  }

  return (
    <div
      className={`rounded-lg bg-white shadow-secondary-1 w-72 ${
        showCard === "all" || showCard === category.toLowerCase()
          ? "block"
          : "hidden"
      }`}
    >
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat cursor-pointer"
        data-twe-ripple-init
        data-twe-ripple-color="light"
      >
        <img src={ImageHref} alt="portfolio" className="rounded-t-lg" />
        <div className="absolute h-full overflow-hidden whitespace-nowrap w-full top-0 bg-black opacity-40 hover:opacity-20 transition-all duration-300 ease-in-out z-20"></div>

        <Link href={buttonHref}>
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </Link>
      </div>
      <div className="px-6 py-5 text-surface dark:text-white">
        <h5 className="mb-2 text-sm text-gray-800 font-medium leading-tight truncate line-clamp-1">
          {text}
        </h5>
        <p className="mb-0.5 text-xs text-gray-600">{categoryFa}</p>
        <Link
          href={buttonHref}
          className="flex gap-2 items-center rounded justify-end pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-red-500 shadow-primary-3 transition duration-150 ease-in-out"
        >
          مشاهده بیشتر
          <ArrowLeft />
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
