import { z } from "zod";

export const contactUsFormValidationSchema = z.object({
  email: z.string("الزامی است").email("آدرس ایمیلتان معتبر نیست"),
  text: z.string("الزامی است").min(12, "متن تان باید حداقل ۱۲ کارکتر باشد"),
});

