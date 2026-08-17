/** @format */

import multer from "multer";
import fs from "fs";
import path from "path";

/* =========================================================
   Upload Configuration
========================================================= */

const UPLOAD_ROOT = path.join(process.cwd(), "uploads");

/* =========================================================
   Ensure Directory
========================================================= */

const ensureDirectory = (directory) => {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, {
      recursive: true,
    });
  }
};

/* =========================================================
   Allowed Image Types
========================================================= */

const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/svg+xml",
];

/* =========================================================
   Storage
========================================================= */

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folder = req.uploadFolder || "temp";

    const destination = path.join(UPLOAD_ROOT, folder);

    ensureDirectory(destination);

    cb(null, destination);
  },

  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);

    const basename = path
      .basename(file.originalname, extension)
      .replace(/[^a-zA-Z0-9-_]/g, "-")
      .replace(/-+/g, "-")
      .toLowerCase();

    const timestamp = Date.now();

    cb(null, `${basename}-${timestamp}${extension.toLowerCase()}`);
  },
});

/* =========================================================
   File Filter
========================================================= */

const fileFilter = (req, file, cb) => {
  if (!ALLOWED_IMAGE_TYPES.includes(file.mimetype)) {
    const error = new Error(
      "Invalid file type. Only JPEG, PNG, WebP and SVG images are allowed.",
    );

    error.code = "INVALID_FILE_TYPE";

    return cb(error, false);
  }

  cb(null, true);
};

/* =========================================================
   Multer Instance
========================================================= */

const upload = multer({
  storage,

  limits: {
    fileSize: 5 * 1024 * 1024,
  },

  fileFilter,
});

/* =========================================================
   Folder Middleware
========================================================= */

export const setUploadFolder = (folder) => {
  return (req, res, next) => {
    req.uploadFolder = folder;
    next();
  };
};

/* =========================================================
   Single Upload
========================================================= */

export const uploadSingle = (fieldName, folder = "temp") => {
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

/* =========================================================
   Multiple Upload
========================================================= */

export const uploadMultiple = (fieldName, maxCount = 10, folder = "temp") => {
  return (req, res, next) => {
    req.uploadFolder = folder;

    upload.array(fieldName, maxCount)(req, res, (error) => {
      if (error) {
        return next(error);
      }

      next();
    });
  };
};

/* =========================================================
   Fields Upload
========================================================= */

export const uploadFields = (fields, folder = "temp") => {
  return (req, res, next) => {
    req.uploadFolder = folder;

    upload.fields(fields)(req, res, (error) => {
      if (error) {
        return next(error);
      }

      next();
    });
  };
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
        return res.status(400).json({
          success: false,
          statusCode: 400,
          message: "File size must not exceed 5MB.",
          error: {
            code: error.code,
          },
        });

      case "LIMIT_FILE_COUNT":
        return res.status(400).json({
          success: false,
          statusCode: 400,
          message: "Too many files uploaded.",
          error: {
            code: error.code,
          },
        });

      case "LIMIT_UNEXPECTED_FILE":
        return res.status(400).json({
          success: false,
          statusCode: 400,
          message: "Unexpected file field.",
          error: {
            code: error.code,
          },
        });

      default:
        return res.status(400).json({
          success: false,
          statusCode: 400,
          message: error.message || "File upload failed.",
          error: {
            code: error.code,
          },
        });
    }
  }

  if (error.code === "INVALID_FILE_TYPE") {
    return res.status(400).json({
      success: false,
      statusCode: 400,
      message: error.message,
      error: {
        code: error.code,
      },
    });
  }

  return next(error);
};

/* =========================================================
   Export Default
========================================================= */

export default upload;
