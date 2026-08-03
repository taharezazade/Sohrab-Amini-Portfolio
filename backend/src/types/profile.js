/** @format */

// Profile Image Types

export const PROFILE_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
];

// Profile Image Extensions

export const PROFILE_IMAGE_EXTENSIONS = [
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".heic",
  ".heif",
];

// Profile Upload Config

export const PROFILE_UPLOAD_CONFIG = {
  folder: "profile",

  maxSize: 5 * 1024 * 1024,

  allowedTypes: PROFILE_IMAGE_TYPES,

  allowedExtensions: PROFILE_IMAGE_EXTENSIONS,
};

// Profile Fields

export const PROFILE_FIELDS = [
  "firstName",
  "lastName",
  "displayName",
  "username",
  "email",
  "phone",
  "bio",
  "image",
];

// Sensitive Fields

export const PROFILE_PRIVATE_FIELDS = ["password"];

// Default Profile Response

export const PROFILE_RESPONSE_FIELDS = {
  id: true,

  firstName: true,

  lastName: true,

  displayName: true,

  username: true,

  email: true,

  phone: true,

  bio: true,

  image: true,

  role: true,

  createdAt: true,

  updatedAt: true,
};
