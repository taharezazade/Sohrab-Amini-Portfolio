/** @format */

import path from "path";
import fs from "fs/promises";
import crypto from "crypto";

class UploadService {
  constructor() {
    this.allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/svg+xml",
    ];

    this.maxSize = 5 * 1024 * 1024; // 5MB

    this.uploadPath = path.join(process.cwd(), "uploads");
  }

  /* ============================
      Validate File
  ============================ */

  validateFile(file) {
    if (!file) {
      throw new Error("File is required");
    }

    if (!this.allowedTypes.includes(file.mimetype)) {
      throw new Error("Invalid file type");
    }

    if (file.size > this.maxSize) {
      throw new Error("File size exceeds limit");
    }

    return true;
  }

  /* ============================
      Generate File Name
  ============================ */

  generateFileName(originalName) {
    const ext = path.extname(originalName);

    const uniqueName = crypto.randomBytes(16).toString("hex");

    return `${uniqueName}${ext}`;
  }

  /* ============================
      Upload File
  ============================ */

  async upload(file) {
    this.validateFile(file);

    const fileName = this.generateFileName(file.originalname);

    const filePath = path.join(this.uploadPath, fileName);

    await fs.mkdir(this.uploadPath, {
      recursive: true,
    });

    await fs.writeFile(filePath, file.buffer);

    return {
      fileName,

      path: `/uploads/${fileName}`,

      size: file.size,

      type: file.mimetype,
    };
  }

  /* ============================
      Delete File
  ============================ */

  async delete(filePath) {
    if (!filePath) {
      return;
    }

    try {
      const fullPath = path.join(process.cwd(), filePath);

      await fs.unlink(fullPath);

      return true;
    } catch (error) {
      if (error.code === "ENOENT") {
        return false;
      }

      throw error;
    }
  }

  /* ============================
      Replace File
  ============================ */

  async replace(oldFilePath, newFile) {
    const uploadedFile = await this.upload(newFile);

    if (oldFilePath) {
      await this.delete(oldFilePath);
    }

    return uploadedFile;
  }

  /* ============================
      Multiple Upload
  ============================ */

  async uploadMultiple(files) {
    if (!Array.isArray(files)) {
      throw new Error("Files must be an array");
    }

    const uploadedFiles = await Promise.all(
      files.map((file) => this.upload(file)),
    );

    return uploadedFiles;
  }
}

export default new UploadService();
