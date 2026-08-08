/** @format */

import multer from "multer";

/* ============================
   Storage
============================ */

const storage = multer.memoryStorage();

/* ============================
   Allowed File Types
============================ */

const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/svg+xml"];

/* ============================
   File Filter
============================ */

const fileFilter = (req, file, cb) => {
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);

    return;
  }

  cb(new Error("فرمت فایل مجاز نیست."), false);
};

/* ============================
   Multer
============================ */

const upload = multer({
  storage,

  fileFilter,

  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

/* ============================
   Upload Single
============================ */

export const uploadSingle = (fieldName = "file") => {
  return upload.single(fieldName);
};

/* ============================
   Upload Multiple
============================ */

export const uploadMultiple = (fieldName = "files") => {
  return upload.array(fieldName);
};

export default upload;
