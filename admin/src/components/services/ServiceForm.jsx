/** @format */

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DocumentUpload, TickCircle } from "iconsax-reactjs";

import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

const defaultValues = {
  title: "",
  description: "",
  icon: null,
  order: 1,
  isActive: true,
};

const ServiceForm = ({
  initialValues = defaultValues,
  loading = false,
  onSubmit,
  onCancel,
}) => {
  const [form, setForm] = useState(defaultValues);

  const [preview, setPreview] = useState("");

  useEffect(() => {
    setForm({
      ...defaultValues,
      ...initialValues,
    });

    if (initialValues?.icon) {
      setPreview(initialValues.icon);
    }
  }, [initialValues]);

  /* ============================
      Handlers
  ============================ */

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((prev) => ({
      ...prev,

      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setForm((prev) => ({
      ...prev,

      icon: file,
    }));

    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit?.({
      ...form,

      order: Number(form.order),
    });
  };

  return (
    <motion.form
      initial={{
        opacity: 0,
        y: 20,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.3,
      }}

      onSubmit={handleSubmit}

      className='space-y-6'>
      {/* Inputs */}

      <div
        className='
          grid
          gap-5
          md:grid-cols-2
        '>
        <Input
          label='عنوان سرویس'

          name='title'

          value={form.title}

          onChange={handleChange}

          placeholder='مثلا طراحی سایت'

          required
        />

        <Input
          label='ترتیب نمایش'

          name='order'

          type='number'

          min={1}

          value={form.order}

          onChange={handleChange}
        />
      </div>

      <Textarea
        label='توضیحات سرویس'

        name='description'

        value={form.description}

        onChange={handleChange}

        placeholder='توضیحات کامل سرویس را وارد کنید...'

        rows={5}

        required
      />

      {/* Icon Upload */}

      <div>
        <label className='mb-2 block text-sm font-bold'>آیکون سرویس</label>

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
            p-6
            transition
          '>
          {preview ?
            <img
              src={preview}

              alt='service icon'

              className='
                h-20
                w-20
                rounded-2xl
                object-cover
              '
            />
          : <DocumentUpload
              size={40}

              variant='Bulk'

              className='text-primary'
            />
          }

          <span className='text-sm opacity-70'>انتخاب آیکون سرویس</span>

          <input
            type='file'

            accept='image/*'

            onChange={handleFileChange}

            className='hidden'
          />
        </label>
      </div>

      {/* Status */}

      <label
        className='
          flex
          cursor-pointer
          items-center
          gap-3
        '>
        <input
          type='checkbox'

          name='isActive'

          checked={form.isActive}

          onChange={handleChange}

          className='toggle toggle-primary'
        />

        <span className='text-sm font-medium'>سرویس فعال باشد</span>
      </label>

      {/* Actions */}

      <div
        className='
          border-base-300
          flex
          flex-col-reverse
          gap-3
          border-t
          pt-5
          sm:flex-row
          sm:justify-end
        '>
        <button
          type='button'

          onClick={onCancel}

          className='
            btn
            btn-ghost
          '>
          انصراف
        </button>

        <button
          type='submit'

          disabled={loading}

          className='
            btn
            btn-primary
            gap-2
          '>
          {loading ?
            <span className='loading loading-spinner' />
          : <>
              <TickCircle size={18} />

              {initialValues?.id ? "ذخیره تغییرات" : "ایجاد سرویس"}
            </>
          }
        </button>
      </div>
    </motion.form>
  );
};

export default ServiceForm;
