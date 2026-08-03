/** @format */

import { motion } from "framer-motion";
import { Call, Whatsapp, Setting2 } from "iconsax-reactjs";
import Button from "../ui/Button";

const ContactHeader = ({
  phone = "09123884766",
  whatsapp = "09123884766",
  saving = false,
  onSave,
}) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className=''>
      <div
        className='
          rounded-3xl
          border
          border-white/10
          px-4
          py-3
        '>
        <div className='flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between'>
          {/* Left */}

          <div className='flex items-center gap-4'>
            <div
              className='
                bg-primary/10
                text-primary
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
              '>
              <Setting2 size={28} variant='Bulk' />
            </div>

            <div>
              <h1 className='text-xl font-black'>تنظیمات اطلاعات تماس</h1>

              <p className='text-base-content/60 mt-1 text-sm'>
                مدیریت اطلاعات تماس و تصویر بخش ارتباط با ما
              </p>
            </div>
          </div>

          {/* Right */}

          <div className='flex flex-col items-stretch gap-2 sm:flex-row sm:items-center'>
            <div className='bg-base-200 flex items-center gap-2 rounded-xl px-4 py-2'>
              <Call size={18} variant='Bulk' className='text-primary' />

              <span className='font-medium'>{phone}</span>
            </div>

            <div className='bg-base-200 flex items-center gap-2 rounded-xl px-4 py-2'>
              <Whatsapp size={18} variant='Bulk' className='text-success' />

              <span className='font-medium'>{whatsapp}</span>
            </div>

            <Button variant='primary' loading={saving} onClick={onSave}>
              ذخیره تغییرات
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default ContactHeader;
