/*
  Warnings:

  - You are about to drop the column `address` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `workingHours` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `resume` on the `Setting` table. All the data in the column will be lost.
  - You are about to drop the column `siteDescription` on the `Setting` table. All the data in the column will be lost.
  - Added the required column `description` to the `Setting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `siteName` to the `Setting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Admin" ADD COLUMN     "bio" TEXT,
ADD COLUMN     "displayName" TEXT,
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "lastLogin" TIMESTAMP(3),
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "phone" TEXT;

-- AlterTable
ALTER TABLE "public"."Contact" DROP COLUMN "address",
DROP COLUMN "email",
DROP COLUMN "workingHours",
ADD COLUMN     "image" TEXT;

-- AlterTable
ALTER TABLE "public"."Hero" ADD COLUMN     "primaryButtonLink" TEXT,
ADD COLUMN     "primaryButtonText" TEXT,
ADD COLUMN     "secondaryButtonLink" TEXT,
ADD COLUMN     "secondaryButtonText" TEXT,
ADD COLUMN     "seoDescription" TEXT,
ADD COLUMN     "seoTitle" TEXT;

-- AlterTable
ALTER TABLE "public"."Setting" DROP COLUMN "resume",
DROP COLUMN "siteDescription",
ADD COLUMN     "allowRegistration" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "canonicalUrl" TEXT,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "github" TEXT,
ADD COLUMN     "instagram" TEXT,
ADD COLUMN     "keywords" TEXT,
ADD COLUMN     "linkedin" TEXT,
ADD COLUMN     "maintenanceMode" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "metaDescription" TEXT,
ADD COLUMN     "metaTitle" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "siteName" TEXT NOT NULL,
ADD COLUMN     "telegram" TEXT,
ADD COLUMN     "twitter" TEXT,
ADD COLUMN     "twoFactor" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "whatsapp" TEXT;
