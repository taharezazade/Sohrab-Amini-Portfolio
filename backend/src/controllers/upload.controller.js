/** @format */

import uploadService from "../services/upload.service.js";

class UploadController {
  /* ============================
      Upload Single File
  ============================ */

  async uploadSingle(req, res, next) {
    try {
      const file = req.file;

      const uploadedFile = await uploadService.upload(file);

      return res.status(201).json({
        success: true,

        message: "File uploaded successfully",

        data: uploadedFile,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Upload Multiple Files
  ============================ */

  async uploadMultiple(req, res, next) {
    try {
      const files = req.files;

      const uploadedFiles = await uploadService.uploadMultiple(files);

      return res.status(201).json({
        success: true,

        message: "Files uploaded successfully",

        data: uploadedFiles,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Delete File
  ============================ */

  async deleteFile(req, res, next) {
    try {
      const { path } = req.body;

      const result = await uploadService.delete(path);

      return res.status(200).json({
        success: true,

        message: "File deleted successfully",

        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  /* ============================
      Replace File
  ============================ */

  async replaceFile(req, res, next) {
    try {
      const { oldFilePath } = req.body;

      const newFile = req.file;

      const uploadedFile = await uploadService.replace(oldFilePath, newFile);

      return res.status(200).json({
        success: true,

        message: "File replaced successfully",

        data: uploadedFile,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new UploadController();
