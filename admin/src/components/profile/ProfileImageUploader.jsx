/** @format */

import { GalleryImport, Trash, User } from "iconsax-reactjs";

const ACCEPTED_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
];

const ProfileImageUploader = ({
  value,
  preview,
  loading = false,
  onChange,
  onRemove,
}) => {
  const handleChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!ACCEPTED_TYPES.includes(file.type)) {
      alert("فرمت تصویر مجاز نیست.");
      return;
    }

    onChange?.(file);
  };

  const image = preview || value;

  return (
    <div className='space-y-4'>
      <div className='flex flex-col items-center gap-4 rounded-2xl border border-base-300 bg-base-100/40 p-5 backdrop-blur-xl'>
        <div className='relative'>
          <div className='flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-4 border-base-300 bg-base-200'>
            {image ?
              <img
                src={image}
                alt='Profile'
                className='h-full w-full object-cover'
              />
            : <User size={72} variant='Bulk' className='text-base-content/30' />
            }
          </div>
        </div>

        <div className='text-center'>
          <h3 className='text-sm font-bold'>تصویر پروفایل</h3>

          <p className='mt-1 text-xs text-base-content/60'>
            فرمت‌های مجاز: JPG، JPEG، PNG، WEBP، HEIC
          </p>
        </div>

        <label className='btn btn-primary w-full'>
          <GalleryImport size={18} variant='Bulk' />
          انتخاب تصویر
          <input
            type='file'
            accept='.jpg,.jpeg,.png,.webp,.heic,.heif'
            className='hidden'
            disabled={loading}
            onChange={handleChange}
          />
        </label>

        {image && (
          <button
            type='button'
            className='btn btn-outline btn-error w-full'
            onClick={onRemove}
            disabled={loading}>
            <Trash size={18} />
            حذف تصویر
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileImageUploader;
