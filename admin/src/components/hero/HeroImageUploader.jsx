/** @format */

import { motion } from "framer-motion";
import { Image, GalleryImport, Trash, Eye } from "iconsax-reactjs";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";

const HeroImageUploader = () => {
  const [image, setImage] = useState({
    name: "hero.webp",
    size: "842 KB",
    dimensions: "1920 × 1080",
    preview: "https://placehold.co/600x340",
    file: null,
  });

  const onDrop = useCallback((acceptedFiles) => {
    if (!acceptedFiles.length) return;

    const file = acceptedFiles[0];

    setImage({
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      dimensions: "-",
      preview: URL.createObjectURL(file),
      file,
    });
  }, []);

  const handleRemoveImage = () => {
    if (image?.preview?.startsWith("blob:")) {
      URL.revokeObjectURL(image.preview);
    }

    setPreviewOpen(false);

    setImage({
      name: "",
      size: "",
      dimensions: "",
      preview: "",
      file: null,
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,
    accept: {
      "image/png": [],
      "image/jpeg": [],
      "image/webp": [],
    },
    onDrop,
  });

  const [previewOpen, setPreviewOpen] = useState(false);

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
      className='rounded-2xl border border-base-300 bg-base-100'>
      {/* =======================================================
          Header
      ======================================================= */}

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

      {/* =======================================================
          Preview
      ======================================================= */}

      <div className='p-5'>
        <div className='overflow-hidden rounded-xl border border-base-300'>
          {image.preview ?
            <img
              src={image.preview}
              alt={image.name}
              className='aspect-video w-full object-cover'
            />
          : <div className='aspect-video flex flex-col items-center justify-center bg-base-200 text-base-content/40'>
              <Image size={52} variant='Bulk' />
              <p className='mt-3 text-sm'>تصویری انتخاب نشده است.</p>
            </div>
          }
        </div>

        {/* =======================================================
            Info
        ======================================================= */}

        <div className='mt-4 flex flex-wrap items-center gap-2'>
          <div className='badge badge-primary badge-outline'>{image.name}</div>

          <div className='badge badge-neutral'>{image.size}</div>

          <div className='badge badge-neutral'>{image.dimensions}</div>
        </div>

        {/* =======================================================
            Upload
        ======================================================= */}

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
              JPG • PNG • WEBP
            </div>
          </div>
        </div>

        {/* =======================================================
            Actions
        ======================================================= */}

        <div className='mt-5 flex flex-col gap-3 sm:flex-row'>
          <button className='btn btn-primary flex-1 rounded-xl'>
            <GalleryImport size={18} />
            انتخاب تصویر
          </button>

          <button
            type='button'
            onClick={() => setPreviewOpen(true)}
            disabled={!image?.preview}
            className='btn btn-outline btn-primary rounded-xl'>
            <Eye size={18} />
          </button>

          <button
            type='button'
            onClick={handleRemoveImage}
            disabled={!image.preview}
            className='btn btn-outline btn-error rounded-xl'>
            <Trash size={18} />
          </button>
        </div>
      </div>
      {/* =======================================================
            Preview Modal
      ======================================================= */}

      {previewOpen && (
        <dialog className='modal modal-open'>
          <div className='modal-box max-w-5xl rounded-3xl p-0 overflow-hidden bg-base-100'>
            {/* Header */}

            <div className='flex items-center justify-between border-b border-base-300 px-6 py-4'>
              <div>
                <h3 className='font-bold text-lg'>پیش نمایش تصویر Hero</h3>

                <p className='text-sm text-base-content/60 mt-1'>
                  {image.name}
                </p>
              </div>

              <button
                className='btn btn-circle btn-ghost'
                onClick={() => setPreviewOpen(false)}>
                ✕
              </button>
            </div>

            {/* Image */}

            <div className='bg-base-200'>
              <img
                src={image.preview}
                alt={image.name}
                className='w-full max-h-[75vh] object-contain'
              />
            </div>

            {/* Footer */}

            <div className='flex flex-wrap items-center justify-between gap-3 border-t border-base-300 px-6 py-4'>
              <div className='flex flex-wrap gap-2'>
                <div className='badge badge-primary badge-outline'>
                  {image.name}
                </div>

                <div className='badge badge-neutral'>{image.size}</div>

                <div className='badge badge-neutral'>{image.dimensions}</div>
              </div>

              <button
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
