/** @format */

import bcrypt from "bcrypt";

import profileRepository from "../repositories/profile.repository.js";

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
   */
  async updateProfile(adminId, data) {
    const admin = await profileRepository.findById(adminId);

    if (!admin) {
      throw new Error("مدیر پیدا نشد.");
    }

    const updated = await profileRepository.update(adminId, data);

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

    const updated = await profileRepository.update(adminId, {
      image: null,
    });

    const { password, ...profile } = updated;

    return profile;
  }
}

export default new ProfileService();
