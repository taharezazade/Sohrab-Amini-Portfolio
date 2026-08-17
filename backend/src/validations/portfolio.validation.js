/** @format */

import { z } from "zod";

const requiredString = (field) =>
  z
    .string({
      required_error: `${field} الزامی است.`,
      invalid_type_error: `${field} باید متن باشد.`,
    })
    .trim()
    .min(1, `${field} الزامی است.`);

const optionalUrl = z
  .string()
  .trim()
  .url("آدرس GitHub معتبر نیست.")
  .optional()
  .nullable()
  .or(z.literal(""));

const url = (field) =>
  z
    .string({
      required_error: `${field} الزامی است.`,
      invalid_type_error: `${field} باید متن باشد.`,
    })
    .trim()
    .url(`${field} باید یک URL معتبر باشد.`);

const stringArray = (field) =>
  z
    .array(requiredString(field))
    .min(1, `حداقل یک ${field} وارد کنید.`);

const booleanFromMultipart = z.preprocess(
  (value) => value === true || value === "true",
  z.boolean(),
);

const numberFromMultipart = z.coerce.number().int().min(0);

/* =========================================================
   CREATE
========================================================= */

export const createPortfolioSchema = z.object({
  title: requiredString("عنوان پروژه"),
  slug: requiredString("Slug"),
  description: requiredString("توضیحات پروژه"),
  thumbnail: requiredString("تصویر اصلی"),
  projectUrl: url("لینک پروژه"),
  githubUrl: optionalUrl,
  category: requiredString("دسته‌بندی"),
  technologies: stringArray("تکنولوژی"),
  featured: booleanFromMultipart.default(false),
  order: numberFromMultipart.default(0),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]),
  challenge: requiredString("چالش پروژه"),
  client: requiredString("مشتری"),
  duration: requiredString("مدت زمان پروژه"),
  features: stringArray("ویژگی پروژه"),
  role: requiredString("نقش شما در پروژه"),
  solution: requiredString("راهکار پروژه"),
});

/* =========================================================
   UPDATE
========================================================= */

export const updatePortfolioSchema = z.object({
  title: requiredString("عنوان پروژه"),
  slug: requiredString("Slug"),
  description: requiredString("توضیحات پروژه"),
  thumbnail: requiredString("تصویر اصلی"),
  projectUrl: url("لینک پروژه"),
  githubUrl: optionalUrl,
  category: requiredString("دسته‌بندی"),
  technologies: stringArray("تکنولوژی"),
  featured: booleanFromMultipart,
  order: numberFromMultipart,
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]),
  challenge: requiredString("چالش پروژه"),
  client: requiredString("مشتری"),
  duration: requiredString("مدت زمان پروژه"),
  features: stringArray("ویژگی پروژه"),
  role: requiredString("نقش شما در پروژه"),
  solution: requiredString("راهکار پروژه"),
});

/* =========================================================
   STATUS
========================================================= */

export const updatePortfolioStatusSchema = z.object({
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]),
});

/* =========================================================
   ORDER
========================================================= */

export const updatePortfolioOrderSchema = z.object({
  order: z.coerce.number().int().min(0),
});
