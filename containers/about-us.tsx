import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section
      id="aboutUs"
      className="max-w-6xl mx-auto my-6 mt-10 md:mt-16 lg:mt-28 scroll-mt-20"
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

            <h3 className="text-xl font-bold text-gray-800 my-5">
              آژانس تبلیغاتی <span className="text-red-500">هانس</span>
            </h3>
          </div>
          <p className="lg:pl-10 text-gray-700 text-sm leading-6">
            هانس یک استودیوی خلاق در حوزه تبلیغات و برندینگ است که با رویکردی
            استراتژیک، به برندها کمک می‌کند تصویر و پیام خود را به شکلی منسجم و
            قابل‌درک ارائه دهند. تمرکز ما بر طراحی ارتباط مؤثر میان برند و مخاطب
            است؛ ارتباطی که فراتر از دیده شدن، به فهمیده شدن و ماندگار شدن منجر
            می‌شود.
            <br />
            <br/>

            در هانس، هر پروژه با شناخت برند، مخاطب و هدف آغاز می‌شود و سپس به
            طراحی راهکارهای خلاقانه می‌رسد. ما تولید محتوا و اجرای کمپین را
            نتیجه این مسیر فکری می‌دانیم، نه نقطه شروع آن. به همین دلیل خروجی‌ها
            هم‌راستا با استراتژی برند شکل می‌گیرند.
            <br />
            <br />

            هانس خود را صرفاً مجری نمی‌داند، بلکه به‌عنوان شریک خلاق در کنار
            برندها قرار می‌گیرد و از ایده‌پردازی تا اجرا همراه آن‌هاست. حوزه
            فعالیت ما شامل برندینگ، کمپین‌های تبلیغاتی، تولید محتوای تصویری و
            طراحی تجربه در پروژه‌های ایونت، مراسم و همایش است
          </p>
        </div>
        <div className="relative bottom-20 h-52 w-full lg:w-1/3 hidden sm:block mr-28 lg:mr-32 xl:mr-44 mt-32 lg:mt-0">
          {/* <Image
            src="/istockphoto-1385970223-1024x1024.jpg"
            alt="advertising-agency-1"
            width={200}
            height={200}
            className="w-[29rem] h-[16rem] relative right-14 rounded-xl"
          /> */}
          <Image
            src="/istockphoto-1385970223-1024x1024.jpg"
            alt="advertising-agency-1"
            width={464}
            height={256}
            className="rounded-xl"
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
