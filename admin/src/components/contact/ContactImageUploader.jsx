/** @format */

import { motion } from "framer-motion";
import { GalleryAdd, Trash, User } from "iconsax-reactjs";

import Card from "../ui/Card";
import Button from "../ui/Button";

const ContactImageUploader = ({
  preview,
  loading = false,
  hasStoredImage = false,
  onChange,
  onRemove,
}) => {
  const hasImage = Boolean(preview || hasStoredImage);

  return (
    <Card
      title="تصویر سهراب"
      description="فقط تصاویر با فرمت WEBP قابل بارگذاری هستند."
    >
      <div className="space-y-5">
        <motion.div
          layout
          className="bg-base-200 border-base-300 flex h-72 items-center justify-center overflow-hidden rounded-2xl border"
        >
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="h-full w-full object-cover"
            />
          ) : hasStoredImage ? (
            <img
              src={hasStoredImage}
              alt="Sohrab Amini"
              className="h-full w-full object-cover"
            />
          ) : (
            <User size={72} variant="Bulk" className="text-base-content/25" />
          )}
        </motion.div>

        <label className="border-base-300 hover:border-primary hover:bg-base-200/40 flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed px-6 py-8 transition">
          <GalleryAdd size={40} variant="Bulk" className="text-primary" />

          <div className="text-center">
            <p className="font-semibold">انتخاب تصویر</p>
            <p className="text-base-content/60 mt-1 text-sm">
              فقط فایل‌های WEBP
            </p>
          </div>

          <input
            type="file"
            accept=".webp,image/webp"
            className="hidden"
            disabled={loading}
            onChange={(event) => onChange?.(event.target.files?.[0] ?? null)}
          />
        </label>

        {hasImage && (
          <Button
            type="button"
            variant="error"
            fullWidth
            icon={<Trash size={18} />}
            disabled={loading}
            onClick={onRemove}
          >
            حذف تصویر
          </Button>
        )}
      </div>
    </Card>
  );
};

export default ContactImageUploader;
