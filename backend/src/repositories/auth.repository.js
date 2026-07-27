/** @format */

import prisma from "../config/prisma.js";

class AuthRepository {
  /* =======================================================
      Find By ID
  ======================================================= */

  async findById(id) {
    return await prisma.admin.findUnique({
      where: {
        id,
      },
    });
  }

  /* =======================================================
      Find By Email
  ======================================================= */

  async findByEmail(email) {
    return await prisma.admin.findUnique({
      where: {
        email,
      },
    });
  }

  /* =======================================================
      Find By Username
  ======================================================= */

  async findByUsername(username) {
    return await prisma.admin.findUnique({
      where: {
        username,
      },
    });
  }

  /* =======================================================
      Create
  ======================================================= */

  async create(data) {
    return await prisma.admin.create({
      data,
    });
  }

  /* =======================================================
      Update
  ======================================================= */

  async update(id, data) {
    return await prisma.admin.update({
      where: {
        id,
      },
      data,
    });
  }

  /* =======================================================
      Update Password
  ======================================================= */

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

  /* =======================================================
      Delete
  ======================================================= */

  async delete(id) {
    return await prisma.admin.delete({
      where: {
        id,
      },
    });
  }

  /* =======================================================
      Exists By Email
  ======================================================= */

  async existsByEmail(email) {
    const admin = await prisma.admin.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
      },
    });

    return Boolean(admin);
  }

  /* =======================================================
      Exists By Username
  ======================================================= */

  async existsByUsername(username) {
    const admin = await prisma.admin.findUnique({
      where: {
        username,
      },
      select: {
        id: true,
      },
    });

    return Boolean(admin);
  }

  /* =======================================================
      Count
  ======================================================= */

  async count() {
    return await prisma.admin.count();
  }
}

export default new AuthRepository();
