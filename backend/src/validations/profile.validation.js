/** @format */

import { z } from "zod";

const profileBodySchema = z.object({
  firstName: z
    .string()
    .min(2, "نام باید حداقل ۲ کاراکتر باشد.")
    .max(50, "نام بیش از حد طولانی است.")
    .optional(),

  lastName: z
    .string()
    .min(2, "نام خانوادگی باید حداقل ۲ کاراکتر باشد.")
    .max(50, "نام خانوادگی بیش از حد طولانی است.")
    .optional(),

  displayName: z
    .string()
    .min(2, "نام نمایشی باید حداقل ۲ کاراکتر باشد.")
    .max(100, "نام نمایشی بیش از حد طولانی است.")
    .optional(),

  username: z
    .string()
    .min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد.")
    .max(30, "نام کاربری بیش از حد طولانی است.")
    .optional(),

  email: z.string().email("فرمت ایمیل صحیح نیست.").optional(),

  phone: z
    .string()
    .regex(/^09\d{9}$/, "شماره موبایل صحیح نیست.")
    .optional(),

  bio: z
    .string()
    .max(500, "توضیحات نباید بیشتر از ۵۰۰ کاراکتر باشد.")
    .optional(),
});

export const updateProfileSchema = z.object({
  body: profileBodySchema,

  params: z.object({}).optional(),

  query: z.object({}).optional(),
});

export const changePasswordSchema = z.object({
  body: z
    .object({
      currentPassword: z
        .string()
        .min(6, "رمز عبور فعلی باید حداقل ۶ کاراکتر باشد."),

      newPassword: z
        .string()
        .min(8, "رمز عبور جدید باید حداقل ۸ کاراکتر باشد."),

      confirmPassword: z
        .string()
        .min(8, "تکرار رمز عبور باید حداقل ۸ کاراکتر باشد."),
    })
    .refine((data) => data.newPassword === data.confirmPassword, {
      message: "رمز عبور جدید و تکرار آن یکسان نیستند.",
      path: ["confirmPassword"],
    }),

  params: z.object({}).optional(),

  query: z.object({}).optional(),
});
