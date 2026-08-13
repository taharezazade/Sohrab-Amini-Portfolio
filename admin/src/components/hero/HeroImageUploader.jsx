/** @format */

import { motion } from "framer-motion";
import { Image, GalleryImport, Trash, Eye } from "iconsax-reactjs";
import { useDropzone } from "react-dropzone";
import { useCallback, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { toast } from "react-hot-toast";

import uploadApi from "@/api/upload.api";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const API_ORIGIN = API_URL.replace(/\/api\/?$/, "");

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ACCEPTED_TYPES = [
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/svg+xml",
];

const buildImageUrl = (value) => {
  if (!value) {
    return "";
  }

  if (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("blob:")
  ) {
    return value;
  }

  if (value.startsWith("/uploads/")) {
    return `${API_ORIGIN}${value}`;
  }

  return value;
};

const HeroImageUploader = () => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();

  const formImage = watch("image");

  const [image, setImage] = useState({
    name: "",
    size: "",
    dimensions: "",
    preview: "",
    file: null,
    uploading: false,
  });

  const [previewOpen, setPreviewOpen] = useState(false);

  /* =======================================================
     Sync Existing API Image
  ======================================================= */

  useEffect(() => {
    if (!formImage) {
      setImage((current) => ({
        ...current,
        preview: "",
      }));

      return;
    }

    if (typeof formImage === "string") {
      setImage((current) => ({
        ...current,
        preview: buildImageUrl(formImage),
        file: null,
      }));
    }
  }, [formImage]);

  /* =======================================================
     Upload Image
  ======================================================= */

  const uploadImage = async (file) => {
    if (!file) {
      return;
    }

    if (!ACCEPTED_TYPES.includes(file.type)) {
      toast.error("فرمت تصویر باید JPG، PNG، WEBP یا SVG باشد.");

      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      toast.error("حجم تصویر نباید بیشتر از 5MB باشد.");

      return;
    }

    try {
      setImage((current) => ({
        ...current,
        uploading: true,
      }));

      const preview = URL.createObjectURL(file);

      setImage({
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
        dimensions: "-",
        preview,
        file,
        uploading: true,
      });

      const formData = new FormData();

      formData.append("file", file);
      formData.append("folder", "hero");

      const response = await uploadApi.single(formData);

      const uploadedFile = response?.data?.data ?? response?.data ?? null;

      const imagePath =
        uploadedFile?.path || uploadedFile?.url || uploadedFile?.fileUrl;

      if (!imagePath) {
        throw new Error("Server did not return image path.");
      }

      /*
       * IMPORTANT
       *
       * Store STRING path in React Hook Form.
       *
       * Never store File here.
       */
      setValue("image", imagePath, {
        shouldDirty: true,
        shouldTouch: true,
        shouldValidate: true,
      });

      setImage((current) => ({
        ...current,
        preview: buildImageUrl(imagePath),
        uploading: false,
      }));

      toast.success("تصویر Hero با موفقیت آپلود شد.");
    } catch (error) {
      console.error("HERO IMAGE UPLOAD ERROR:", error);

      setImage({
        name: "",
        size: "",
        dimensions: "",
        preview: "",
        file: null,
        uploading: false,
      });

      const message =
        error?.response?.data?.message || "آپلود تصویر Hero انجام نشد.";

      toast.error(message);
    }
  };

  /* =======================================================
     Drop
  ======================================================= */

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles?.[0];

    if (!file) {
      return;
    }

    await uploadImage(file);
  }, []);

  /* =======================================================
     Dropzone
  ======================================================= */

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    multiple: false,

    accept: {
      "image/png": [],
      "image/jpeg": [],
      "image/webp": [],
      "image/svg+xml": [],
    },

    disabled: image.uploading,

    onDrop,
  });

  /* =======================================================
     Remove
  ======================================================= */

  const handleRemoveImage = () => {
    if (image.preview?.startsWith("blob:")) {
      URL.revokeObjectURL(image.preview);
    }

    setPreviewOpen(false);

    setImage({
      name: "",
      size: "",
      dimensions: "",
      preview: "",
      file: null,
      uploading: false,
    });

    setValue("image", "", {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  /* =======================================================
     Cleanup
  ======================================================= */

  useEffect(() => {
    return () => {
      if (image.preview?.startsWith("blob:")) {
        URL.revokeObjectURL(image.preview);
      }
    };
  }, [image.preview]);

  /* =======================================================
     Render
  ======================================================= */

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className='rounded-2xl border border-base-300 bg-base-100'>
      {/* Header */}

      <div className='flex items-center justify-between border-b border-base-300 px-5 py-4'>
        <div>
          <h2 className='text-lg font-bold'>تصویر Hero</h2>

          <p className='mt-1 text-sm text-base-content/60'>
            تصویر اصلی صفحه نخست
          </p>
        </div>

        <div className='rounded-xl bg-primary/10 p-2 text-primary'>
          <Image size={20} variant='Bulk' />
        </div>
      </div>

      {/* Content */}

      <div className='p-5'>
        {/* Preview */}

        <div className='overflow-hidden rounded-xl border border-base-300'>
          {image.preview ?
            <img
              src={image.preview}
              alt={image.name || "Hero image"}
              className='aspect-video w-full object-cover'
            />
          : <div className='flex aspect-video flex-col items-center justify-center bg-base-200 text-base-content/40'>
              <Image size={52} variant='Bulk' />

              <p className='mt-3 text-sm'>تصویری انتخاب نشده است.</p>
            </div>
          }
        </div>

        {/* Uploading */}

        {image.uploading && (
          <div className='mt-3 flex items-center gap-2 text-sm text-primary'>
            <span className='loading loading-spinner loading-sm' />
            در حال آپلود تصویر...
          </div>
        )}

        {/* Error */}

        {errors.image?.message && (
          <p className='mt-2 text-sm text-error'>{errors.image.message}</p>
        )}

        {/* Info */}

        {image.name && (
          <div className='mt-4 flex flex-wrap items-center gap-2'>
            <div className='badge badge-primary badge-outline'>
              {image.name}
            </div>

            <div className='badge badge-neutral'>{image.size}</div>

            <div className='badge badge-neutral'>{image.dimensions}</div>
          </div>
        )}

        {/* Dropzone */}

        <div
          {...getRootProps()}
          className={`mt-5 cursor-pointer rounded-2xl border-2 border-dashed p-6 transition-all ${
            isDragActive ?
              "border-primary bg-primary/5"
            : "border-base-300 hover:border-primary"
          }`}>
          <input {...getInputProps()} />

          <div className='flex flex-col items-center justify-center gap-3 text-center'>
            <div className='rounded-2xl bg-primary/10 p-4 text-primary'>
              <GalleryImport size={32} variant='Bulk' />
            </div>

            <div>
              <h3 className='font-semibold'>تصویر را اینجا رها کنید</h3>

              <p className='mt-1 text-sm text-base-content/60'>
                یا برای انتخاب فایل کلیک کنید.
              </p>
            </div>

            <div className='badge badge-primary badge-outline'>
              JPG • PNG • WEBP • SVG
            </div>
          </div>
        </div>

        {/* Actions */}

        <div className='mt-5 flex flex-col gap-3 sm:flex-row'>
          <button
            type='button'
            onClick={open}
            disabled={image.uploading}
            className='btn btn-primary flex-1 rounded-xl'>
            <GalleryImport size={18} />
            انتخاب تصویر
          </button>

          <button
            type='button'
            onClick={() => setPreviewOpen(true)}
            disabled={!image.preview || image.uploading}
            className='btn btn-outline btn-primary rounded-xl'>
            <Eye size={18} />
          </button>

          <button
            type='button'
            onClick={handleRemoveImage}
            disabled={!image.preview || image.uploading}
            className='btn btn-outline btn-error rounded-xl'>
            <Trash size={18} />
          </button>
        </div>
      </div>

      {/* Preview Modal */}

      {previewOpen && (
        <dialog className='modal modal-open'>
          <div className='modal-box max-w-5xl overflow-hidden rounded-3xl bg-base-100 p-0'>
            <div className='flex items-center justify-between border-b border-base-300 px-6 py-4'>
              <div>
                <h3 className='text-lg font-bold'>پیش نمایش تصویر Hero</h3>

                <p className='mt-1 text-sm text-base-content/60'>
                  {image.name}
                </p>
              </div>

              <button
                type='button'
                className='btn btn-circle btn-ghost'
                onClick={() => setPreviewOpen(false)}>
                ✕
              </button>
            </div>

            <div className='bg-base-200'>
              <img
                src={image.preview}
                alt={image.name || "Hero image"}
                className='max-h-[75vh] w-full object-contain'
              />
            </div>

            <div className='flex flex-wrap items-center justify-between gap-3 border-t border-base-300 px-6 py-4'>
              <div className='flex flex-wrap gap-2'>
                {image.name && (
                  <div className='badge badge-primary badge-outline'>
                    {image.name}
                  </div>
                )}

                {image.size && (
                  <div className='badge badge-neutral'>{image.size}</div>
                )}
              </div>

              <button
                type='button'
                className='btn btn-primary rounded-xl'
                onClick={() => setPreviewOpen(false)}>
                بستن
              </button>
            </div>
          </div>

          <div
            className='modal-backdrop'
            onClick={() => setPreviewOpen(false)}
          />
        </dialog>
      )}
    </motion.section>
  );
};

export default HeroImageUploader;
