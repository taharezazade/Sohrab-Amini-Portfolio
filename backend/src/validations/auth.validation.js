/** @format */

import { z } from "zod";

/* ==========================================================
   Common Fields
========================================================== */

const id = z
  .string({
    required_error: "Administrator ID is required.",
  })
  .cuid("Invalid administrator ID.");

const username = z
  .string({
    required_error: "Username is required.",
  })
  .trim()
  .min(3, "Username must be at least 3 characters.")
  .max(30, "Username must be less than 30 characters.")
  .regex(
    /^[a-zA-Z0-9_]+$/,
    "Username can only contain letters, numbers and underscores.",
  );

const email = z
  .string({
    required_error: "Email is required.",
  })
  .trim()
  .email("Invalid email address.");

const password = z
  .string({
    required_error: "Password is required.",
  })
  .min(8, "Password must be at least 8 characters.")
  .max(100, "Password must be less than 100 characters.");

const refreshToken = z
  .string({
    required_error: "Refresh token is required.",
  })
  .min(10, "Refresh token is invalid.");

////////////////////////////////////////////////////////////
// Register
////////////////////////////////////////////////////////////

export const registerSchema = z.object({
  username,
  email,
  password,
});

////////////////////////////////////////////////////////////
// Login
////////////////////////////////////////////////////////////

export const loginSchema = z.object({
  email,
  password,
});

////////////////////////////////////////////////////////////
// Update Profile
////////////////////////////////////////////////////////////

export const updateProfileSchema = z.object({
  username: username.optional(),
  email: email.optional(),
});

////////////////////////////////////////////////////////////
// Change Password
////////////////////////////////////////////////////////////

export const changePasswordSchema = z
  .object({
    currentPassword: password,

    newPassword: password,
  })
  .refine((data) => data.currentPassword !== data.newPassword, {
    message: "New password must be different from the current password.",
    path: ["newPassword"],
  });

////////////////////////////////////////////////////////////
// Refresh Token
////////////////////////////////////////////////////////////

export const refreshTokenSchema = z.object({
  refreshToken,
});

////////////////////////////////////////////////////////////
// Params
////////////////////////////////////////////////////////////

export const authParamsSchema = z.object({
  id,
});
