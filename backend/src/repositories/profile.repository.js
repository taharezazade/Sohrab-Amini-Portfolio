/** @format */

import prisma from "../config/prisma.js";

class ProfileRepository {
  /**
   * Find Admin By ID
   */
  async findById(id) {
    return await prisma.admin.findUnique({
      where: {
        id,
      },
    });
  }

  /**
   * Find Admin With Password
   */
  async findByIdWithPassword(id) {
    return await prisma.admin.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        password: true,
      },
    });
  }

  /**
   * Update Admin Profile
   */
  async update(id, data) {
    return await prisma.admin.update({
      where: {
        id,
      },
      data,
    });
  }

  /**
   * Update Password
   */
  async updatePassword(id, password) {
    return await prisma.admin.update({
      where: {
        id,
      },
      data: {
        password,
      },
    });
  }

  /**
   * Update Profile Image
   */
  async updateImage(id, image) {
    return await prisma.admin.update({
      where: {
        id,
      },
      data: {
        image,
      },
    });
  }
}

export default new ProfileRepository();
