/** @format */

import profileService from "../services/profile.service.js";
import statusCodes from "../types/statusCodes.js";

class ProfileController {
  /**
   * Get Admin Profile
   */
  async getProfile(req, res, next) {
    try {
      const adminId = req.user.id;

      const profile = await profileService.getProfile(adminId);

      return res.status(statusCodes.OK).json({
        success: true,
        data: profile,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Update Admin Profile
   */
  async updateProfile(req, res, next) {
    try {
      const adminId = req.user.id;

      const data = {
        ...req.body,
      };

      const profile = await profileService.updateProfile(
        adminId,
        data,
        req.file,
      );

      return res.status(statusCodes.OK).json({
        success: true,
        message: "پروفایل با موفقیت بروزرسانی شد.",
        data: profile,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Change Password
   */
  async changePassword(req, res, next) {
    try {
      const adminId = req.user.id;

      const result = await profileService.changePassword(adminId, req.body);

      return res.status(statusCodes.OK).json({
        success: true,
        message: "رمز عبور با موفقیت تغییر کرد.",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * Remove Profile Image
   */
  async removeImage(req, res, next) {
    try {
      const adminId = req.user.id;

      const profile = await profileService.removeImage(adminId);

      return res.status(statusCodes.OK).json({
        success: true,
        message: "تصویر پروفایل حذف شد.",
        data: profile,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new ProfileController();
