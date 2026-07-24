/** @format */

import { z } from "zod";

/* =========================================
   Common Fields
========================================= */

const title = z
  .string({
    required_error: "Title is required.",
  })
  .trim()
  .min(3, "Title must be at least 3 characters.")
  .max(120, "Title must be less than 120 characters.");

const description = z
  .string({
    required_error: "Description is required.",
  })
  .trim()
  .min(20, "Description must be at least 20 characters.")
  .max(3000, "Description must be less than 3000 characters.");

const birthYear = z
  .number()
  .int()
  .min(1300, "Birth year is invalid.")
  .max(1500, "Birth year is invalid.")
  .optional();

const location = z
  .string()
  .trim()
  .min(2, "Location must be at least 2 characters.")
  .max(100, "Location must be less than 100 characters.")
  .optional()
  .or(z.literal(""));

const experience = z
  .number()
  .int()
  .min(0, "Experience cannot be negative.")
  .max(60, "Experience is invalid.")
  .optional();

const image = z.string().trim().optional().or(z.literal(""));

const id = z
  .string({
    required_error: "About ID is required.",
  })
  .cuid("Invalid About ID.");

////////////////////////////////////////////////////////////
// Create About
////////////////////////////////////////////////////////////

export const createAboutSchema = z.object({
  title,
  description,
  birthYear,
  location,
  experience,
  image,
});

////////////////////////////////////////////////////////////
// Update About
////////////////////////////////////////////////////////////

export const updateAboutSchema = z.object({
  title,
  description,
  birthYear,
  location,
  experience,
  image,
});

////////////////////////////////////////////////////////////
// Params
////////////////////////////////////////////////////////////

export const aboutParamsSchema = z.object({
  id,
});
