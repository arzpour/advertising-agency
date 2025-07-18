import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .min(5, { message: "نام کاربری باید بیشتر از ۵ کاراکتر باشد" })
    .refine(
      (value) => {
        const isPhone = /^09\d{9}$/.test(value as string);
        const isUserName = /^[a-zA-Z0-9_]{3,}$/.test(value as string);

        return isPhone || isUserName;
      },
      { message: "نام کاربری یا شماره تلفن معتبر نیست" }
    ),
  password: z
    .string()
    .min(5, { message: "رمز عبور باید بیشتر از ۵ کاراکتر باشد" }),
});

export type loginSchemaType = z.infer<typeof loginSchema>;
