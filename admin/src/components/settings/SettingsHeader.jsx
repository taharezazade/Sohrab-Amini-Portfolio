/** @format */

import { motion } from "framer-motion";
import { Setting2, Save2, TickCircle } from "iconsax-reactjs";

import Button from "../ui/Button";

const SettingsHeader = ({ loading = false, saved = true, onSave }) => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 15,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.3,
      }}

      className='
        mb-4
      '>
      <div
        className='
          rounded-3xl
          border
          border-base-300

          px-5
          py-4
        '>
        <div
          className='
            flex
            flex-col
            gap-4

            lg:flex-row
            lg:items-center
            lg:justify-between
          '>
          {/* Information */}

          <div
            className='
              flex
              items-center
              gap-4
            '>
            <div
              className='
                bg-primary/10
                text-primary

                flex
                h-12
                w-12

                items-center
                justify-center

                rounded-2xl
              '>
              <Setting2 size={26} variant='Bulk' />
            </div>

            <div>
              <h1
                className='
                  text-lg
                  font-black
                '>
                تنظیمات سایت
              </h1>

              <p
                className='
                  text-base-content/60

                  mt-1

                  text-sm
                '>
                مدیریت اطلاعات اصلی، SEO و تنظیمات عمومی سایت
              </p>
            </div>
          </div>

          {/* Actions */}

          <div
            className='
              flex
              flex-col
              gap-3

              sm:flex-row
              sm:items-center
            '>
            {/* Status */}

            <div
              className={`
                flex
                items-center
                gap-2

                rounded-xl

                px-4
                py-2

                text-sm

                ${
                  saved ?
                    "bg-success/10 text-success"
                  : "bg-warning/10 text-warning"
                }
              `}>
              <TickCircle size={18} variant='Bulk' />

              <span>{saved ? "ذخیره شده" : "تغییرات ذخیره نشده"}</span>
            </div>

            {/* Save */}

            <Button
              variant='primary'
              loading={loading}
              onClick={onSave}
              icon={<Save2 size={18} />}>
              ذخیره تغییرات
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SettingsHeader;
