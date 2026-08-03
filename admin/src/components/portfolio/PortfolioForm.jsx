/** @format */

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GalleryAdd, TickCircle } from "iconsax-reactjs";

import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";

const initialState = {
  title: "",
  description: "",
  category: "",
  websiteUrl: "",
  githubUrl: "",
  order: 1,
  status: "DRAFT",
  featured: false,
  images: [],
};

const PortfolioForm = ({
  initialValues = initialState,

  loading = false,

  onSubmit,

  onCancel,
}) => {
  const [form, setForm] = useState(initialState);

  const [previewImages, setPreviewImages] = useState([]);

  useEffect(() => {
    setForm({
      ...initialState,
      ...initialValues,
    });

    if (initialValues?.images) {
      setPreviewImages(initialValues.images.map((item) => item.url));
    }
  }, [initialValues]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,

      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    setForm((prev) => ({
      ...prev,

      images: files,
    }));

    setPreviewImages(files.map((file) => URL.createObjectURL(file)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit?.({
      ...form,

      order: Number(form.order),
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}

      initial={{
        opacity: 0,
        y: 15,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      className='
        space-y-6
      '>
      <div
        className='
          grid
          gap-5

          md:grid-cols-2
        '>
        <Input
          label='عنوان پروژه'

          name='title'

          value={form.title}

          onChange={handleChange}

          placeholder='مثلاً طراحی سایت فروشگاهی'

          required
        />

        <Input
          label='دسته بندی'

          name='category'

          value={form.category}

          onChange={handleChange}

          placeholder='Web Design'
        />
      </div>

      <Textarea
        label='توضیحات پروژه'

        name='description'

        value={form.description}

        onChange={handleChange}

        placeholder='توضیحات کامل پروژه...'

        rows={5}

        required
      />

      <div
        className='
          grid
          gap-5

          md:grid-cols-2
        '>
        <Input
          label='لینک سایت'

          name='websiteUrl'

          value={form.websiteUrl}

          onChange={handleChange}

          placeholder='https://example.com'
        />

        <Input
          label='لینک گیت‌هاب'

          name='githubUrl'

          value={form.githubUrl}

          onChange={handleChange}

          placeholder='https://github.com/...'
        />
      </div>

      <div
        className='
          grid
          gap-5

          md:grid-cols-2
        '>
        <Input
          label='ترتیب نمایش'

          type='number'

          name='order'

          value={form.order}

          onChange={handleChange}

          min={1}
        />

        <div>
          <label
            className='
              mb-2
              block
              text-sm
              font-bold
            '>
            وضعیت پروژه
          </label>

          <select
            name='status'

            value={form.status}

            onChange={handleChange}

            className='
              select
              select-bordered

              w-full

              rounded-xl
            '>
            <option value='DRAFT'>پیش‌نویس</option>

            <option value='PUBLISHED'>منتشر شده</option>

            <option value='ARCHIVED'>آرشیو</option>
          </select>
        </div>
      </div>

      {/* Images */}

      <div>
        <label
          className='
            mb-3
            block
            text-sm
            font-bold
          '>
          تصاویر پروژه
        </label>

        <label
          className='
            border-base-300

            hover:border-primary

            flex

            cursor-pointer

            flex-col

            items-center

            justify-center

            gap-3

            rounded-2xl

            border-2

            border-dashed

            p-8

            transition
          '>
          <GalleryAdd
            size={36}

            className='text-primary'
          />

          <span
            className='
              text-base-content/60

              text-sm
            '>
            انتخاب تصاویر
          </span>

          <input
            type='file'

            multiple

            accept='image/*'

            onChange={handleImageChange}

            className='hidden'
          />
        </label>

        {previewImages.length > 0 && (
          <div
            className='
                mt-4

                grid

                grid-cols-2

                gap-3

                sm:grid-cols-3
              '>
            {previewImages.map((image, index) => (
              <img
                key={index}

                src={image}

                className='
                        aspect-video

                        rounded-xl

                        object-cover
                      '
              />
            ))}
          </div>
        )}
      </div>

      {/* Options */}

      <label
        className='
          flex

          cursor-pointer

          items-center

          gap-3
        '>
        <input
          type='checkbox'

          name='featured'

          checked={form.featured}

          onChange={handleChange}

          className='
            checkbox
            checkbox-primary
          '
        />

        <span>پروژه ویژه باشد</span>
      </label>

      {/* Actions */}

      <div
        className='
          flex

          justify-end

          gap-3

          border-t

          border-base-300

          pt-5
        '>
        <Button
          type='button'

          variant='ghost'

          onClick={onCancel}

          disabled={loading}>
          انصراف
        </Button>

        <Button
          type='submit'

          variant='primary'

          loading={loading}>
          {initialValues?.id ? "ذخیره تغییرات" : "ایجاد نمونه‌کار"}
        </Button>
      </div>
    </motion.form>
  );
};

export default PortfolioForm;
