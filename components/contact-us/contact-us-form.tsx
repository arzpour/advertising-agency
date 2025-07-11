"use client";
import React from "react";
import { useFormik } from "formik";
import { contactUsFormValidationSchema } from "@/validation/contact-us-validation";

const ContactUsForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      text: "",
    },
    validationSchema: contactUsFormValidationSchema,
    onSubmit: (values) => console.log(values),
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-wrap sm:flex-nowrap gap-3 md:gap-6 items-center text-white mt-5"
    >
      <div>
        <input
          type="text"
          name="email"
          value={formik.values.email}
          placeholder="آدرس ایمیل"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="outline-none px-3 py-1.5 bg-gray-2 text-gray-900 rounded placeholder:text-sm text-sm"
        />
        {formik.touched.email && formik.errors.email ? (
          <p className="text-red-500 text-xs mt-2">{formik.errors.email}</p>
        ) : null}

        {formik.touched.text && formik.errors.text && !formik.errors.email && (
          <div className="h-6 w-2"></div>
        )}
      </div>

      <div>
        <input
          type="text"
          name="text"
          value={formik.values.text}
          placeholder="متن..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="outline-none px-3 py-1.5 bg-gray-2 text-gray-900 rounded placeholder:text-sm text-sm"
        />
        {formik.touched.text && formik.errors.text ? (
          <p className="text-red-500 text-xs mt-2">{formik.errors.text}</p>
        ) : null}

        {formik.touched.email && formik.errors.email && !formik.errors.text && (
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
