"use client";
import PortfolioCard from "@/components/portfolio/portfolio-card";
import React from "react";

const portfolioData = [
  {
    ImageHref:
      "https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-01.jpg",
    category: "Branding",
    title: "Creative Agency",
    buttonHref: "#",
  },
  {
    ImageHref:
      "https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-02.jpg",
    category: "marketing",
    title: "Creative Agency",
    buttonHref: "#",
  },
  {
    ImageHref:
      "https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-06.jpg",
    category: "marketing",
    title: "Creative Agency",
    buttonHref: "#",
  },
  {
    ImageHref:
      "https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-06.jpg",
    category: "Development",
    title: "Creative Agency",
    buttonHref: "#",
  },
  {
    ImageHref:
      "https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-06.jpg",
    category: "Design",
    title: "Creative Agency",
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

  const handleProject = (category: projectCategoryType) => {
    setShowCard(category);
  };

  return (
    <section className="pt-20 pb-12 lg:pt-32 lg:pb-24 dark:bg-dark max-w-[88rem] mx-auto">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-14 max-w-md text-center">
              {/* <span className="text-primary mb-2 block text-lg font-semibold">
                Our Portfolio
              </span> */}
              <h2 className="text-gray-700 mb-3 text-3xl leading-[1.208] font-bold">
                {/* Our Recent Projects */}
                نمونه کارها
              </h2>
              <p className="text-gray-600">
                {/* There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form. */}
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
                  className={`inline-block text-sm rounded-md py-2 px-6 text-center font-medium transition md:py-2 lg:px-8 ${
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
                  className={`inline-block text-sm rounded-md py-2 px-6 text-center font-medium transition md:py-2 lg:px-8 ${
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
                  className={`inline-block text-sm rounded-md py-2 px-6 text-center font-medium transition md:py-2 lg:px-8 ${
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
                  className={`inline-block text-sm rounded-md py-2 px-6 text-center font-medium transition md:py-2 lg:px-8 ${
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
                  className={`inline-block text-sm rounded-md py-2 px-6 text-center font-medium transition md:py-2 lg:px-8 ${
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
        <div className="grid grid-cols-4 flex-wrap -mx-4">
          {portfolioData.map((el, index) => (
            <PortfolioCard
              key={index}
              ImageHref={el.ImageHref}
              category={el.category}
              title={el.title}
              buttonHref={el.buttonHref}
              showCard={showCard}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
