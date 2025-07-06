import ServiceCard from "@/components/services/service-card";
import React from "react";

const servicesData = [
  {
    title: "برندینگ و استراتژی",
    image: "/b5e9785731b3b1e7afe6aff9ebcb031e.jpg",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    title: "تولید محتوا تصویری",
    image: "/Video content production.png",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    title: "تولید محتوا گرافیکی و متنی",
    image: "/Graphic and text content production.png",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    title: "مدیریت شبکه های اجتماعی",
    image: "/social media management.png",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    title: "طراحی سایت و سئو",
    image: "/seo and website.png",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
];

const Services = () => {
  return (
    <section
      className="flex flex-col my-10 mt-16 max-w-[90rem] mx-auto px-10"
      dir="rtl"
    >
      <h2 className="text-lg font-medium my-2">خدمات</h2>

      <div className="flex gap-7">
        {servicesData.map((el) => (
          <ServiceCard
            key={el.title}
            description={el.description}
            image={el.image}
            title={el.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
