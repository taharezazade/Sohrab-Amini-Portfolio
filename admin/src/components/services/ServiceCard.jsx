/** @format */

import { motion } from "framer-motion";
import { Edit2, Trash, Eye, EyeSlash, More, Category } from "iconsax-reactjs";

const ServiceCard = ({ service, onEdit, onDelete, onToggleStatus }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className='card bg-base-100 border-base-300 shadow-sm border'>
      <div className='card-body'>
        {/* Header */}
        <div className='flex items-start justify-between'>
          <div className='flex items-center gap-4'>
            <div className='bg-primary/10 text-primary flex h-14 w-14 items-center justify-center rounded-2xl'>
              {service.icon ?
                <img
                  src={service.icon}
                  alt={service.title}
                  className='h-8 w-8 object-contain'
                />
              : <Category size={26} variant='Bold' />}
            </div>

            <div>
              <h3 className='text-base-content text-lg font-bold'>
                {service.title}
              </h3>

              <div className='mt-2 flex items-center gap-2'>
                <div
                  className={`badge ${
                    service.isActive ? "badge-success" : "badge-error"
                  }`}>
                  {service.isActive ? "فعال" : "غیرفعال"}
                </div>

                <div className='badge badge-outline'>#{service.order}</div>
              </div>
            </div>
          </div>

          <div className='dropdown dropdown-end'>
            <button className='btn btn-ghost btn-sm btn-circle'>
              <More size={18} />
            </button>

            <ul className='dropdown-content menu bg-base-100 rounded-box border-base-300 z-20 mt-2 w-52 border p-2 shadow-lg'>
              <li>
                <button onClick={() => onEdit(service)}>
                  <Edit2 size={18} />
                  ویرایش
                </button>
              </li>

              <li>
                <button onClick={() => onToggleStatus(service)}>
                  {service.isActive ?
                    <>
                      <EyeSlash size={18} />
                      غیرفعال کردن
                    </>
                  : <>
                      <Eye size={18} />
                      فعال کردن
                    </>
                  }
                </button>
              </li>

              <li>
                <button
                  className='text-error'
                  onClick={() => onDelete(service)}>
                  <Trash size={18} />
                  حذف
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Description */}
        <p className='text-base-content/70 mt-5 line-clamp-3 leading-7'>
          {service.description}
        </p>

        {/* Footer */}
        <div className='border-base-300 mt-6 flex items-center justify-between border-t pt-5'>
          <div className='text-base-content/60 text-sm'>
            ترتیب نمایش:
            <span className='text-base-content ml-2 font-bold'>
              {service.order}
            </span>
          </div>

          <div className='flex gap-2'>
            <button
              className='btn btn-outline btn-sm'
              onClick={() => onEdit(service)}>
              <Edit2 size={18} />
              ویرایش
            </button>

            <button
              className='btn btn-error btn-sm btn-outline'
              onClick={() => onDelete(service)}>
              <Trash size={18} />
              حذف
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
