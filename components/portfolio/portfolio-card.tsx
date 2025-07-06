// import Image from "next/image";
import React from "react";

interface IPortfolioCard {
  showCard: string;
  category: string;
  ImageHref: string;
  title: string;
  buttonHref: string;
}

const PortfolioCard: React.FC<IPortfolioCard> = ({
  showCard,
  category,
  ImageHref,
  title,
  buttonHref,
}) => {
  return (
    <div
      className={`px-4 ${
        showCard === "all" || showCard === category.toLowerCase()
          ? "block"
          : "hidden"
      }`}
    >
      <div className="relative mb-12">
        <div className="overflow-hidden rounded-xl">
          {/* <Image
            src={ImageHref}
            alt="portfolio"
            className="w-full"
            width={200}
            height={200}
          /> */}
          <img src={ImageHref} alt="portfolio" className="w-full" />
        </div>
        <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white dark:bg-dark-2 py-[34px] px-3 text-center shadow-portfolio dark:shadow-box-dark">
          <span className="text-primary mb-2 block text-sm font-medium">
            {category}
          </span>
          <h3 className="text-dark dark:text-white mb-5 text-xl font-bold">
            {title}
          </h3>
          <a
            href={buttonHref}
            className="text-body-color dark:text-dark-6 hover:border-primary hover:bg-primary inline-block rounded-md border border-stroke dark:border-dark-3 py-[10px] px-7 text-sm font-medium transition hover:text-white"
          >
            مشاهده بیشتر
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
