/** @format */

import { z } from "zod";

/**
 * =========================================================
 * Common Fields
 * =========================================================
 */

/**
 * Hero Title
 */
const title = z
  .string({
    required_error: "Title is required.",
    invalid_type_error: "Title must be a string.",
  })
  .trim()
  .min(3, "Title must be at least 3 characters.")
  .max(120, "Title must be less than 120 characters.");

/**
 * Hero Subtitle
 */
const subtitle = z
  .string({
    required_error: "Subtitle is required.",
    invalid_type_error: "Subtitle must be a string.",
  })
  .trim()
  .min(3, "Subtitle must be at least 3 characters.")
  .max(200, "Subtitle must be less than 200 characters.");

/**
 * Hero Description
 */
const description = z
  .string({
    required_error: "Description is required.",
    invalid_type_error: "Description must be a string.",
  })
  .trim()
  .min(20, "Description must be at least 20 characters.")
  .max(1000, "Description must be less than 1000 characters.");

/**
 * Hero Image
 */
const image = z
  .string({
    required_error: "Hero image is required.",
    invalid_type_error: "Hero image must be a string.",
  })
  .trim()
  .min(1, "Hero image is required.");

/**
 * Optional nullable string.
 *
 * Converts:
 * ""
 * undefined
 * null
 *
 * into a safe nullable value.
 */
const nullableString = (message) =>
  z
    .string({
      invalid_type_error: message,
    })
    .trim()
    .optional()
    .nullable()
    .transform((value) => {
      if (value === undefined || value === null || value === "") {
        return null;
      }

      return value;
    });

/**
 * Resume
 */
const resume = nullableString("Resume must be a string.");

/**
 * Primary Button Text
 */
const primaryButtonText = nullableString(
  "Primary button text must be a string.",
);

/**
 * Primary Button Link
 */
const primaryButtonLink = nullableString(
  "Primary button link must be a string.",
);

/**
 * Secondary Button Text
 */
const secondaryButtonText = nullableString(
  "Secondary button text must be a string.",
);

/**
 * Secondary Button Link
 */
const secondaryButtonLink = nullableString(
  "Secondary button link must be a string.",
);

/**
 * SEO Title
 */
const seoTitle = nullableString("SEO title must be a string.");

/**
 * SEO Description
 */
const seoDescription = nullableString("SEO description must be a string.");

/**
 * Hero Active Status
 */
const isActive = z.boolean({
  invalid_type_error: "Hero status must be a boolean.",
});

/**
 * Hero ID
 */
const id = z
  .string({
    required_error: "Hero ID is required.",
    invalid_type_error: "Hero ID must be a string.",
  })
  .cuid("Invalid Hero ID.");

/**
 * =========================================================
 * Create Hero
 * =========================================================
 *
 * POST /api/hero
 */
export const createHeroSchema = z
  .object({
    title,
    subtitle,
    description,
    image,

    resume,

    primaryButtonText,
    primaryButtonLink,

    secondaryButtonText,
    secondaryButtonLink,

    seoTitle,
    seoDescription,
  })
  .strict();

/**
 * =========================================================
 * Update Hero
 * =========================================================
 *
 * PUT /api/hero
 */
export const updateHeroSchema = z
  .object({
    title,
    subtitle,
    description,
    image,

    resume,

    primaryButtonText,
    primaryButtonLink,

    secondaryButtonText,
    secondaryButtonLink,

    seoTitle,
    seoDescription,

    isActive: isActive.optional(),
  })
  .strict();

/**
 * =========================================================
 * Toggle Hero Status
 * =========================================================
 *
 * PATCH /api/hero/status
 */
export const toggleHeroStatusSchema = z
  .object({
    isActive: z.boolean({
      required_error: "Hero status is required.",
      invalid_type_error: "Hero status must be a boolean.",
    }),
  })
  .strict();

/**
 * =========================================================
 * Hero Params
 * =========================================================
 *
 * GET /api/hero/:id
 */
export const heroParamsSchema = z
  .object({
    id,
  })
  .strict();
