import { getAllServices } from "@/apis/client/services";
import ServiceCard from "@/components/services/service-card";
import React from "react";

export const revalidate = 1800;

const Services = async () => {
  let servicesData: IServiceResDto | null = null;

  try {
    servicesData = await getAllServices({ page: 1, limit: 6 });
  } catch (err) {
    console.error("🚀 ~ Services ~ err:", err);
  }

  return (
    servicesData &&
    servicesData.data.services.length > 0 && (
      <section
        id="services"
        className="pt-10 sm:pt-14 sm:mt-16 md:mt-20 scroll-mt-20"
        dir="rtl"
      >
        <div className="container mx-auto">
          <h2 className="text-xl font-bold bg-gray-100 rounded-t-md inline-block py-4 px-16">
            خدمات
          </h2>
        </div>

        <div className="flex flex-col bg-gray-100 py-16 pb-28">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 container mx-auto max-w-[95rem]">
            {servicesData.data.services.slice(0, 5).map((el) => (
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
    )
  );
};

export default Services;
