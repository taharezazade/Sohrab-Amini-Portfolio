/** @format */

import { z } from "zod";

/* =========================================================
   Common Fields
========================================================= */

const title = z
  .string({
    required_error: "Title is required.",
  })
  .trim()
  .min(3, "Title must be at least 3 characters.")
  .max(120, "Title must not exceed 120 characters.");

const description = z
  .string({
    required_error: "Description is required.",
  })
  .trim()
  .min(20, "Description must be at least 20 characters.")
  .max(3000, "Description must not exceed 3000 characters.");

const birthYear = z.coerce
  .number()
  .int("Birth year must be an integer.")
  .min(1300, "Birth year is invalid.")
  .max(1500, "Birth year is invalid.")
  .optional();

const location = z
  .string()
  .trim()
  .min(2, "Location must be at least 2 characters.")
  .max(100, "Location must not exceed 100 characters.")
  .optional()
  .or(z.literal(""));

const experience = z.coerce
  .number()
  .int("Experience must be an integer.")
  .min(0, "Experience cannot be negative.")
  .max(60, "Experience is invalid.")
  .optional();

const image = z
  .string()
  .trim()
  .max(500, "Image path is too long.")
  .optional()
  .or(z.literal(""));

const id = z.string().cuid("Invalid About ID.");

/* =========================================================
   Create
========================================================= */

export const createAboutSchema = z.object({
  title,
  description,
  birthYear,
  location,
  experience,
  image,
});

/* =========================================================
   Update
   Partial update
========================================================= */

export const updateAboutSchema = z
  .object({
    title,
    description,
    birthYear,
    location,
    experience,
    image,
  })
  .partial();

/* =========================================================
   Params
========================================================= */

export const aboutParamsSchema = z.object({
  id,
});

/* =========================================================
   Image
========================================================= */

export const updateAboutImageSchema = z.object({
  image: image,
});
