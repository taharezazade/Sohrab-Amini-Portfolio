-- AlterTable
ALTER TABLE "public"."Portfolio" ALTER COLUMN "thumbnail" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "Portfolio_status_idx" ON "public"."Portfolio"("status");

-- CreateIndex
CREATE INDEX "Portfolio_featured_idx" ON "public"."Portfolio"("featured");

-- CreateIndex
CREATE INDEX "Portfolio_order_idx" ON "public"."Portfolio"("order");

-- CreateIndex
CREATE INDEX "Portfolio_slug_idx" ON "public"."Portfolio"("slug");
