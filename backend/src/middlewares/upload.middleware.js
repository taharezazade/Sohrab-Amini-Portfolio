/** @format */

import multer from "multer";

/**
 * =========================================================
 * Constants
 * =========================================================
 */

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/svg+xml",
];

/**
 * =========================================================
 * Storage
 * =========================================================
 *
 * Files are temporarily stored in memory.
 *
 * The actual file will be written to:
 *
 * uploads/
 *
 * by upload.service.js
 */

const storage = multer.memoryStorage();

/**
 * =========================================================
 * File Filter
 * =========================================================
 */

const fileFilter = (req, file, cb) => {
  if (!file) {
    return cb(new multer.MulterError("LIMIT_UNEXPECTED_FILE"), false);
  }

  if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
    const error = new Error(
      "Invalid file type. Only JPEG, PNG, WEBP and SVG files are allowed.",
    );

    error.code = "INVALID_FILE_TYPE";

    return cb(error, false);
  }

  return cb(null, true);
};

/**
 * =========================================================
 * Multer Instance
 * =========================================================
 */

const upload = multer({
  storage,

  fileFilter,

  limits: {
    fileSize: MAX_FILE_SIZE,
    files: 20,
  },
});

/**
 * =========================================================
 * Upload Single
 * =========================================================
 */

export const uploadSingle = (fieldName = "file") => {
  return upload.single(fieldName);
};

/**
 * =========================================================
 * Upload Multiple
 * =========================================================
 */

export const uploadMultiple = (fieldName = "files", maxCount = 20) => {
  return upload.array(fieldName, maxCount);
};

/**
 * =========================================================
 * Upload Fields
 * =========================================================
 */

export const uploadFields = (fields = []) => {
  return upload.fields(fields);
};

/**
 * =========================================================
 * Upload Any
 * =========================================================
 */

export const uploadAny = () => {
  return upload.any();
};

/**
 * =========================================================
 * Upload Error Handler
 * =========================================================
 */

export const handleUploadError = (error, req, res, next) => {
  if (!error) {
    return next();
  }

  /**
   * ---------------------------------------------------------
   * Multer Errors
   * ---------------------------------------------------------
   */

  if (error instanceof multer.MulterError) {
    switch (error.code) {
      case "LIMIT_FILE_SIZE":
        error.statusCode = 400;
        error.message = "File size exceeds the maximum limit of 5MB.";
        break;

      case "LIMIT_FILE_COUNT":
        error.statusCode = 400;
        error.message = "Too many files uploaded.";
        break;

      case "LIMIT_UNEXPECTED_FILE":
        error.statusCode = 400;
        error.message = "Unexpected file field.";
        break;

      case "LIMIT_PART_COUNT":
        error.statusCode = 400;
        error.message = "Too many multipart form parts.";
        break;

      case "LIMIT_FIELD_KEY":
        error.statusCode = 400;
        error.message = "Field name is too long.";
        break;

      case "LIMIT_FIELD_VALUE":
        error.statusCode = 400;
        error.message = "Field value is too large.";
        break;

      case "LIMIT_FIELD_COUNT":
        error.statusCode = 400;
        error.message = "Too many fields submitted.";
        break;

      default:
        error.statusCode = 400;
        error.message = "File upload failed.";
        break;
    }

    return next(error);
  }

  /**
   * ---------------------------------------------------------
   * Invalid File Type
   * ---------------------------------------------------------
   */

  if (error.code === "INVALID_FILE_TYPE") {
    error.statusCode = 400;

    return next(error);
  }

  /**
   * ---------------------------------------------------------
   * Unknown Upload Error
   * ---------------------------------------------------------
   */

  return next(error);
};

/**
 * =========================================================
 * Export
 * =========================================================
 */

export default upload;
