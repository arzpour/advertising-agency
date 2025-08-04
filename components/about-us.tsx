import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section
      id="aboutUs"
      className="max-w-6xl mx-auto my-6 mt-10 md:mt-16 lg:mt-28"
      dir="rtl"
    >
      <div className="flex flex-wrap lg:flex-nowrap xl:gap-5 items-center justify-center lg:justify-baseline xl:justify-center xl:mr-16 px-5 sm:px-10 xl:px-0">
        <div className="w-full lg:w-1/2">
          <div className="flex gap-3 items-center">
            <div className="flex gap-1.5 items-center relative bottom-1">
              <div>
                <div className="w-2 h-2 bg-red-500 my-2"></div>
                <div className="w-2 h-2 bg-red-500"></div>
              </div>
              <div className="w-2 h-6 relative top-1 bg-red-500"></div>

              <div>
                <div className="w-2 h-2 bg-red-500 my-2"></div>
                <div className="w-2 h-2 bg-red-500"></div>
              </div>
            </div>

            <h3 className="text-xl md:text-3xl font-bold text-gray-800 my-5">
              آژانس تبلیغاتی <span className="text-red-500">هانس</span>
            </h3>
          </div>
          <p className="lg:pl-10 text-gray-700 text-sm">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
            متون بلکه روزنامه و مجله در ستون
            <br />و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی
            نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
            متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم
            متن
            <br /> ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
            طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
            سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطر
            <br />
            آنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
            صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطرآنچنان که لازم است
          </p>
        </div>
        <div className="relative bottom-20 h-52 w-full lg:w-1/3 hidden sm:block mr-28 lg:mr-32 xl:mr-44 mt-32 lg:mt-0">
          <Image
            src="/istockphoto-1385970223-1024x1024.jpg"
            alt="advertising-agency-1"
            width={200}
            height={200}
            className="w-[29rem] h-[16rem] relative right-14 rounded-xl"
          />
          <Image
            src="/gettyimages-2149038061-612x612.jpg"
            alt="advertising-agency-1"
            width={200}
            height={200}
            className="w-[17rem] absolute -bottom-40 -right-24 rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
