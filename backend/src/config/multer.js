/** @format */

import multer from "multer";

/* =========================================================
   Constants
========================================================= */

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export const IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/svg+xml",
];

export const DOCUMENT_MIME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const ALLOWED_MIME_TYPES = [...IMAGE_MIME_TYPES, ...DOCUMENT_MIME_TYPES];

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
   Multer Instance
========================================================= */

const multerConfig = multer({
  storage,

  fileFilter,

  limits: {
    fileSize: MAX_FILE_SIZE,
    files: 20,
  },
});

/* =========================================================
   Export
========================================================= */

export default multerConfig;
