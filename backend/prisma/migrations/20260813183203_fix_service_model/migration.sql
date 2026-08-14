/*
  Warnings:

  - You are about to drop the column `image` on the `About` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."About" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "public"."Service" ALTER COLUMN "shortDescription" DROP NOT NULL,
ALTER COLUMN "features" SET DEFAULT '[]',
ALTER COLUMN "category" DROP NOT NULL,
ALTER COLUMN "technologies" SET DEFAULT '[]';

-- CreateIndex
CREATE INDEX "Service_order_idx" ON "public"."Service"("order");

-- CreateIndex
CREATE INDEX "Service_isActive_idx" ON "public"."Service"("isActive");
