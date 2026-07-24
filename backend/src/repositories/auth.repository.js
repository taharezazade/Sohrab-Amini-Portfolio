/** @format */

import prisma from "../config/prisma.js";

class AuthRepository {
  /* ============================
      Get Admin By ID
  ============================ */

  async findById(id) {
    return await prisma.admin.findUnique({
      where: {
        id,
      },
    });
  }

  /* ============================
      Get Admin By Email
  ============================ */

  async findByEmail(email) {
    return await prisma.admin.findUnique({
      where: {
        email,
      },
    });
  }

  /* ============================
      Get Admin By Username
  ============================ */

  async findByUsername(username) {
    return await prisma.admin.findUnique({
      where: {
        username,
      },
    });
  }

  /* ============================
      Create Admin
  ============================ */

  async create(data) {
    return await prisma.admin.create({
      data,
    });
  }

  /* ============================
      Update Admin
  ============================ */

  async update(id, data) {
    return await prisma.admin.update({
      where: {
        id,
      },
      data,
    });
  }

  /* ============================
      Change Password
  ============================ */

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

  /* ============================
      Delete Admin
  ============================ */

  async delete(id) {
    return await prisma.admin.delete({
      where: {
        id,
      },
    });
  }

  /* ============================
      Exists By Email
  ============================ */

  async existsByEmail(email) {
    const admin = await prisma.admin.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
      },
    });

    return !!admin;
  }

  /* ============================
      Exists By Username
  ============================ */

  async existsByUsername(username) {
    const admin = await prisma.admin.findUnique({
      where: {
        username,
      },
      select: {
        id: true,
      },
    });

    return !!admin;
  }

  /* ============================
      Count
  ============================ */

  async count() {
    return await prisma.admin.count();
  }
}

export default new AuthRepository();
