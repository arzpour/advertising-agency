import React from "react";
import ContactUsForm from "./contact-us-form";

const ContactUs = () => {
  return (
    <section id="contactUs" className="text-white inline-block scroll-mt-20">
      <div className="w-full">
        <p className="text-gray-100 text-xs sm:text-sm">
          برای ارتباط با ما ایمیل و متن خود را به صورت تیکت نوشته و ارسال کنید
        </p>
        <ContactUsForm />
      </div>
    </section>
  );
};

export default ContactUs;
