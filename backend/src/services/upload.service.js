/** @format */

import path from "path";
import fs from "fs/promises";
import crypto from "crypto";

/**
 * =========================================================
 * Constants
 * =========================================================
 */

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const ALLOWED_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/svg+xml",
];

/**
 * =========================================================
 * Upload Service
 * =========================================================
 */

class UploadService {
  constructor() {
    this.uploadRoot = path.join(process.cwd(), "uploads");

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

  /**
   * =========================================================
   * Validate File
   * =========================================================
   */

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

  /**
   * =========================================================
   * Validate Folder
   * =========================================================
   */

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

  /**
   * =========================================================
   * Generate File Name
   * =========================================================
   */

  generateFileName(originalName) {
    const extension = path.extname(originalName || "").toLowerCase();

    const uniqueName = crypto.randomBytes(16).toString("hex");

    return `${uniqueName}${extension}`;
  }

  /**
   * =========================================================
   * Get Folder Path
   * =========================================================
   */

  getFolderPath(folder) {
    const normalizedFolder = this.validateFolder(folder);

    return path.join(this.uploadRoot, normalizedFolder);
  }

  /**
   * =========================================================
   * Upload Single File
   * =========================================================
   */

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

    return {
      fileName,
      originalName: file.originalname,
      path: `/uploads/${normalizedFolder}/${fileName}`,
      size: file.size,
      type: file.mimetype,
      folder: normalizedFolder,
    };
  }

  /**
   * =========================================================
   * Upload Multiple Files
   * =========================================================
   */

  async uploadMultiple(files, folder = "temp") {
    if (!Array.isArray(files) || files.length === 0) {
      const error = new Error("At least one file is required.");

      error.statusCode = 400;

      throw error;
    }

    const normalizedFolder = this.validateFolder(folder);

    const uploadedFiles = [];

    for (const file of files) {
      const uploadedFile = await this.upload(file, normalizedFolder);

      uploadedFiles.push(uploadedFile);
    }

    return uploadedFiles;
  }

  /**
   * =========================================================
   * Delete File
   * =========================================================
   */

  async delete(filePath) {
    if (!filePath) {
      const error = new Error("File path is required.");

      error.statusCode = 400;

      throw error;
    }

    const normalizedPath = String(filePath)
      .replace(/^[/\\]+/, "")
      .replace(/\//g, path.sep);

    if (!normalizedPath.startsWith(`uploads${path.sep}`)) {
      const error = new Error("Invalid file path.");

      error.statusCode = 400;

      throw error;
    }

    const fullPath = path.join(process.cwd(), normalizedPath);

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

  /**
   * =========================================================
   * Replace File
   * =========================================================
   */

  async replace(oldFilePath, newFile, folder = "temp") {
    if (!newFile) {
      const error = new Error("New file is required.");

      error.statusCode = 400;

      throw error;
    }

    const uploadedFile = await this.upload(newFile, folder);

    if (oldFilePath) {
      await this.delete(oldFilePath);
    }

    return uploadedFile;
  }
}

export default new UploadService();
