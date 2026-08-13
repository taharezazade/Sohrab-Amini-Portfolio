/** @format */

import multer from "multer";

import { IMAGE_MIME_TYPES, DOCUMENT_MIME_TYPES } from "../config/multer.js";

/* =========================================================
   Constants
========================================================= */

const MAX_FILE_SIZE = 5 * 1024 * 1024;

/* =========================================================
   Allowed Types
========================================================= */

const ALLOWED_MIME_TYPES = [...IMAGE_MIME_TYPES, ...DOCUMENT_MIME_TYPES];

/* =========================================================
   Storage
========================================================= */

const storage = multer.memoryStorage();

/* =========================================================
   File Filter
========================================================= */

const fileFilter = (req, file, callback) => {
  if (!file) {
    const error = new Error("File is required.");

    error.code = "FILE_REQUIRED";

    return callback(error, false);
  }

  if (!ALLOWED_MIME_TYPES.includes(file.mimetype)) {
    const error = new Error(
      "Invalid file type. Supported files are JPG, PNG, WEBP, SVG, PDF, DOC and DOCX.",
    );

    error.code = "INVALID_FILE_TYPE";

    return callback(error, false);
  }

  callback(null, true);
};

/* =========================================================
   Multer
========================================================= */

const upload = multer({
  storage,

  fileFilter,

  limits: {
    fileSize: MAX_FILE_SIZE,
    files: 20,
  },
});

/* =========================================================
   Single
========================================================= */

export const uploadSingle = (fieldName = "file") => {
  return upload.single(fieldName);
};

/* =========================================================
   Multiple
========================================================= */

export const uploadMultiple = (fieldName = "files", maxCount = 20) => {
  return upload.array(fieldName, maxCount);
};

/* =========================================================
   Fields
========================================================= */

export const uploadFields = (fields = []) => {
  return upload.fields(fields);
};

/* =========================================================
   Any
========================================================= */

export const uploadAny = () => {
  return upload.any();
};

/* =========================================================
   Upload Error Handler
========================================================= */

export const handleUploadError = (error, req, res, next) => {
  if (!error) {
    return next();
  }

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

  if (error.code === "INVALID_FILE_TYPE") {
    error.statusCode = 400;

    return next(error);
  }

  if (error.code === "FILE_REQUIRED") {
    error.statusCode = 400;

    return next(error);
  }

  return next(error);
};

export default upload;
