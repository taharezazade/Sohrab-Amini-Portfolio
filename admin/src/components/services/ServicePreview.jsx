/** @format */

import { motion } from "framer-motion";
import { Category } from "iconsax-reactjs";

const ServicePreview = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className='card bg-base-100 border-base-300 sticky top-6 border shadow-sm'>
      <div className='card-body'>
        <div className='mb-6'>
          <h3 className='text-base-content text-lg font-bold'>
            پیش‌نمایش سرویس
          </h3>

          <p className='text-base-content/60 mt-1 text-sm'>
            این بخش نحوه نمایش سرویس در وب‌سایت را نشان می‌دهد.
          </p>
        </div>

        <div className='bg-base-200 rounded-3xl p-8 transition-all duration-300'>
          <div className='bg-primary/10 text-primary mb-6 flex h-16 w-16 items-center justify-center rounded-2xl'>
            {service?.icon ?
              <img
                src={service.icon}
                alt={service.title}
                className='h-9 w-9 object-contain'
              />
            : <Category size={30} variant='Bulk' />}
          </div>

          <h4 className='text-base-content mb-4 text-xl font-bold'>
            {service?.title || "عنوان سرویس"}
          </h4>

          <p className='text-base-content/70 leading-8'>
            {service?.description ||
              "توضیحات سرویس در این قسمت نمایش داده می‌شود. با وارد کردن اطلاعات فرم، پیش‌نمایش به‌صورت لحظه‌ای بروزرسانی خواهد شد."}
          </p>

          <div className='divider my-6' />

          <div className='flex items-center justify-between'>
            <div className='badge badge-outline'>
              ترتیب:
              {service?.order ?? 1}
            </div>

            <div
              className={`badge ${
                service?.isActive ? "badge-success" : "badge-error"
              }`}>
              {service?.isActive ? "فعال" : "غیرفعال"}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicePreview;
