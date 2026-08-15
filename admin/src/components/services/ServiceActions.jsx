/** @format */

import { motion } from "framer-motion";
import { Edit2, Trash, Eye, EyeSlash } from "iconsax-reactjs";

const ServiceActions = ({
  service,
  loading = false,
  onEdit,
  onDelete,
  onToggleStatus,
}) => {
  if (!service) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='flex flex-wrap items-center gap-2'>
      {/* EDIT */}

      <button
        type='button'
        className='btn btn-outline btn-sm'
        onClick={() => onEdit?.(service)}
        disabled={loading}>
        <Edit2 size={16} />
        ویرایش
      </button>

      {/* STATUS */}

      <button
        type='button'
        className={`
          btn
          btn-sm
          ${service.isActive ? "btn-warning" : "btn-success"}
        `}
        onClick={() => onToggleStatus?.(service)}
        disabled={loading}>
        {service.isActive ?
          <>
            <EyeSlash size={16} />
            غیرفعال
          </>
        : <>
            <Eye size={16} />
            فعال
          </>
        }
      </button>

      {/* DELETE */}

      <button
        type='button'
        className='btn btn-error btn-sm'
        onClick={() => onDelete?.(service)}
        disabled={loading}>
        <Trash size={16} />
        حذف
      </button>
    </motion.div>
  );
};

export default ServiceActions;
