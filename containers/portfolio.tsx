"use client";
import React, { useRef } from "react";
import PortfolioCard from "@/components/portfolio/portfolio-card";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const portfolioData = [
  {
    ImageHref:
      "https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-01.jpg",
    category: "branding",
    text: "ایپسوم متن ساختگی با تولید سادگی نامفهوم",
    buttonHref: "#",
  },
  {
    ImageHref:
      "https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-02.jpg",
    category: "marketing",
    text: "ایپسوم متن ساختگی با تولید سادگی نامفهوم",
    buttonHref: "#",
  },
  {
    ImageHref:
      "https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-03.jpg",
    category: "development",
    text: "ایپسوم متن ساختگی با تولید سادگی نامفهوم",
    buttonHref: "#",
  },
  {
    ImageHref:
      "https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-04.jpg",
    category: "design",
    text: "ایپسوم متن ساختگی با تولید سادگی نامفهوم",
    buttonHref: "#",
  },
  {
    ImageHref:
      "https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-05.jpg",
    category: "branding",
    text: "ایپسوم متن ساختگی با تولید سادگی نامفهوم",
    buttonHref: "#",
  },
];

type projectCategoryType =
  | "all"
  | "branding"
  | "Content production"
  | "marketing"
  | "development";

const Portfolio = () => {
  const [showCard, setShowCard] = React.useState<projectCategoryType>("all");
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleProject = (category: projectCategoryType) => {
    setShowCard(category);
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative w-full bg-gray-100 py-20 mt-10" dir="rtl">
      <div className="container mx-auto max-w-[78rem]">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-14 max-w-md text-center">
              <h2 className="text-gray-700 mb-3 text-3xl leading-[1.208] font-bold">
                نمونه کارها
              </h2>
              <p className="text-gray-600 text-sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <ul className="flex gap-4 flex-wrap justify-center mb-12 space-x-1">
              <li className="mb-1">
                <button
                  onClick={() => handleProject("all")}
                  className={`inline-block cursor-pointer text-sm rounded-md py-2 px-6 text-center font-medium transition md:py-2 lg:px-8 ${
                    showCard === "all"
                      ? "bg-red-600 text-white"
                      : "hover:bg-red-600 hover:text-white"
                  }`}
                >
                  همه
                </button>
              </li>
              <li className="mb-1">
                <button
                  onClick={() => handleProject("branding")}
                  className={`inline-block cursor-pointer text-sm rounded-md py-2 px-6 text-center font-medium transition md:py-2 lg:px-8 ${
                    showCard === "branding"
                      ? "bg-red-600 text-white"
                      : "hover:bg-red-600 hover:text-white"
                  }`}
                >
                  برندینگ
                </button>
              </li>
              <li className="mb-1">
                <button
                  onClick={() => handleProject("Content production")}
                  className={`inline-block cursor-pointer text-sm rounded-md py-2 px-6 text-center font-medium transition md:py-2 lg:px-8 ${
                    showCard === "Content production"
                      ? "bg-red-600 text-white"
                      : "hover:bg-red-600 hover:text-white"
                  }`}
                >
                  تولید محتوا
                </button>
              </li>
              <li className="mb-1">
                <button
                  onClick={() => handleProject("marketing")}
                  className={`inline-block cursor-pointer text-sm rounded-md py-2 px-6 text-center font-medium transition md:py-2 lg:px-8 ${
                    showCard === "marketing"
                      ? "bg-red-600 text-white"
                      : "hover:bg-red-600 hover:text-white"
                  }`}
                >
                  مارکتینگ
                </button>
              </li>
              <li className="mb-1">
                <button
                  onClick={() => handleProject("development")}
                  className={`inline-block cursor-pointer text-sm rounded-md py-2 px-6 text-center font-medium transition md:py-2 lg:px-8 ${
                    showCard === "development"
                      ? "bg-red-600 text-white"
                      : "hover:bg-red-600 hover:text-white"
                  }`}
                >
                  طراحی سایت و سئو
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-20 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-20 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
          >
            <FaArrowRight />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-10 overflow-x-auto px-2 scrollbar-hide scroll-smooth max-w-7xl mx-auto"
          >
            {portfolioData.map((item, index) => (
              <PortfolioCard
                key={index}
                ImageHref={item.ImageHref}
                category={item.category}
                text={item.text}
                buttonHref={item.buttonHref}
                showCard={showCard}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
