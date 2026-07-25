/** @format */

import prisma from "../config/prisma.js";

class SettingRepository {
  /* ============================
      Get Settings
  ============================ */

  async find() {
    return await prisma.setting.findFirst();
  }

  /* ============================
      Get By ID
  ============================ */

  async findById(id) {
    return await prisma.setting.findUnique({
      where: {
        id,
      },
    });
  }

  /* ============================
      Create
  ============================ */

  async create(data) {
    return await prisma.setting.create({
      data,
    });
  }

  /* ============================
      Update
  ============================ */

  async update(id, data) {
    return await prisma.setting.update({
      where: {
        id,
      },
      data,
    });
  }

  /* ============================
      Create Or Update
  ============================ */

  async upsert(data) {
    const settings = await prisma.setting.findFirst();

    if (settings) {
      return await prisma.setting.update({
        where: {
          id: settings.id,
        },
        data,
      });
    }

    return await prisma.setting.create({
      data,
    });
  }

  /* ============================
      Delete
  ============================ */

  async delete(id) {
    return await prisma.setting.delete({
      where: {
        id,
      },
    });
  }

  /* ============================
      Exists
  ============================ */

  async exists() {
    const settings = await prisma.setting.findFirst({
      select: {
        id: true,
      },
    });

    return !!settings;
  }

  /* ============================
      Count
  ============================ */

  async count() {
    return await prisma.setting.count();
  }
}

export default SettingRepository;
