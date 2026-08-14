/** @format */

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TickCircle } from "iconsax-reactjs";

import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

import FeaturesInput from "./FeaturesInput";
import TechnologyInput from "./TechnologyInput";

import { getServiceIcon } from "../../../../src/Components/Services/service.icons";

const defaultValues = {
  title: "",
  shortDescription: "",
  description: "",
  icon: "Global",
  features: [],
  category: "",
  technologies: [],
  color: "",
  order: 0,
  isActive: true,
};

const ServiceForm = ({
  initialValues = null,
  loading = false,
  onSubmit,
  onCancel,
}) => {
  const [form, setForm] = useState(defaultValues);

  const [iconPreview, setIconPreview] = useState("Global");

  useEffect(() => {
    if (initialValues) {
      const next = {
        ...defaultValues,
        ...initialValues,

        features:
          Array.isArray(initialValues.features) ? initialValues.features : [],

        technologies:
          Array.isArray(initialValues.technologies) ?
            initialValues.technologies
          : [],

        order: Number(initialValues.order) || 0,

        isActive: initialValues.isActive ?? true,

        icon: initialValues.icon || "Global",
      };

      setForm(next);

      setIconPreview(next.icon || "Global");
    } else {
      setForm(defaultValues);
      setIconPreview("Global");
    }
  }, [initialValues]);

  /* =========================================================
     CHANGE
  ========================================================= */

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((prev) => ({
      ...prev,

      [name]:
        type === "checkbox" ? checked
        : type === "number" ? Number(value)
        : value,
    }));

    if (name === "icon") {
      setIconPreview(value || "Global");
    }
  };

  /* =========================================================
     FEATURES
  ========================================================= */

  const handleFeaturesChange = (features) => {
    setForm((prev) => ({
      ...prev,
      features,
    }));
  };

  /* =========================================================
     TECHNOLOGIES
  ========================================================= */

  const handleTechnologiesChange = (technologies) => {
    setForm((prev) => ({
      ...prev,
      technologies,
    }));
  };

  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit = (event) => {
    event.preventDefault();

    const payload = {
      title: form.title.trim(),

      shortDescription: form.shortDescription.trim() || null,

      description: form.description.trim(),

      icon: form.icon.trim() || "Global",

      features: form.features
        .map((item) => String(item).trim())
        .filter(Boolean),

      category: form.category.trim() || null,

      technologies: form.technologies
        .map((item) => String(item).trim())
        .filter(Boolean),

      color: form.color.trim() || null,

      order: Number(form.order) || 0,

      isActive: Boolean(form.isActive),
    };

    onSubmit?.(payload);
  };

  const PreviewIcon = getServiceIcon(iconPreview);

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
      className='space-y-7'>
      {/* =====================================================
          BASIC
      ===================================================== */}

      <div className='grid gap-5 md:grid-cols-2'>
        <Input
          label='عنوان سرویس'
          name='title'
          value={form.title}
          onChange={handleChange}
          placeholder='مثلاً طراحی سایت'
          required
        />

        <Input
          label='ترتیب نمایش'
          name='order'
          type='number'
          min={0}
          value={form.order}
          onChange={handleChange}
        />
      </div>

      {/* =====================================================
          SHORT DESCRIPTION
      ===================================================== */}

      <Input
        label='توضیح کوتاه'
        name='shortDescription'
        value={form.shortDescription}
        onChange={handleChange}
        placeholder='توضیح کوتاه درباره سرویس...'
      />

      {/* =====================================================
          DESCRIPTION
      ===================================================== */}

      <Textarea
        label='توضیحات سرویس'
        name='description'
        value={form.description}
        onChange={handleChange}
        placeholder='توضیحات کامل سرویس...'
        rows={6}
        required
      />

      {/* =====================================================
          CATEGORY
      ===================================================== */}

      <Input
        label='دسته‌بندی'
        name='category'
        value={form.category}
        onChange={handleChange}
        placeholder='مثلاً توسعه وب'
      />

      {/* =====================================================
          ICON
      ===================================================== */}

      <div>
        <label className='mb-3 block text-sm font-bold'>آیکون Iconsax</label>

        <div
          className='
            flex
            items-center
            gap-5
            rounded-3xl
            border
            border-base-300
            bg-base-200/50
            p-5
          '>
          <div
            className='
              flex
              h-16
              w-16
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-primary/10
              text-primary
            '>
            <PreviewIcon size={32} variant='Bulk' />
          </div>

          <div className='flex-1'>
            <Input
              label=''
              name='icon'
              value={form.icon}
              onChange={handleChange}
              placeholder='مثلاً Code1'
            />

            <p className='mt-2 text-xs text-base-content/50'>
              نام آیکون را از Iconsax وارد کنید. اگر آیکون وجود نداشته باشد
              Global نمایش داده می‌شود.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          FEATURES
      ===================================================== */}

      <FeaturesInput value={form.features} onChange={handleFeaturesChange} />

      {/* =====================================================
          TECHNOLOGIES
      ===================================================== */}

      <TechnologyInput
        value={form.technologies}
        onChange={handleTechnologiesChange}
      />

      {/* =====================================================
          COLOR
      ===================================================== */}

      <Input
        label='رنگ'
        name='color'
        value={form.color}
        onChange={handleChange}
        placeholder='مثلاً #FF6B00'
      />

      {/* =====================================================
          STATUS
      ===================================================== */}

      <label
        className='
          flex
          cursor-pointer
          items-center
          gap-3
          rounded-2xl
          border
          border-base-300
          bg-base-200/50
          p-4
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

      {/* =====================================================
          ACTIONS
      ===================================================== */}

      <div
        className='
          flex
          flex-col-reverse
          gap-3
          border-t
          border-base-300
          pt-5
          sm:flex-row
          sm:justify-end
        '>
        <button
          type='button'
          onClick={onCancel}
          disabled={loading}
          className='btn btn-ghost'>
          انصراف
        </button>

        <button
          type='submit'
          disabled={loading}
          className='btn btn-primary gap-2'>
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
