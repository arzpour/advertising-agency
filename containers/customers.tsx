import { getAllCustomers } from "@/apis/client/customers";
import Image from "next/image";
import React from "react";

const Customers = async () => {
  let customersData: ICustomerResDto | null = null;

  try {
    customersData = await getAllCustomers({ page: 1, limit: Infinity });
    console.log("🚀 ~ Brands ~ customersData:", customersData);
  } catch (err) {
    console.error("🚀 ~ customers ~ err:", err);
  }
  return (
    <section
      id="clients"
      className="overflow-hidden relative w-full bg-white py-6 mt-10 sm:mt-14 scroll-mt-20"
    >
      <div className="whitespace-nowrap brandScroll flex gap-10 items-center justify-center min-w-full">
        {customersData?.data.customers.map((el, index) => (
          <Image
            key={el._id}
            src={
              el.icon
                ? `${process.env.NEXT_PUBLIC_CUSTOMER_ICON_URL}/${el.icon}`
                : "/gettyimages-2149038061-612x612.jpg"
            }
            alt={`brand-${index}`}
            width={100}
            height={100}
            className="w-20 h-20 object-contain"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

export default Customers;
