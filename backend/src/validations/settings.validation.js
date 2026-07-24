/** @format */

import { z } from "zod";

const siteTitle = z
  .string({
    required_error: "Site title is required.",
  })
  .trim()
  .min(3)
  .max(120);

const siteDescription = z
  .string({
    required_error: "Site description is required.",
  })
  .trim()
  .min(20)
  .max(500);

const logo = z.string().trim().optional().or(z.literal(""));

const favicon = z.string().trim().optional().or(z.literal(""));

const resume = z.string().trim().optional().or(z.literal(""));

const id = z.string().cuid("Invalid Setting ID.");

////////////////////////////////////////////////////////////

export const createSettingSchema = z.object({
  siteTitle,
  siteDescription,
  logo,
  favicon,
  resume,
});

////////////////////////////////////////////////////////////

export const updateSettingSchema = createSettingSchema;

////////////////////////////////////////////////////////////

export const settingParamsSchema = z.object({
  id,
});
