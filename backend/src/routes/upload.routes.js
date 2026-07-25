/** @format */

import { Router } from "express";

import uploadController from "../controllers/upload.controller.js";

import uploadMiddleware from "../middlewares/upload.middleware.js";

const router = Router();

/* ============================
    Upload Single File
============================ */

/*
    Upload one image/file

    Example:
    Hero Image
    About Image
    Portfolio Cover
*/
router.post(
  "/",
  uploadMiddleware.single("file"),
  uploadController.uploadSingle,
);

/* ============================
    Upload Multiple Files
============================ */

/*
    Upload multiple images

    Example:
    Portfolio Gallery
*/
router.post(
  "/multiple",
  uploadMiddleware.array("files"),
  uploadController.uploadMultiple,
);

/* ============================
    Replace File
============================ */

/*
    Replace old file with new one
*/
router.put(
  "/replace",
  uploadMiddleware.single("file"),
  uploadController.replaceFile,
);

/* ============================
    Delete File
============================ */

/*
    Delete uploaded file
*/
router.delete("/", uploadController.deleteFile);

export default router;
