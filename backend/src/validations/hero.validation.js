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

const subtitle = z
  .string({
    required_error: "Subtitle is required.",
  })
  .trim()
  .min(3, "Subtitle must be at least 3 characters.")
  .max(200, "Subtitle must be less than 200 characters.");

const description = z
  .string({
    required_error: "Description is required.",
  })
  .trim()
  .min(20, "Description must be at least 20 characters.")
  .max(1000, "Description must be less than 1000 characters.");

const image = z
  .string({
    required_error: "Hero image is required.",
  })
  .trim()
  .min(1, "Image is required.");

const resume = z.string().trim().optional().or(z.literal("")).nullable();

const isActive = z.boolean().optional();

const id = z
  .string({
    required_error: "Hero ID is required.",
  })
  .cuid("Invalid Hero ID.");

////////////////////////////////////////////////////////////
// Create Hero
////////////////////////////////////////////////////////////

export const createHeroSchema = z.object({
  title,
  subtitle,
  description,
  image,
  resume,
});

////////////////////////////////////////////////////////////
// Update Hero
////////////////////////////////////////////////////////////

export const updateHeroSchema = z.object({
  title,
  subtitle,
  description,
  image,
  resume,
  isActive,
});

////////////////////////////////////////////////////////////
// Toggle Hero Status
////////////////////////////////////////////////////////////

export const toggleHeroStatusSchema = z.object({
  isActive: z.boolean({
    required_error: "Hero status is required.",
  }),
});

////////////////////////////////////////////////////////////
// Hero Params
////////////////////////////////////////////////////////////

export const heroParamsSchema = z.object({
  id,
});
