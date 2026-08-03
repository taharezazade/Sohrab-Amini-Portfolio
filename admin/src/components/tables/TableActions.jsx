/** @format */

import { Eye, Edit2, Trash, More } from "iconsax-reactjs";

const TableAction = ({
  item,

  onView,
  onEdit,
  onDelete,

  showView = true,
  showEdit = true,
  showDelete = true,

  className = "",
}) => {
  return (
    <div
      className={`
        flex
        items-center
        justify-center
        gap-2

        ${className}
      `}>
      {/* View */}

      {showView && (
        <button
          type='button'

          onClick={() => onView?.(item)}

          className='
              btn
              btn-ghost
              btn-sm
              btn-square
            '

          title='مشاهده'>
          <Eye size={18} />
        </button>
      )}

      {/* Edit */}

      {showEdit && (
        <button
          type='button'

          onClick={() => onEdit?.(item)}

          className='
              btn
              btn-ghost
              btn-sm
              btn-square
            '

          title='ویرایش'>
          <Edit2 size={18} />
        </button>
      )}

      {/* Delete */}

      {showDelete && (
        <button
          type='button'

          onClick={() => onDelete?.(item)}

          className='
              btn
              btn-ghost
              btn-error
              btn-sm
              btn-square
            '

          title='حذف'>
          <Trash size={18} />
        </button>
      )}
    </div>
  );
};

export default TableAction;
