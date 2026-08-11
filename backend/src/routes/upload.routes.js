/** @format */

import { Router } from "express";

import uploadController from "../controllers/upload.controller.js";

import {
  uploadSingle,
  uploadMultiple,
  handleUploadError,
} from "../middlewares/upload.middleware.js";

const router = Router();

/**
 * =========================================================
 * Upload Single File
 * =========================================================
 *
 * POST /api/upload
 *
 * Content-Type:
 * multipart/form-data
 *
 * Fields:
 *
 * file   -> File
 * folder -> Text
 *
 * Example:
 *
 * file   = profile.webp
 * folder = about
 */

router.post(
  "/",
  uploadSingle("file"),
  handleUploadError,
  uploadController.uploadSingle,
);

/**
 * =========================================================
 * Upload Multiple Files
 * =========================================================
 *
 * POST /api/upload/multiple
 *
 * Content-Type:
 * multipart/form-data
 *
 * Fields:
 *
 * files  -> Multiple Files
 * folder -> Text
 *
 * Example:
 *
 * files  = image-1.webp
 * files  = image-2.webp
 * folder = portfolio
 */

router.post(
  "/multiple",
  uploadMultiple("files", 20),
  handleUploadError,
  uploadController.uploadMultiple,
);

/**
 * =========================================================
 * Replace File
 * =========================================================
 *
 * PUT /api/upload/replace
 *
 * Content-Type:
 * multipart/form-data
 *
 * Fields:
 *
 * file         -> New File
 * oldFilePath  -> Old File Path
 * folder       -> Target Folder
 *
 * Example:
 *
 * file         = new-image.webp
 * oldFilePath  = /uploads/about/old-image.webp
 * folder       = about
 */

router.put(
  "/replace",
  uploadSingle("file"),
  handleUploadError,
  uploadController.replaceFile,
);

/**
 * =========================================================
 * Delete File
 * =========================================================
 *
 * DELETE /api/upload
 *
 * Content-Type:
 * application/json
 *
 * Body:
 *
 * {
 *   "path": "/uploads/about/example.webp"
 * }
 */

router.delete("/", uploadController.deleteFile);

export default router;
