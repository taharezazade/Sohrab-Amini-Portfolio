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

const slug = z
  .string({
    required_error: "Slug is required.",
  })
  .trim()
  .toLowerCase()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug format is invalid.");

const description = z
  .string({
    required_error: "Description is required.",
  })
  .trim()
  .min(20, "Description must be at least 20 characters.")
  .max(3000, "Description must be less than 3000 characters.");

const category = z
  .string({
    required_error: "Category is required.",
  })
  .trim()
  .min(2, "Category must be at least 2 characters.")
  .max(100, "Category must be less than 100 characters.");

const technologies = z
  .array(z.string().trim().min(1), {
    required_error: "Technologies are required.",
  })
  .min(1, "At least one technology is required.")
  .max(30);

const features = z
  .array(z.string().trim().min(1), {
    required_error: "Features are required.",
  })
  .min(1, "At least one feature is required.")
  .max(50);

const order = z.number().int().min(0).optional();

const isActive = z.boolean().optional();

const id = z
  .string({
    required_error: "Service ID is required.",
  })
  .cuid("Invalid Service ID.");

////////////////////////////////////////////////////////////
// Create Service
////////////////////////////////////////////////////////////

export const createServiceSchema = z.object({
  title,
  slug,
  description,
  category,
  technologies,
  features,
  order,
});

////////////////////////////////////////////////////////////
// Update Service
////////////////////////////////////////////////////////////

export const updateServiceSchema = z.object({
  title,
  slug,
  description,
  category,
  technologies,
  features,
  order,
  isActive,
});

////////////////////////////////////////////////////////////
// Toggle Status
////////////////////////////////////////////////////////////

export const toggleServiceStatusSchema = z.object({
  isActive: z.boolean({
    required_error: "Status is required.",
  }),
});

////////////////////////////////////////////////////////////
// Params
////////////////////////////////////////////////////////////

export const serviceParamsSchema = z.object({
  id,
});
