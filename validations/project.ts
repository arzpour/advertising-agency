import { z } from "zod";

const validThumbnailTypes = ["image/png", "image/jpeg", "image/jpg"];
const validSize = 2; // MB

export const projectSchema = z.object({
  category: z.string({ message: "دسته بندی الزامی است" }).optional(),
  name: z
    .string({ message: "نام پروژه الزامی است" })
    .min(2, { message: "نام پروژه باید بیشتر از ۲ حرف باشد" }),

  description: z.string({ message: "توضیحات الزامی است" }),
  thumbnail: z
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

  images: z
    .array(z.any())
    .optional()
    .refine(
      (files) => {
        if (!files) return true;
        const invalidFile = files.some(
          (file) => !validThumbnailTypes.includes(file.type)
        );
        if (invalidFile) {
          console.error("فرمت فایل نامعتبر است.");
          return false;
        }
        return true;
      },
      { message: `فرمت تصاویر باید ${validThumbnailTypes.join(", ")} باشد` }
    )
    .refine(
      (files) =>
        !files || files.every((file) => file.size <= validSize * 1024 * 1024),
      { message: `تصاویر باید کمتر از ${validSize}MB باشند` }
    ),
});

export type projectSchemaType = z.infer<typeof projectSchema>;
