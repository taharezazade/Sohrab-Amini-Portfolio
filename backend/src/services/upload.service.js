/** @format */

import path from "path";
import fs from "fs/promises";
import crypto from "crypto";

import env from "../config/env.js";

/* =========================================================
   CONSTANTS
========================================================= */

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/svg+xml",
];

/* =========================================================
   UPLOAD SERVICE
========================================================= */

class UploadService {
  constructor() {
    this.uploadRoot = path.resolve(process.cwd(), "uploads");

    this.maxFileSize = MAX_FILE_SIZE;

    this.allowedMimeTypes = ALLOWED_MIME_TYPES;

    this.allowedFolders = [
      "hero",
      "about",
      "services",
      "portfolio",
      "contact",
      "settings",
      "temp",
    ];
  }

  /* =======================================================
     VALIDATE FILE
  ======================================================= */

  validateFile(file) {
    if (!file) {
      const error = new Error("File is required.");
      error.statusCode = 400;

      throw error;
    }

    if (!this.allowedMimeTypes.includes(file.mimetype)) {
      const error = new Error(
        "Invalid file type. Only JPEG, PNG, WEBP and SVG files are allowed.",
      );

      error.statusCode = 400;

      throw error;
    }

    if (file.size > this.maxFileSize) {
      const error = new Error("File size exceeds the maximum limit of 5MB.");

      error.statusCode = 400;

      throw error;
    }

    return true;
  }

  /* =======================================================
     VALIDATE FOLDER
  ======================================================= */

  validateFolder(folder) {
    const normalizedFolder = String(folder || "temp")
      .trim()
      .toLowerCase();

    if (!this.allowedFolders.includes(normalizedFolder)) {
      const error = new Error(
        `Invalid upload folder. Allowed folders: ${this.allowedFolders.join(
          ", ",
        )}.`,
      );

      error.statusCode = 400;

      throw error;
    }

    return normalizedFolder;
  }

  /* =======================================================
     GENERATE FILE NAME
  ======================================================= */

  generateFileName(originalName) {
    const extension = path.extname(originalName || "").toLowerCase();

    const uniqueName = crypto.randomBytes(16).toString("hex");

    return `${uniqueName}${extension}`;
  }

  /* =======================================================
     GET FOLDER PATH
  ======================================================= */

  getFolderPath(folder) {
    const normalizedFolder = this.validateFolder(folder);

    return path.join(this.uploadRoot, normalizedFolder);
  }

  /* =======================================================
     PUBLIC URL
  ======================================================= */

  getPublicUrl(folder, fileName) {
    const normalizedFolder = this.validateFolder(folder);

    const baseUrl = env.API_URL || `http://localhost:${env.PORT || 5000}`;

    return `${baseUrl.replace(
      /\/$/,
      "",
    )}/uploads/${normalizedFolder}/${fileName}`;
  }

  /* =======================================================
     UPLOAD
  ======================================================= */

  async upload(file, folder = "temp") {
    this.validateFile(file);

    const normalizedFolder = this.validateFolder(folder);

    const folderPath = this.getFolderPath(normalizedFolder);

    await fs.mkdir(folderPath, {
      recursive: true,
    });

    const fileName = this.generateFileName(file.originalname);

    const filePath = path.join(folderPath, fileName);

    await fs.writeFile(filePath, file.buffer);

    const relativePath = `/uploads/${normalizedFolder}/${fileName}`;

    const url = this.getPublicUrl(normalizedFolder, fileName);

    return {
      fileName,
      originalName: file.originalname,
      path: relativePath,
      url,
      size: file.size,
      type: file.mimetype,
      folder: normalizedFolder,
    };
  }

  /* =======================================================
     UPLOAD MULTIPLE
  ======================================================= */

  async uploadMultiple(files, folder = "temp") {
    if (!Array.isArray(files) || files.length === 0) {
      const error = new Error("At least one file is required.");

      error.statusCode = 400;

      throw error;
    }

    const normalizedFolder = this.validateFolder(folder);

    const uploadedFiles = [];

    for (const file of files) {
      const uploaded = await this.upload(file, normalizedFolder);

      uploadedFiles.push(uploaded);
    }

    return uploadedFiles;
  }

  /* =======================================================
     DELETE
  ======================================================= */

  async delete(filePath) {
    if (!filePath) {
      return false;
    }

    let normalizedPath = String(filePath).trim();

    try {
      const parsedUrl = new URL(normalizedPath);

      normalizedPath = parsedUrl.pathname;
    } catch {
      // Relative path.
    }

    normalizedPath = normalizedPath
      .replace(/^[/\\]+/, "")
      .replace(/\//g, path.sep);

    if (!normalizedPath.startsWith(`uploads${path.sep}`)) {
      const error = new Error("Invalid file path.");

      error.statusCode = 400;

      throw error;
    }

    const uploadsRoot = path.resolve(process.cwd(), "uploads");

    const fullPath = path.resolve(process.cwd(), normalizedPath);

    if (!fullPath.startsWith(`${uploadsRoot}${path.sep}`)) {
      const error = new Error("Invalid file path.");

      error.statusCode = 400;

      throw error;
    }

    try {
      await fs.unlink(fullPath);

      return true;
    } catch (error) {
      if (error.code === "ENOENT") {
        return false;
      }

      throw error;
    }
  }

  /* =======================================================
     REPLACE
  ======================================================= */

  async replace(oldFilePath, newFile, folder = "temp") {
    if (!newFile) {
      const error = new Error("New file is required.");

      error.statusCode = 400;

      throw error;
    }

    const uploadedFile = await this.upload(newFile, folder);

    try {
      if (oldFilePath) {
        await this.delete(oldFilePath);
      }
    } catch (error) {
      await this.delete(uploadedFile.path);

      throw error;
    }

    return uploadedFile;
  }
}

export default new UploadService();
