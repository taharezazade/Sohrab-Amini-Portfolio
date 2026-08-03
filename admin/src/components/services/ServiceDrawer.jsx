/** @format */

import { AnimatePresence, motion } from "framer-motion";
import { CloseCircle, Category, Calendar2 } from "iconsax-reactjs";

import ServiceActions from "./ServiceActions";

const ServiceDrawer = ({
  open = false,
  service = null,
  onClose,
  onEdit,
  onDelete,
  onDuplicate,
  onToggleStatus,
}) => {
  return (
    <AnimatePresence>
      {open && service && (
        <div className='fixed inset-0 z-50'>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className='bg-base-content/40 absolute inset-0 backdrop-blur-sm'
          />

          {/* Drawer */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 30,
            }}
            className='bg-base-100 absolute right-0 top-0 flex h-full w-full max-w-xl flex-col border-l shadow-xl'>
            {/* Header */}
            <div className='border-base-300 flex items-center justify-between border-b p-6'>
              <div>
                <h2 className='text-xl font-black'>جزئیات سرویس</h2>

                <p className='text-base-content/60 mt-1 text-sm'>
                  مدیریت اطلاعات سرویس
                </p>
              </div>

              <button
                type='button'
                className='btn btn-ghost btn-circle'
                onClick={onClose}>
                <CloseCircle size={26} />
              </button>
            </div>

            {/* Content */}
            <div className='flex-1 space-y-6 overflow-y-auto p-6'>
              {/* Service Identity */}
              <div className='bg-base-200 rounded-3xl p-6'>
                <div className='flex items-start gap-4'>
                  <div className='bg-primary/10 text-primary flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl'>
                    {service.icon ?
                      <img
                        src={service.icon}
                        alt={service.title}
                        className='h-10 w-10 object-contain'
                      />
                    : <Category size={32} variant='Bold' />}
                  </div>

                  <div>
                    <h3 className='text-lg font-bold'>{service.title}</h3>

                    <div className='mt-3'>
                      <span
                        className={`badge ${
                          service.isActive ? "badge-success" : "badge-error"
                        }`}>
                        {service.isActive ? "فعال" : "غیرفعال"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className='card bg-base-100 border-base-300 border'>
                <div className='card-body'>
                  <h4 className='font-bold'>توضیحات</h4>

                  <p className='text-base-content/70 mt-3 leading-8'>
                    {service.description || "توضیحی ثبت نشده است."}
                  </p>
                </div>
              </div>

              {/* Information */}
              <div className='card bg-base-100 border-base-300 border'>
                <div className='card-body'>
                  <h4 className='mb-4 font-bold'>اطلاعات سرویس</h4>

                  <div className='space-y-4 text-sm'>
                    <div className='flex justify-between'>
                      <span className='text-base-content/60'>ترتیب نمایش</span>

                      <span className='font-bold'>{service.order}</span>
                    </div>

                    <div className='flex justify-between'>
                      <span className='text-base-content/60 flex items-center gap-2'>
                        <Calendar2 size={16} />
                        ایجاد شده
                      </span>

                      <span>
                        {service.createdAt ?
                          new Date(service.createdAt).toLocaleDateString(
                            "fa-IR",
                          )
                        : "---"}
                      </span>
                    </div>

                    <div className='flex justify-between'>
                      <span className='text-base-content/60 flex items-center gap-2'>
                        <Calendar2 size={16} />
                        بروزرسانی
                      </span>

                      <span>
                        {service.updatedAt ?
                          new Date(service.updatedAt).toLocaleDateString(
                            "fa-IR",
                          )
                        : "---"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className='border-base-300 border-t p-6'>
              <ServiceActions
                service={service}
                onEdit={onEdit}
                onDelete={onDelete}
                onDuplicate={onDuplicate}
                onToggleStatus={onToggleStatus}
              />
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ServiceDrawer;
