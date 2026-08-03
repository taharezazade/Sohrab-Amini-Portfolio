/** @format */

import { motion } from "framer-motion";
import { Profile, TickCircle, Save2 } from "iconsax-reactjs";
import Button from "../ui/Button";

const ProfileHeader = ({ loading = false, saved = false, }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className='
        flex
        flex-col
        gap-4

        rounded-2xl
        border
        border-base-300

        bg-base-100/40

        p-5

        backdrop-blur-xl

        lg:flex-row
        lg:items-center
        lg:justify-between
      '>
      <div className='flex items-center gap-4'>
        <div
          className='
            flex
            h-14
            w-14
            items-center
            justify-center

            rounded-2xl

            bg-primary/10

            text-primary
          '>
          <Profile size={28} variant='Bulk' />
        </div>

        <div>
          <h1 className='text-xl font-black'>پروفایل مدیر</h1>

          <p className='mt-1 text-sm text-base-content/60'>
            اطلاعات حساب کاربری، تصویر پروفایل و تنظیمات امنیتی مدیر را مدیریت
            کنید.
          </p>
        </div>
      </div>

      <div className='flex items-center gap-3'>
        {saved && (
          <div
            className='
              hidden
              items-center
              gap-2

              rounded-xl

              bg-success/10

              px-3
              py-2

              text-sm
              text-success

              md:flex
            '>
            <TickCircle size={18} variant='Bold' />

            <span>تمام تغییرات ذخیره شده‌اند</span>
          </div>
        )}

        <Button
          variant='primary'
          loading={loading}
          icon={<Save2 size={18} />}>
          ذخیره تغییرات
        </Button>
      </div>
    </motion.div>
  );
};

export default ProfileHeader;
