import { z } from "zod";

export const contactUsFormValidationSchema = z.object({
  phoneNumber: z.string("الزامی است"),
  message: z.string("الزامی است").min(12, "متن تان باید حداقل ۱۲ کارکتر باشد"),
});

export type contactUsFormValidationSchemaType = z.infer<
  typeof contactUsFormValidationSchema
>;
