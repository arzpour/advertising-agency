import React from "react";
import ContactUsForm from "./contact-us-form";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <section
      id="contactUs"
      className="bg-dark-1 my-10 sm:my-28 lg:mt-40 text-white inline-block w-full"
    >
      <div className="flex max-w-6xl mx-auto lg:gap-28 p-5 py-10 md:px-20 items-center justify-center">
        <div className="md:ml-16 lg:ml-20">
          <p className="text-gray-100 text-sm md:text-base">
            برای ارتباط با ما ایمیل و متن خود را به صورت تیکت نوشته و ارسال کنید
          </p>
          <ContactUsForm />
          <p className="text-gray-100 text-sm md:text-[15px] mt-9">
            در صورت نیاز از طریق این راه ها میتوانید با ما در ارتباط باشید
          </p>
          <div className="flex gap-10 items-center justify-end mt-6">
            <div className="flex gap-3 items-center">
              <span className="text-gray-300 text-sm md:text-base">
                saeeed@gmail.com
              </span>
              <Mail className="w-4 h-4 relative bottom-0.5" />
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-gray-300 text-sm md:text-base">
                +21-32374672
              </span>
              <Phone className="w-4 h-4 relative bottom-0.5" />
            </div>
          </div>
        </div>
        <Image
          src="/papers.png"
          alt="advertising-agency-1"
          width={200}
          height={200}
          className="hidden contact-us-pic"
        />
      </div>
    </section>
  );
};

export default ContactUs;
