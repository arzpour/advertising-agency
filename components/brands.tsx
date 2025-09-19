"use client";
import Image from "next/image";
import React from "react";

const brands = [
  "/fire-power.jpg",
  "/ghahraman.jpg",
  "/shilton.jpg",
  "/hyperstar-logo-1.jpg",
  "/shooder.jpg",
  "/kasra.jpg",
];

const Brands = () => {
  return (
    <section
      id="clients"
      className="overflow-hidden relative w-full bg-white py-6 mt-10 sm:mt-14"
    >
      <div className="whitespace-nowrap brandScroll flex gap-10 items-center justify-center min-w-full">
        {[...brands, ...brands, ...brands].map((el, index) => (
          <Image
            key={el}
            src={el ?? "/gettyimages-2149038061-612x612.jpg"}
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

export default Brands;
