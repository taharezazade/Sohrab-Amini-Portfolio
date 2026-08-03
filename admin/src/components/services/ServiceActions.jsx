/** @format */

import { motion } from "framer-motion";
import { Edit2, Trash, Eye, EyeSlash, Copy } from "iconsax-reactjs";

const ServiceActions = ({
  service,
  loading = false,
  onEdit,
  onDelete,
  onDuplicate,
  onToggleStatus,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='flex flex-wrap items-center gap-2'>
      <button
        type='button'
        className='btn btn-outline btn-sm'
        onClick={() => onEdit?.(service)}
        disabled={loading}>
        <Edit2 size={16} />
        ویرایش
      </button>

      <button
        type='button'
        className='btn btn-outline btn-sm'
        onClick={() => onDuplicate?.(service)}
        disabled={loading}>
        <Copy size={16} />
        کپی
      </button>

      <button
        type='button'
        className={`btn btn-sm ${
          service?.isActive ? "btn-warning" : "btn-success"
        }`}
        onClick={() => onToggleStatus?.(service)}
        disabled={loading}>
        {service?.isActive ?
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
