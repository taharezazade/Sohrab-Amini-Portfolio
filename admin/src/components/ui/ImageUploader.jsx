/** @format */

import { useMemo, useEffect } from "react";
import { Trash } from "iconsax-reactjs";
import Dropzone from "./Dropzone";
import Button from "./Button";

/* Image Uploader */

const ImageUploader = ({
  value = [],
  onChange,
  multiple = false,
  maxFiles = 10,
  disabled = false,
  className = "",
}) => {
  const files = useMemo(() => {
    if (!value) return [];

    return Array.isArray(value) ? value : [value];
  }, [value]);

  const previews = useMemo(() => {
    return files.map((file) => ({
      id:
        file instanceof File ?
          `${file.name}-${file.size}-${file.lastModified}`
        : file,
      file,
      preview: file instanceof File ? URL.createObjectURL(file) : file,
    }));
  }, [files]);

  useEffect(() => {
    return () => {
      previews.forEach(({ file, preview }) => {
        if (file instanceof File) {
          URL.revokeObjectURL(preview);
        }
      });
    };
  }, [previews]);

  const handleDrop = (acceptedFiles) => {
    let nextFiles;

    if (multiple) {
      nextFiles = [...files, ...acceptedFiles].slice(0, maxFiles);
    } else {
      nextFiles = acceptedFiles.slice(0, 1);
    }

    onChange?.(multiple ? nextFiles : (nextFiles[0] ?? null));
  };

  const handleRemove = (id) => {
    const nextFiles = previews
      .filter((item) => item.id !== id)
      .map((item) => item.file);

    onChange?.(multiple ? nextFiles : null);
  };

  return (
    <div className={className}>
      <Dropzone multiple={multiple} disabled={disabled} onDrop={handleDrop} />

      {previews.length > 0 && (
        <div className='mt-5 grid grid-cols-2 gap-4 md:grid-cols-4'>
          {previews.map((image) => (
            <div
              key={image.id}
              className='group relative overflow-hidden rounded-2xl border border-base-300 bg-base-200'>
              <img
                src={image.preview}
                alt='Preview'
                className='aspect-square h-full w-full object-cover transition duration-300 group-hover:scale-105'
              />

              <Button
                type='button'
                variant='error'
                size='xs'
                circle
                className='absolute left-3 top-3 opacity-0 transition-opacity group-hover:opacity-100'
                onClick={() => handleRemove(image.id)}>
                <Trash size={16} />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
