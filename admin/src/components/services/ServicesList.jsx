/** @format */

import { AnimatePresence, motion } from "framer-motion";
import { Box } from "iconsax-reactjs";

import ServiceCard from "./ServiceCard";

const ServicesList = ({
  services = [],
  loading = false,
  onEdit,
  onDelete,
  onToggleStatus,
}) => {
  if (loading) {
    return (
      <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className='card bg-base-100 border-base-300 border shadow-sm'>
            <div className='card-body space-y-4'>
              <div className='skeleton h-14 w-14 rounded-2xl' />

              <div className='space-y-2'>
                <div className='skeleton h-5 w-2/3' />
                <div className='skeleton h-4 w-full' />
                <div className='skeleton h-4 w-4/5' />
              </div>

              <div className='flex gap-2'>
                <div className='skeleton h-8 w-20' />
                <div className='skeleton h-8 w-20' />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!services.length) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className='card bg-base-100 border-base-300 border shadow-sm'>
        <div className='card-body items-center py-20 text-center'>
          <div className='bg-base-200 mb-5 flex h-20 w-20 items-center justify-center rounded-3xl'>
            <Box size={38} variant='Bulk' />
          </div>

          <h3 className='text-base-content text-xl font-bold'>
            هیچ سرویسی پیدا نشد
          </h3>

          <p className='text-base-content/60 mt-2 max-w-md'>
            هنوز سرویسی ثبت نشده است یا نتیجه‌ای با فیلترهای انتخاب شده وجود
            ندارد.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div layout className='grid gap-6 md:grid-cols-2 2xl:grid-cols-3'>
      <AnimatePresence mode='popLayout'>
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggleStatus={onToggleStatus}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default ServicesList;
