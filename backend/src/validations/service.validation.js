/** @format */

import { z } from "zod";

/* =========================================================
   HELPERS
========================================================= */

const optionalString = (max, message) =>
  z.string().trim().max(max, message).optional().nullable();

const stringArray = z
  .array(
    z
      .string()
      .trim()
      .min(1, "مقدار آرایه نمی‌تواند خالی باشد.")
      .max(100, "مقدار بیش از حد مجاز طولانی است."),
  )
  .default([]);

/* =========================================================
   CREATE
========================================================= */

export const createServiceSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, "عنوان سرویس الزامی است.")
    .max(150, "عنوان سرویس نمی‌تواند بیشتر از 150 کاراکتر باشد."),

  shortDescription: optionalString(
    300,
    "توضیح کوتاه نمی‌تواند بیشتر از 300 کاراکتر باشد.",
  ),

  description: z
    .string()
    .trim()
    .min(10, "توضیحات سرویس باید حداقل 10 کاراکتر باشد.")
    .max(5000, "توضیحات سرویس نمی‌تواند بیشتر از 5000 کاراکتر باشد."),

  /*
   * نام آیکون Iconsax
   *
   * مثال:
   * Code
   * Code1
   * Monitor
   * Global
   */
  icon: z
    .string()
    .trim()
    .max(100, "نام آیکون نامعتبر است.")
    .optional()
    .nullable(),

  features: stringArray,

  category: optionalString(
    100,
    "دسته‌بندی نمی‌تواند بیشتر از 100 کاراکتر باشد.",
  ),

  technologies: stringArray,

  color: optionalString(50, "رنگ نامعتبر است."),

  order: z
    .number()
    .int("ترتیب نمایش باید عدد صحیح باشد.")
    .min(0, "ترتیب نمایش نمی‌تواند منفی باشد.")
    .default(0),

  isActive: z.boolean().default(true),
});

/* =========================================================
   UPDATE
========================================================= */

export const updateServiceSchema = createServiceSchema.partial();

/* =========================================================
   REORDER
========================================================= */

export const reorderServicesSchema = z.object({
  items: z
    .array(
      z.object({
        id: z.string().trim().min(1, "شناسه سرویس الزامی است."),

        order: z.number().int().min(0),
      }),
    )
    .min(1, "حداقل یک سرویس برای مرتب‌سازی الزامی است."),
});

/* =========================================================
   TECHNOLOGY SEARCH
========================================================= */

export const technologySearchSchema = z.object({
  q: z
    .string()
    .trim()
    .min(1, "عبارت جستجو الزامی است.")
    .max(100, "عبارت جستجو بیش از حد طولانی است."),
});

/* =========================================================
   DEFAULT EXPORT
========================================================= */

export default {
  createServiceSchema,
  updateServiceSchema,
  reorderServicesSchema,
  technologySearchSchema,
};
