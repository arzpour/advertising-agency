"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactUsFormValidationSchema } from "@/validations/contact-us-validation";

type ContactFormFields = {
  email: string;
  text: string;
};

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<ContactFormFields>({
    resolver: yupResolver(contactUsFormValidationSchema),
  });

  const onSubmit = (data: ContactFormFields) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-wrap sm:flex-nowrap gap-3 md:gap-6 items-center text-white mt-5"
    >
      <div>
        <input
          type="text"
          placeholder="آدرس ایمیل"
          className="outline-none px-3 py-1.5 bg-gray-2 text-gray-900 rounded placeholder:text-sm text-sm"
          {...register("email")}
        />
        {touchedFields.email && errors.email && (
          <p className="text-red-500 text-xs mt-2">{errors.email.message}</p>
        )}

        {touchedFields.text && errors.text && !errors.email && (
          <div className="h-6 w-2"></div>
        )}
      </div>

      <div>
        <input
          type="text"
          placeholder="متن..."
          className="outline-none px-3 py-1.5 bg-gray-2 text-gray-900 rounded placeholder:text-sm text-sm"
          {...register("text")}
        />
        {touchedFields.text && errors.text && (
          <p className="text-red-500 text-xs mt-2">{errors.text.message}</p>
        )}

        {touchedFields.email && errors.email && !errors.text && (
          <div className="h-6 w-2"></div>
        )}
      </div>

      <button
        type="submit"
        className="text-red-500 underline cursor-pointer outline-none md:mr-7 text-sm md:text-base"
      >
        ارسال
      </button>
    </form>
  );
};

export default ContactUsForm;
