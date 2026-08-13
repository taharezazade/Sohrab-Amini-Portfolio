/** @format */

import { z } from "zod";

/* =========================================================
   DEFAULT ABOUT
========================================================= */

export const DEFAULT_ABOUT = {
  title: "درباره من",

  description: "توسعه‌دهنده وب و متخصص طراحی و توسعه سیستم‌های حرفه‌ای.",

  birthYear: 1381,

  location: "تهران",

  experience: 5,
};

/* =========================================================
   UPDATE ABOUT SCHEMA
========================================================= */

export const updateAboutSchema = z
  .object({
    title: z
      .string({
        required_error: "عنوان الزامی است.",
      })
      .trim()
      .min(1, "عنوان الزامی است.")
      .max(200, "عنوان نمی‌تواند بیشتر از 200 کاراکتر باشد."),

    description: z
      .string({
        required_error: "توضیحات الزامی است.",
      })
      .trim()
      .min(20, "توضیحات باید حداقل 20 کاراکتر باشد.")
      .max(3000, "توضیحات نمی‌تواند بیشتر از 3000 کاراکتر باشد."),

    birthYear: z
      .number()
      .int("سال تولد باید عدد صحیح باشد.")
      .min(1300, "سال تولد معتبر نیست.")
      .max(1500, "سال تولد معتبر نیست.")
      .nullable()
      .optional(),

    location: z
      .string()
      .trim()
      .max(100, "محل سکونت نمی‌تواند بیشتر از 100 کاراکتر باشد.")
      .nullable()
      .optional(),

    experience: z
      .number()
      .int("سابقه باید عدد صحیح باشد.")
      .min(0, "سابقه نمی‌تواند منفی باشد.")
      .max(60, "سابقه نمی‌تواند بیشتر از 60 سال باشد.")
      .nullable()
      .optional(),
  })
  .strict();
