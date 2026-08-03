/** @format */

import { motion } from "framer-motion";
import {
  TickCircle,
  CloseCircle,
  Calendar2,
  ArrangeHorizontal,
} from "iconsax-reactjs";

const ServiceStatusCard = ({ service = {} }) => {
  const { isActive = false, order = 1, createdAt, updatedAt } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className='card bg-base-100 border-base-300 shadow-sm border'>
      <div className='card-body'>
        <h3 className='card-title mb-6'>وضعیت سرویس</h3>

        <div className='space-y-5'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              {isActive ?
                <TickCircle size={22} variant='Bold' className='text-success' />
              : <CloseCircle size={22} variant='Bold' className='text-error' />}

              <span className='text-base-content/70'>وضعیت</span>
            </div>

            <span
              className={`badge ${isActive ? "badge-success" : "badge-error"}`}>
              {isActive ? "فعال" : "غیرفعال"}
            </span>
          </div>

          <div className='divider my-0' />

          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <ArrangeHorizontal size={20} className='text-primary' />

              <span className='text-base-content/70'>ترتیب نمایش</span>
            </div>

            <span className='font-bold'>{order}</span>
          </div>

          <div className='divider my-0' />

          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <Calendar2 size={20} className='text-info' />

              <span className='text-base-content/70'>ایجاد شده</span>
            </div>

            <span className='text-sm'>
              {createdAt ?
                new Date(createdAt).toLocaleDateString("fa-IR")
              : "---"}
            </span>
          </div>

          <div className='divider my-0' />

          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <Calendar2 size={20} className='text-warning' />

              <span className='text-base-content/70'>آخرین بروزرسانی</span>
            </div>

            <span className='text-sm'>
              {updatedAt ?
                new Date(updatedAt).toLocaleDateString("fa-IR")
              : "---"}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceStatusCard;
