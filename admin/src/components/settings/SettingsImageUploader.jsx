/** @format */

import { Gallery, Trash } from "iconsax-reactjs";

const SettingsImageUploader = ({
  value,
  preview,
  onChange,
  onRemove,
  label = "تصویر",
}) => {
  const handleUpload = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (file.type !== "image/webp") return;

    onChange?.(file);
  };

  return (
    <div
      className='
        space-y-3
      '>
      <p
        className='
          text-sm
          font-bold
        '>
        {label}
      </p>

      <label
        className='
          flex
          min-h-36
          cursor-pointer
          flex-col
          items-center
          justify-center
          gap-2

          rounded-2xl

          border
          border-dashed
          border-base-300

          bg-base-100/40

          backdrop-blur-xl

          transition

          hover:border-primary
        '>
        {preview || value ?
          <img
            src={preview || value}
            alt={label}
            className='
              h-28
              w-28
              rounded-2xl
              object-cover
            '
          />
        : <>
            <Gallery size={32} variant='Bulk' className='text-primary' />

            <span
              className='
                text-xs
                text-base-content/60
              '>
              فقط فرمت WEBP مجاز است
            </span>
          </>
        }

        <input
          type='file'
          accept='image/webp'
          onChange={handleUpload}
          className='hidden'
        />
      </label>

      {(preview || value) && (
        <button
          type='button'
          onClick={onRemove}
          className='
            btn
            btn-error
            btn-sm
            w-full
          '>
          <Trash size={16} />
          حذف تصویر
        </button>
      )}
    </div>
  );
};

export default SettingsImageUploader;
