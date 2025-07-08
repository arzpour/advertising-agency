import * as Yup from "yup";

export const contactUsFormValidationSchema = Yup.object().shape({
  email: Yup.string().email("آدرس ایمیلتان معتبر نیست").required("الزامی است"),
  text: Yup.string()
    .min(12, "متن تان باید حداقل ۱۲ کارکتر باشد")
    .required("الزامی است"),
});
