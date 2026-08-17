/** @format */

import fs from "fs";
import path from "path";

import multer from "multer";

const UPLOAD_ROOT = path.join(process.cwd(), "uploads");

const PORTFOLIO_UPLOAD_PATH = path.join(UPLOAD_ROOT, "portfolio");

fs.mkdirSync(PORTFOLIO_UPLOAD_PATH, {
  recursive: true,
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PORTFOLIO_UPLOAD_PATH);
  },

  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);

    const filename =
      `${Date.now()}-${Math.round(Math.random() * 1e9)}` + extension;

    cb(null, filename);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/svg+xml",
  ];

  if (allowedTypes.includes(file.mimetype)) {
    return cb(null, true);
  }

  const error = new Error("نوع فایل تصویر مجاز نیست.");

  error.code = "INVALID_FILE_TYPE";

  return cb(error, false);
};

const multerConfig = multer({
  storage,

  fileFilter,

  limits: {
    fileSize: 5 * 1024 * 1024,

    files: 20,
  },
});

export const MAX_FILE_SIZE = 5 * 1024 * 1024;

export default multerConfig;
