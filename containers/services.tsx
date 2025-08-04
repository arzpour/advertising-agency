import { getAllCategories } from "@/apis/client/categories";
import ServiceCard from "@/components/services/service-card";
import React from "react";

const Services = async () => {
  const servicesData = await getAllCategories({ page: 1, limit: 6 });

  return (
    <section
      id="services"
      className="flex flex-col my-16 md:my-28 mb-20 px-10 bg-gray-100 py-14"
      dir="rtl"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-xl md:text-3xl font-bold my-2 text-gray-900 mb-8">
          خدمات
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-9 lg:gap-7">
          {servicesData.data.categories.map((el) => (
            <ServiceCard
              key={el.name}
              description={el.description}
              icon={el.icon ?? ""}
              name={el.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
