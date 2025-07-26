import { getAllCategories } from "@/apis/client/categories";
import ServiceCard from "@/components/services/service-card";
import React from "react";

const Services = async () => {
  const servicesData = await getAllCategories({ page: 1, limit: 6 });

  return (
    <section
      className="flex flex-col my-16 mb-20 max-w-[90rem] mx-auto px-10"
      dir="rtl"
    >
      <h2 className="text-xl font-medium my-2 text-gray-900 mb-8">خدمات</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-9 lg:gap-7">
        {servicesData.data.categories.map((el) => (
          <ServiceCard
            key={el.name}
            description={el.description}
            icon={el.icon ?? ""}
            name={el.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
