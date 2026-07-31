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
  });

  const onDrop = useCallback((acceptedFiles) => {
    if (!acceptedFiles.length) return;

    const file = acceptedFiles[0];

    setImage({
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      dimensions: "-",
      preview: URL.createObjectURL(file),
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,
    accept: {
      "image/png": [],
      "image/jpeg": [],
      "image/webp": [],
    },
    onDrop,
  });

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
          <img
            src={image.preview}
            alt={image.name}
            className='aspect-video w-full object-cover'
          />
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

          <button className='btn btn-outline btn-primary rounded-xl'>
            <Eye size={18} />
          </button>

          <button className='btn btn-outline btn-error rounded-xl'>
            <Trash size={18} />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroImageUploader;
