import { getAllCustomers } from "@/apis/client/customers";
import Image from "next/image";
import React from "react";
export const revalidate = 1800;

const Customers = async () => {
  let customersData: ICustomerResDto | null = null;

  try {
    customersData = await getAllCustomers({
      page: 1,
      limit: 9999,
      type: "all",
    });
  } catch (err) {
    console.error("🚀 ~ customers ~ err:", err);
  }
  const slides = Array.from(
    { length: 12 },
    () => customersData?.data.customers
  ).flat();

  return (
    <section
      id="clients"
      className="overflow-hidden relative w-full bg-white mt-10"
    >
      <div className="flex animate-marquee gap-10 ml-20">
        {slides.map((el, index) => (
          <div
            key={index}
            className="w-36 h-36 flex items-center justify-center shrink-0"
          >
            <Image
              src={
                el?.icon
                  ? `${process.env.NEXT_PUBLIC_CUSTOMER_ICON_URL}/${el.icon}`
                  : "/gettyimages-2149038061-612x612.jpg"
              }
              alt={`brand-${index}`}
              width={800}
              height={800}
              className="object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Customers;
