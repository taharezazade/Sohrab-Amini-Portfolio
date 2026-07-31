/** @format */

import { useRef, useState } from "react";
import { GalleryAdd, Trash, Refresh2 } from "iconsax-reactjs";

const AboutImageUploader = () => {
  const inputRef = useRef(null);

  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setPreview(imageUrl);
  };

  const handleRemove = () => {
    setPreview(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div
      className='
        card
        bg-base-100
        border
        border-base-300
        shadow-sm
      '>
      <div
        className='
          card-body
        '>
        {/* Header */}
        <div
          className='
            flex
            items-center
            gap-3
            mb-4
          '>
          <div
            className='
              w-10
              h-10
              rounded-xl
              bg-primary/10
              text-primary
              flex
              items-center
              justify-center
            '>
            <GalleryAdd size={22} variant='Bulk' />
          </div>

          <div>
            <h2
              className='
                font-bold
                text-lg
              '>
              تصویر درباره من
            </h2>

            <p
              className='
                text-sm
                text-base-content/60
              '>
              تصویر پروفایل بخش About را انتخاب کنید
            </p>
          </div>
        </div>

        {/* Upload Area */}
        {!preview ?
          <button
            type='button'
            onClick={handleClick}
            className='
              border
              border-dashed
              border-base-300
              rounded-xl
              min-h-52
              flex
              flex-col
              items-center
              justify-center
              gap-3
              hover:border-primary
              transition
            '>
            <GalleryAdd size={42} className='text-primary' variant='Bulk' />

            <span
              className='
                text-sm
                text-base-content/70
              '>
              برای انتخاب تصویر کلیک کنید
            </span>

            <span
              className='
                text-xs
                text-base-content/50
              '>
              PNG , JPG , WEBP
            </span>
          </button>
        : <div
            className='
              relative
              rounded-xl
              overflow-hidden
              border
              border-base-300
            '>
            <img
              src={preview}
              alt='About preview'
              className='
                w-full
                h-60
                object-cover
              '
            />

            <div
              className='
                absolute
                bottom-3
                right-3
                flex
                gap-2
              '>
              <button
                type='button'
                onClick={handleClick}
                className='
                  btn
                  btn-sm
                  btn-primary
                '>
                <Refresh2 size={16} />
                تغییر
              </button>

              <button
                type='button'
                onClick={handleRemove}
                className='
                  btn
                  btn-sm
                  btn-error
                '>
                <Trash size={16} />
                حذف
              </button>
            </div>
          </div>
        }

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
