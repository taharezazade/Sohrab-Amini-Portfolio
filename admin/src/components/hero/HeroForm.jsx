/** @format */

import { motion } from "framer-motion";
import { Controller, useFormContext } from "react-hook-form";
import { Edit2, Text, Note1, Link21 } from "iconsax-reactjs";

import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

const HeroForm = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

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
      {/* =======================================================
          Header
      ======================================================= */}

      <div className='flex items-center justify-between border-b border-base-300 px-5 py-4'>
        <div>
          <h2 className='text-lg font-bold'>اطلاعات Hero</h2>

          <p className='mt-1 text-sm text-base-content/60'>
            متن اصلی صفحه نخست را ویرایش کنید.
          </p>
        </div>

        <div className='rounded-xl bg-primary/10 p-2 text-primary'>
          <Edit2 size={20} variant='Bulk' />
        </div>
      </div>

      {/* =======================================================
          Form
      ======================================================= */}

      <div className='space-y-5 p-5'>
        {/* Title */}

        <Input
          label='عنوان اصلی'
          placeholder='مثال : توسعه دهنده حرفه‌ای وردپرس'
          startIcon={<Text size={18} />}
          error={errors.title?.message}
          {...register("title")}
        />

        {/* Subtitle */}

        <Input
          label='عنوان فرعی'
          placeholder='یک متن کوتاه برای زیر عنوان'
          startIcon={<Note1 size={18} />}
          error={errors.subtitle?.message}
          {...register("subtitle")}
        />

        {/* Description */}

        <Controller
          control={control}
          name='description'
          render={({ field }) => (
            <Textarea
              label='توضیحات'
              rows={5}
              placeholder='توضیحاتی که در Hero نمایش داده می‌شود...'
              error={errors.description?.message}
              {...field}
            />
          )}
        />

        {/* Buttons */}

        <div className='grid gap-4 lg:grid-cols-2'>
          <Input
            label='لینک دکمه اول'
            placeholder='https://example.com'
            startIcon={<Link21 size={18} />}
            error={errors.primaryButtonLink?.message}
            {...register("primaryButtonLink")}
          />

          <Input
            label='متن دکمه اول'
            placeholder='مشاهده نمونه کارها'
            startIcon={<Text size={18} />}
            error={errors.primaryButtonText?.message}
            {...register("primaryButtonText")}
          />
        </div>

        <div className='grid gap-4 lg:grid-cols-2'>
          <Input
            label='لینک دکمه دوم'
            placeholder='https://example.com'
            startIcon={<Link21 size={18} />}
            error={errors.secondaryButtonLink?.message}
            {...register("secondaryButtonLink")}
          />

          <Input
            label='متن دکمه دوم'
            placeholder='دانلود رزومه'
            startIcon={<Text size={18} />}
            error={errors.secondaryButtonText?.message}
            {...register("secondaryButtonText")}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default HeroForm;
