/** @format */

import bcrypt from "bcrypt";

import profileRepository from "../repositories/profile.repository.js";
import imageService from "./image.service.js";

import { deleteFile } from "../utils/file.js";

class ProfileService {
  /**
   * Get Admin Profile
   */
  async getProfile(adminId) {
    const admin = await profileRepository.findById(adminId);

    if (!admin) {
      throw new Error("پروفایل مدیر پیدا نشد.");
    }

    const { password, ...profile } = admin;

    return profile;
  }

  /**
   * Update Admin Profile
   *
   * data:
   * {
   *  firstName,
   *  lastName,
   *  displayName,
   *  username,
   *  email,
   *  phone,
   *  bio
   * }
   *
   * file:
   * multer image
   */
  async updateProfile(adminId, data, file) {
    const admin = await profileRepository.findById(adminId);

    if (!admin) {
      throw new Error("مدیر پیدا نشد.");
    }

    let imagePath = admin.image;

    /*
      New Image Upload
    */
    if (file) {
      const isValid = imageService.validateMimeType(file.mimetype);

      if (!isValid) {
        throw new Error("فرمت تصویر مجاز نیست.");
      }

      const newImage = await imageService.processImage(file, "profile");

      /*
        Delete old image
      */
      if (admin.image) {
        await imageService.removeImage(admin.image);
      }

      imagePath = newImage;
    }

    const updated = await profileRepository.update(adminId, {
      ...data,
      image: imagePath,
    });

    const { password, ...profile } = updated;

    return profile;
  }

  /**
   * Change Password
   */
  async changePassword(adminId, data) {
    const { currentPassword, newPassword, confirmPassword } = data;

    if (!currentPassword || !newPassword || !confirmPassword) {
      throw new Error("تمام فیلدهای رمز عبور الزامی هستند.");
    }

    if (newPassword !== confirmPassword) {
      throw new Error("تکرار رمز عبور صحیح نیست.");
    }

    const admin = await profileRepository.findByIdWithPassword(adminId);

    if (!admin) {
      throw new Error("مدیر پیدا نشد.");
    }

    const isMatch = await bcrypt.compare(currentPassword, admin.password);

    if (!isMatch) {
      throw new Error("رمز عبور فعلی اشتباه است.");
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);

    await profileRepository.updatePassword(adminId, hashedPassword);

    return true;
  }

  /**
   * Remove Profile Image
   */
  async removeImage(adminId) {
    const admin = await profileRepository.findById(adminId);

    if (!admin) {
      throw new Error("مدیر پیدا نشد.");
    }

    if (admin.image) {
      await imageService.removeImage(admin.image);
    }

    const updated = await profileRepository.update(adminId, {
      image: null,
    });

    const { password, ...profile } = updated;

    return profile;
  }
}

export default new ProfileService();
