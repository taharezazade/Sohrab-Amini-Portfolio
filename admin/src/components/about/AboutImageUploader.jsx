/** @format */

import { useEffect, useRef, useState } from "react";

import { GalleryAdd, Trash, Refresh2, TickCircle } from "iconsax-reactjs";

import { toast } from "react-hot-toast";

import uploadApi from "@/api/upload.api";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/webp"];

const AboutImageUploader = ({
  image = "",
  onImageChange,
  disabled = false,
}) => {
  const inputRef = useRef(null);

  const [preview, setPreview] = useState(image || null);

  const [isUploading, setIsUploading] = useState(false);

  /* =========================================================
     Sync Image
  ========================================================= */

  useEffect(() => {
    setPreview(image || null);
  }, [image]);

  /* =========================================================
     Get Uploaded URL
  ========================================================= */

  const getUploadedUrl = (response) => {
    const data = response?.data?.data ?? response?.data ?? null;

    return data?.url ?? data?.path ?? data?.fileUrl ?? data?.location ?? null;
  };

  /* =========================================================
     Select Image
  ========================================================= */

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];

    event.target.value = "";

    if (!file) {
      return;
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      toast.error("فرمت تصویر باید PNG، JPG یا WEBP باشد.");

      return;
    }

    if (file.size > MAX_IMAGE_SIZE) {
      toast.error("حجم تصویر نباید بیشتر از 5MB باشد.");

      return;
    }

    const localPreview = URL.createObjectURL(file);

    setPreview(localPreview);

    try {
      setIsUploading(true);

      const formData = new FormData();

      formData.append("file", file);
      formData.append("folder", "about");

      const response = await uploadApi.single(formData);

      const imageUrl = getUploadedUrl(response);

      if (!imageUrl) {
        throw new Error("Uploaded image URL was not returned.");
      }

      /*
       * فقط فرم والد را تغییر می‌دهیم.
       * ذخیره واقعی About با دکمه Save انجام می‌شود.
       */

      onImageChange?.(imageUrl);

      setPreview(imageUrl);

      toast.success("تصویر با موفقیت آپلود شد.");
    } catch (error) {
      console.error("UPLOAD ABOUT IMAGE ERROR:", error);

      setPreview(image || null);

      toast.error(error?.response?.data?.message || "آپلود تصویر انجام نشد.");
    } finally {
      setIsUploading(false);

      URL.revokeObjectURL(localPreview);
    }
  };

  /* =========================================================
     Remove Image
  ========================================================= */

  const handleRemove = () => {
    setPreview(null);

    onImageChange?.("");
  };

  /* =========================================================
     Open Dialog
  ========================================================= */

  const handleClick = () => {
    if (!isUploading && !disabled) {
      inputRef.current?.click();
    }
  };

  /* =========================================================
     Render
  ========================================================= */

  return (
    <div className='card border border-base-300 bg-base-100 shadow-sm'>
      <div className='card-body'>
        {/* Header */}

        <div className='mb-4 flex items-center gap-3'>
          <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary'>
            <GalleryAdd size={22} variant='Bulk' />
          </div>

          <div>
            <h2 className='text-lg font-bold'>تصویر درباره من</h2>

            <p className='text-sm text-base-content/60'>
              تصویر پروفایل بخش About را مدیریت کنید
            </p>
          </div>
        </div>

        {/* Upload */}

        {!preview ?
          <button
            type='button'
            onClick={handleClick}
            disabled={isUploading || disabled}
            className='
              flex
              min-h-52
              flex-col
              items-center
              justify-center
              gap-3
              rounded-xl
              border
              border-dashed
              border-base-300
              transition
              hover:border-primary
              disabled:pointer-events-none
              disabled:opacity-60
            '>
            {isUploading ?
              <>
                <span className='loading loading-spinner loading-md text-primary' />

                <span className='text-sm text-base-content/70'>
                  در حال آپلود تصویر...
                </span>
              </>
            : <>
                <GalleryAdd size={42} className='text-primary' variant='Bulk' />

                <span className='text-sm text-base-content/70'>
                  برای انتخاب تصویر کلیک کنید
                </span>

                <span className='text-xs text-base-content/50'>
                  PNG , JPG , WEBP — حداکثر 5MB
                </span>
              </>
            }
          </button>
        : <div className='relative overflow-hidden rounded-xl border border-base-300'>
            <img
              src={preview}
              alt='About'
              className='h-72 w-full object-cover'
            />

            {/* Status */}

            <div className='absolute left-3 top-3'>
              {isUploading ?
                <span className='badge badge-warning gap-2'>
                  <span className='loading loading-spinner loading-xs' />
                  در حال آپلود
                </span>
              : <span className='badge badge-success gap-1'>
                  <TickCircle size={14} />
                  انتخاب شده
                </span>
              }
            </div>

            {/* Actions */}

            <div className='absolute bottom-3 right-3 flex gap-2'>
              <button
                type='button'
                onClick={handleClick}
                disabled={isUploading || disabled}
                className='btn btn-sm btn-primary'>
                <Refresh2 size={16} />
                تغییر
              </button>

              <button
                type='button'
                onClick={handleRemove}
                disabled={isUploading || disabled}
                className='btn btn-sm btn-error'>
                <Trash size={16} />
                حذف
              </button>
            </div>
          </div>
        }

        {/* Input */}

        <input
          ref={inputRef}
          type='file'
          accept='image/png,image/jpeg,image/webp'
          onChange={handleFileChange}
          className='hidden'
        />
      </div>
    </div>
  );
};

export default AboutImageUploader;
