/** @format */

import uploadService from "../services/upload.service.js";

class UploadController {
  /**
   * =========================================================
   * Upload Single
   * =========================================================
   */

  async uploadSingle(req, res, next) {
    try {
      const file = req.file;

      const folder = req.body.folder || "temp";

      const uploadedFile = await uploadService.upload(file, folder);

      return res.status(201).json({
        success: true,
        message: "File uploaded successfully.",
        data: uploadedFile,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * =========================================================
   * Upload Multiple
   * =========================================================
   */

  async uploadMultiple(req, res, next) {
    try {
      const files = req.files;

      const folder = req.body.folder || "temp";

      const uploadedFiles = await uploadService.uploadMultiple(files, folder);

      return res.status(201).json({
        success: true,
        message: "Files uploaded successfully.",
        data: uploadedFiles,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * =========================================================
   * Replace File
   * =========================================================
   */

  async replaceFile(req, res, next) {
    try {
      const { oldFilePath } = req.body;

      const folder = req.body.folder || "temp";

      const newFile = req.file;

      const uploadedFile = await uploadService.replace(
        oldFilePath,
        newFile,
        folder,
      );

      return res.status(200).json({
        success: true,
        message: "File replaced successfully.",
        data: uploadedFile,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * =========================================================
   * Delete File
   * =========================================================
   */

  async deleteFile(req, res, next) {
    try {
      const { path } = req.body;

      const result = await uploadService.delete(path);

      return res.status(200).json({
        success: true,
        message: "File deleted successfully.",
        data: {
          deleted: result,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new UploadController();
