import { z } from "zod";

const validThumbnailTypes = ["image/png", "image/jpeg", "image/jpg"];
const validSize = 2; // MB

export const categorySchema = z.object({
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

export type categorySchemaType = z.infer<typeof categorySchema>;
