import { z } from "zod";

const validThumbnailTypes = ["image/png", "image/jpeg", "image/jpg"];
const validSize = 2; // MB

export const customerSchema = z.object({
  name: z
    .string({ message: "نام دسته بندی الزامی است" })
    .min(2, { message: "نام دسته بندی باید بیشتر از ۲ حرف باشد" }),
  icon: z
    .any()
    .optional()
    .refine((file) => !file || validThumbnailTypes.includes(file.type), {
      message: `فرمت عکس باید ${validThumbnailTypes} باشد`,
    })
    .refine(
      (file) =>
        !file || validSize * Math.pow(10, 6) >= Number(file.size || Infinity),
      { message: "سایز عکس باید 2 مگابایت باشد" }
    ),
});

export type customerSchemaType = z.infer<typeof customerSchema>;

export const editCustomerSchema = z.object({
  name: z
    .string({ message: "نام پروژه الزامی است" })
    .min(2, { message: "نام پروژه باید بیشتر از ۲ حرف باشد" })
    .optional(),
  icon: z
    .any()
    .nullable()
    .optional()
    .refine(
      (file) =>
        !file ||
        !(file instanceof File) ||
        validThumbnailTypes.includes(file.type),
      {
        message: `فرمت عکس باید ${validThumbnailTypes.join("، ")} باشد`,
      }
    )
    .refine(
      (file) =>
        !file ||
        !(file instanceof File) ||
        file.size <= validSize * 1024 * 1024,
      {
        message: `تصویر باید کمتر از ${validSize}MB باشد`,
      }
    ),
});

export type editCustomerSchemaType = z.infer<typeof editCustomerSchema>;
