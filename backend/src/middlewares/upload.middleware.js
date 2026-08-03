/** @format */

import multer from "multer";
import path from "path";
import fs from "fs";
import crypto from "crypto";

import { PROFILE_IMAGE_TYPES } from "../types/profile.js";

const uploadPath = path.join(process.cwd(), "uploads");

const ensureDirectory = (folder) => {
  const directory = path.join(uploadPath, folder);

  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, {
      recursive: true,
    });
  }

  return directory;
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = req.uploadFolder || "temp";

    const directory = ensureDirectory(folder);

    cb(null, directory);
  },

  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);

    const filename = `${crypto.randomUUID()}${extension}`;

    cb(null, filename);
  },
});

const fileFilter = (req, file, cb) => {
  if (PROFILE_IMAGE_TYPES.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("فرمت فایل مجاز نیست."), false);
  }
};

const upload = multer({
  storage,

  fileFilter,

  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

export const uploadSingle = (fieldName, folder) => {
  return (req, res, next) => {
    req.uploadFolder = folder;

    upload.single(fieldName)(req, res, (error) => {
      if (error) {
        return next(error);
      }

      next();
    });
  };
};

export default upload;
