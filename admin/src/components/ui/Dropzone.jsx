/** @format */

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { DocumentUpload } from "iconsax-reactjs";
import { twMerge } from "tailwind-merge";

/* Dropzone */

const Dropzone = ({
  onDrop,
  accept = {
    "image/*": [],
  },
  multiple = false,
  disabled = false,
  className = "",
}) => {
  const handleDrop = useCallback(
    (acceptedFiles) => {
      onDrop?.(acceptedFiles);
    },
    [onDrop],
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept,
    multiple,
    disabled,
  });

  return (
    <div
      {...getRootProps()}
      className={twMerge(
        "flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-base-300 bg-base-100 p-10 text-center transition-all duration-200",
        isDragActive && "border-primary bg-primary/5",
        disabled && "cursor-not-allowed opacity-60",
        className,
      )}>
      <input {...getInputProps()} />

      <DocumentUpload size={48} variant='Bulk' className='mb-4 text-primary' />

      <h3 className='text-lg font-semibold'>تصویر را اینجا رها کنید</h3>

      <p className='mt-2 text-sm text-base-content/60'>
        یا برای انتخاب فایل کلیک کنید.
      </p>

      <p className='mt-1 text-xs text-base-content/50'>
        فرمت‌های مجاز: JPG، PNG، WEBP
      </p>
    </div>
  );
};

export default Dropzone;
