/** @format */

import prisma from "../../src/config/prisma.js";

/**
 * Remove all data from database.
 * Keep the order based on foreign key dependencies.
 */
export async function clearDatabase() {
  const tables = ["PortfolioImage", "Portfolio", "Service", "About", "Hero"];

  for (const table of tables) {
    await prisma.$executeRawUnsafe(
      `TRUNCATE TABLE "${table}" RESTART IDENTITY CASCADE;`,
    );
  }
}

/**
 * Seed database with custom data.
 *
 * @param {(prisma: import("@prisma/client").PrismaClient) => Promise<void>} callback
 */
export async function seedDatabase(callback) {
  if (typeof callback === "function") {
    await callback(prisma);
  }
}
