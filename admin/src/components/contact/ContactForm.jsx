/** @format */

import { motion } from "framer-motion";
import { Call, Whatsapp, GalleryAdd } from "iconsax-reactjs";

import Card from "../ui/Card";
import Input from "../ui/Input";
import Button from "../ui/Button";

const ContactForm = ({
  values,
  loading = false,
  onChange,
  onImageChange,
  onSubmit,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit?.();
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}>
      <Card
        title='اطلاعات تماس'
        description='شماره تماس، واتساپ و تصویر بخش ارتباط با ما را مدیریت کنید.'>
        <div className='space-y-6'>
          {/* Phone */}

          <Input
            label='شماره تماس'
            name='phone'
            type='tel'
            placeholder='09123884766'
            value={values.phone}
            onChange={onChange}
            maxLength={11}
            icon={<Call size={18} />}
            required
          />

          {/* WhatsApp */}

          <Input
            label='شماره واتساپ'
            name='whatsapp'
            type='tel'
            placeholder='09123884766'
            value={values.whatsapp}
            onChange={onChange}
            maxLength={11}
            icon={<Whatsapp size={18} />}
            required
          />

          {/* Image */}

          <div className='space-y-2'>
            <label className='font-medium'>تصویر سهراب</label>

            <label
              className='
                border-base-300
                hover:border-primary
                hover:bg-base-200/40

                flex
                cursor-pointer
                flex-col
                items-center
                justify-center
                gap-3

                rounded-2xl
                border-2
                border-dashed

                px-6
                py-10

                transition
              '>
              <GalleryAdd size={42} variant='Bulk' className='text-primary' />

              <div className='text-center'>
                <p className='font-semibold'>انتخاب تصویر</p>

                <p className='text-base-content/60 mt-1 text-sm'>
                  فقط فایل‌های WEBP مجاز هستند.
                </p>
              </div>

              <input
                type='file'
                accept='.webp,image/webp'
                className='hidden'
                onChange={(e) => onImageChange?.(e.target.files?.[0])}
              />
            </label>
          </div>

          {/* Actions */}

          <div className='flex justify-end'>
            <Button type='submit' variant='primary' loading={loading}>
              ذخیره تغییرات
            </Button>
          </div>
        </div>
      </Card>
    </motion.form>
  );
};

export default ContactForm;
