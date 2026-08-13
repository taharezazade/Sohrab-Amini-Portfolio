/** @format */

import { Router } from "express";

import uploadController from "../controllers/upload.controller.js";

import {
  uploadSingle,
  uploadMultiple,
  handleUploadError,
} from "../middlewares/upload.middleware.js";

const router = Router();

/* =========================================================
   Upload Single File
   POST /api/upload
========================================================= */

router.post(
  "/",
  uploadSingle("file"),
  handleUploadError,
  uploadController.uploadSingle,
);

/* =========================================================
   Upload Multiple Files
   POST /api/upload/multiple
========================================================= */

router.post(
  "/multiple",
  uploadMultiple("files", 20),
  handleUploadError,
  uploadController.uploadMultiple,
);

/* =========================================================
   Replace Existing File
   PUT /api/upload/replace
========================================================= */

router.put(
  "/replace",
  uploadSingle("file"),
  handleUploadError,
  uploadController.replaceFile,
);

/* =========================================================
   Delete File
   DELETE /api/upload
========================================================= */

router.delete("/", uploadController.deleteFile);

/* =========================================================
   Export Router
========================================================= */

export default router;
