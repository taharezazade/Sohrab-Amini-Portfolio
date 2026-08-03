/** @format */

import { motion } from "framer-motion";
import { Call, Whatsapp, User } from "iconsax-reactjs";

import Card from "../ui/Card";

const ContactPreview = ({ values }) => {
  const previewImage =
    values?.image instanceof File ?
      URL.createObjectURL(values.image)
    : values?.image;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.3,
      }}>
      <Card
        title='پیش‌نمایش'
        description='نمایش اطلاعاتی که در سایت نمایش داده خواهد شد.'>
        <div className='space-y-5'>
          {/* Image */}

          <div className='flex justify-center'>
            <div
              className='
                bg-base-200
                border-base-300

                flex
                h-56
                w-full
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
              '>
              {previewImage ?
                <img
                  src={previewImage}
                  alt='Sohrab'
                  className='
                    h-full
                    w-full
                    object-cover
                  '
                />
              : <User
                  size={70}
                  className='text-base-content/30'
                  variant='Bulk'
                />
              }
            </div>
          </div>

          {/* Phone */}

          <div
            className='
              border-base-300

              flex
              items-center
              gap-4

              rounded-2xl
              border

              p-4
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
                rounded-xl
              '>
              <Call size={24} variant='Bulk' />
            </div>

            <div>
              <p className='text-base-content/50 text-xs'>تماس مستقیم</p>

              <h3 className='font-bold'>{values?.phone || "09123884766"}</h3>
            </div>
          </div>

          {/* WhatsApp */}

          <div
            className='
              border-base-300

              flex
              items-center
              gap-4

              rounded-2xl
              border

              p-4
            '>
            <div
              className='
                bg-success/10
                text-success

                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
              '>
              <Whatsapp size={24} variant='Bulk' />
            </div>

            <div>
              <p className='text-base-content/50 text-xs'>واتساپ</p>

              <h3 className='font-bold'>{values?.whatsapp || "09123884766"}</h3>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ContactPreview;
