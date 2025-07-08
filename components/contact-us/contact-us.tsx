import React from "react";
import ContactUsForm from "./contact-us-form";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-dark-1 my-20 mt-40 text-white">
      <div className="flex max-w-6xl mx-auto gap-28 py-10 px-20 items-center justify-center">
        <div className="ml-20">
          <p className="text-gray-100 text-base">
            برای ارتباط با ما ایمیل و متن خود را به صورت تیکت نوشته و ارسال کنید
          </p>
          <ContactUsForm />
          <p className="text-gray-100 text-[15px] mt-9">
            در صورت نیاز از طریق این راه ها میتوانید با ما در ارتباط باشید
          </p>
          <div className="flex gap-10 items-center justify-end mt-6">
            <div className="flex gap-3 items-center">
              <span className="text-gray-300">saeeed@gmail.com</span>
              <MdEmail className="w-4 h-4 relative bottom-0.5" />
            </div>
            <div className="flex gap-3 items-center">
              <span className="text-gray-300">+21-32374672</span>
              <FaPhoneAlt className="w-4 h-4 relative bottom-0.5" />
            </div>
          </div>
        </div>
        <Image
          src="/papers.png"
          alt="advertising-agency-1"
          width={200}
          height={200}
        />
      </div>
    </section>
  );
};

export default ContactUs;
