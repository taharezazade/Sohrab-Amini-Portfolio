/** @format */

import { z } from "zod";

/* =========================================================
   Normalize Digits
========================================================= */

const normalizeDigits = (value) => {
  if (typeof value !== "string") {
    return value;
  }

  return value
    .replace(/[۰-۹]/g, (digit) => {
      return String(digit.charCodeAt(0) - 1776);
    })
    .replace(/[٠-٩]/g, (digit) => {
      return String(digit.charCodeAt(0) - 1632);
    });
};

/* =========================================================
   Normalize Phone
========================================================= */

const normalizePhone = (value) => {
  if (typeof value !== "string") {
    return value;
  }

  let phone = normalizeDigits(value)
    .trim()
    .replace(/[\s\-()]/g, "");

  if (phone.startsWith("+98")) {
    phone = `0${phone.slice(3)}`;
  }

  if (phone.startsWith("0098")) {
    phone = `0${phone.slice(4)}`;
  }

  if (/^9\d{9}$/.test(phone)) {
    phone = `0${phone}`;
  }

  return phone;
};

/* =========================================================
   Phone Schema
========================================================= */

const phoneSchema = z
  .string({
    required_error: "Phone number is required.",
  })
  .trim()
  .transform(normalizePhone)
  .refine((value) => /^09\d{9}$/.test(value), {
    message: "Invalid Iranian mobile phone number.",
  });

/* =========================================================
   Image Schema
========================================================= */

const imageSchema = z
  .string()
  .trim()
  .max(500, "Image path is too long.")
  .optional()
  .nullable()
  .or(z.literal(""));

/* =========================================================
   ID Schema
========================================================= */

const idSchema = z.string({
  required_error: "Contact ID is required.",
});

/* =========================================================
   Create Contact
========================================================= */

export const createContactSchema = z.object({
  phone: phoneSchema,

  whatsapp: phoneSchema,

  image: imageSchema,
});

/* =========================================================
   Update Contact
========================================================= */

export const updateContactSchema = z
  .object({
    phone: phoneSchema.optional(),

    whatsapp: phoneSchema.optional(),

    image: imageSchema,
  })
  .refine(
    (data) =>
      data.phone !== undefined ||
      data.whatsapp !== undefined ||
      data.image !== undefined,
    {
      message: "At least one contact field must be provided.",
    },
  );

/* =========================================================
   Contact Params
========================================================= */

export const contactParamsSchema = z.object({
  id: idSchema,
});

/* =========================================================
   Contact Image
========================================================= */

export const contactImageSchema = z.object({
  image: imageSchema,
});

/* =========================================================
   Contact Phone
========================================================= */

export const contactPhoneSchema = z.object({
  phone: phoneSchema,
});

/* =========================================================
   Contact WhatsApp
========================================================= */

export const contactWhatsappSchema = z.object({
  whatsapp: phoneSchema,
});
