/** @format */

import { z } from "zod";

/**
 * =========================================================
 * Common Fields
 * =========================================================
 */

const optionalString = (max = 500) =>
  z.string().trim().max(max).optional().or(z.literal(""));

/**
 * =========================================================
 * General
 * =========================================================
 */

const siteName = z
  .string({
    required_error: "Site name is required.",
  })
  .trim()
  .min(2, "Site name must be at least 2 characters.")
  .max(100, "Site name must not exceed 100 characters.");

const siteTitle = z
  .string({
    required_error: "Site title is required.",
  })
  .trim()
  .min(2, "Site title must be at least 2 characters.")
  .max(200, "Site title must not exceed 200 characters.");

const description = z
  .string({
    required_error: "Description is required.",
  })
  .trim()
  .min(2, "Description must be at least 2 characters.")
  .max(2000, "Description must not exceed 2000 characters.");

/**
 * =========================================================
 * Contact
 * =========================================================
 *
 * Supported:
 *
 * 09121234567
 * +989121234567
 * 00989121234567
 *
 */

const phoneRegex = /^(?:\+98|0098|0)?9\d{9}$/;

const phone = z
  .string()
  .trim()
  .regex(phoneRegex, "Invalid phone number.")
  .optional()
  .or(z.literal(""));

const email = z
  .string()
  .trim()
  .email("Invalid email.")
  .optional()
  .or(z.literal(""));

/**
 * =========================================================
 * Branding
 * =========================================================
 */

const logo = optionalString(500);

const favicon = optionalString(500);

/**
 * =========================================================
 * SEO
 * =========================================================
 */

const metaTitle = optionalString(200);

const metaDescription = optionalString(500);

const keywords = optionalString(1000);

const canonicalUrl = z
  .string()
  .trim()
  .url("Invalid canonical URL.")
  .optional()
  .or(z.literal(""));

/**
 * =========================================================
 * Social
 * =========================================================
 */

const instagram = optionalString(500);

const linkedin = optionalString(500);

const github = optionalString(500);

const telegram = optionalString(500);

const twitter = optionalString(500);

const whatsapp = optionalString(500);

/**
 * =========================================================
 * Security
 * =========================================================
 */

const maintenanceMode = z.boolean().optional();

const twoFactor = z.boolean().optional();

const allowRegistration = z.boolean().optional();

/**
 * =========================================================
 * Create Settings
 * =========================================================
 */

export const createSettingsSchema = z.object({
  siteName,

  siteTitle,

  description,

  phone,

  email,

  logo,

  favicon,

  metaTitle,

  metaDescription,

  keywords,

  canonicalUrl,

  instagram,

  linkedin,

  github,

  telegram,

  twitter,

  whatsapp,

  maintenanceMode,

  twoFactor,

  allowRegistration,
});

/**
 * =========================================================
 * Update Settings
 * =========================================================
 */

export const updateSettingsSchema = createSettingsSchema.partial();

/**
 * =========================================================
 * Settings ID Params
 * =========================================================
 */

export const settingsParamsSchema = z.object({
  id: z.string().cuid("Invalid Settings ID."),
});

/**
 * =========================================================
 * Update Security
 * =========================================================
 */

export const updateSecuritySettingsSchema = z.object({
  maintenanceMode: z.boolean().optional(),

  twoFactor: z.boolean().optional(),

  allowRegistration: z.boolean().optional(),
});

/**
 * =========================================================
 * Update Branding
 * =========================================================
 */

export const updateBrandingSchema = z.object({
  logo,

  favicon,
});

/**
 * =========================================================
 * Update SEO
 * =========================================================
 */

export const updateSeoSchema = z.object({
  metaTitle,

  metaDescription,

  keywords,

  canonicalUrl,
});

/**
 * =========================================================
 * Update Social
 * =========================================================
 */

export const updateSocialSchema = z.object({
  instagram,

  linkedin,

  github,

  telegram,

  twitter,

  whatsapp,
});
