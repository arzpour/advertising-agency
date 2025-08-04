"use client";

import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  contactUsFormValidationSchema,
  contactUsFormValidationSchemaType,
} from "@/validations/contact-us-validation";
import { useAddTicket } from "@/apis/mutations/tickets";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../form/input";
import { toast } from "sonner";

const ContactUsForm = () => {
  const { handleSubmit, control } = useForm<contactUsFormValidationSchemaType>({
    mode: "all",
    resolver: zodResolver(contactUsFormValidationSchema),
  });

  const sendTicket = useAddTicket();

  const onSubmit: SubmitHandler<contactUsFormValidationSchemaType> = async (
    data
  ) => {
    console.log(data);

    try {
      await sendTicket.mutateAsync({
        phoneNumber: data.phoneNumber,
        message: data.message,
      });

      toast("ارسال شد", {
        icon: "✅",
        className: "!bg-green-100 !text-green-800 !shadow-md !h-[60px]",
      });
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error);

      toast("مشکلی به وجود آمده است", {
        className: "!bg-red-100 !text-red-800 !shadow-md !h-[60px]",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-wrap gap-3 items-center text-white mt-5"
    >
      <Controller
        control={control}
        name="phoneNumber"
        render={({ field, fieldState }) => (
          <Input
            type="text"
            placeholder="آدرس ایمیل یا شماره همراه..."
            error={fieldState.error?.message}
            {...field}
            className="placeholder:text-white placeholder:text-sm"
          />
        )}
      />

      <Controller
        control={control}
        name="message"
        render={({ field, fieldState }) => (
          <Input
            type="text"
            placeholder="متن..."
            error={fieldState.error?.message}
            {...field}
            className="placeholder:text-white placeholder:text-sm"
          />
        )}
      />

      <button
        type="submit"
        className="text-red-500 underline cursor-pointer outline-none text-xs sm:text-sm md:text-base"
      >
        ارسال
      </button>
    </form>
  );
};

export default ContactUsForm;
