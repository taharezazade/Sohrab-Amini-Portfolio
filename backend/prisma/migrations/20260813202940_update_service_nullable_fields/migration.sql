-- DropIndex
DROP INDEX "public"."Service_isActive_idx";

-- DropIndex
DROP INDEX "public"."Service_order_idx";

-- AlterTable
ALTER TABLE "public"."Service" ALTER COLUMN "features" DROP DEFAULT,
ALTER COLUMN "technologies" DROP DEFAULT;
