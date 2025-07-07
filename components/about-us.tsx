import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="max-w-6xl mx-auto my-6 mt-40" dir="rtl">
      <div className="flex gap-5 items-center justify-center mr-20">
        <div className="w-1/2">
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

            <h3 className="text-lg font-medium text-gray-800 my-5">
              آژانس تبلیغاتی <span className="text-red-500">هانس</span>
            </h3>
          </div>
          <p className="pl-16 text-gray-700 text-sm">
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
        <div className="relative bottom-8 h-52 w-1/2">
          <div className="bg-white shadow-md rounded whitespace-nowrap overflow-hidden p-1 w-52 h-fit absolute bottom-0 right-52">
            <Image
              src="/worktable-with-paper-crayons.jpg"
              alt="advertising-agency-1"
              width={200}
              height={200}
            />
          </div>
          <div className="bg-white shadow-md rounded p-1 w-52 h-fit absolute top-2/4 right-2/4">
            <Image
              src="/-9223372036854775808_-210019.jpg"
              alt="advertising-agency-2"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
