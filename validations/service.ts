import { z } from "zod";

const validThumbnailTypes = ["image/png", "image/jpeg", "image/jpg"];
const validSize = 2; // MB

export const serviceSchema = z.object({
  name: z
    .string({ message: "نام دسته بندی الزامی است" })
    .min(2, { message: "نام دسته بندی باید بیشتر از ۲ حرف باشد" }),
  description: z.string({ message: "توضیحات الزامی است" }),
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

export type serviceSchemaType = z.infer<typeof serviceSchema>;

export const editServiceSchema = z.object({
  name: z
    .string({ message: "نام پروژه الزامی است" })
    .min(2, { message: "نام پروژه باید بیشتر از ۲ حرف باشد" })
    .optional(),
  description: z.string({ message: "توضیحات الزامی است" }).optional(),
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

export type editServiceSchemaType = z.infer<typeof editServiceSchema>;
