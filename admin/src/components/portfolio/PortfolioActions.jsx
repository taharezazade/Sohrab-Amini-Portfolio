/** @format */

import { Eye, Edit2, Trash, TickCircle, Star1 } from "iconsax-reactjs";

const PortfolioActions = ({
  portfolio,

  onView,
  onEdit,
  onDelete,

  onToggleStatus,
  onToggleFeatured,

  showView = true,
  showEdit = true,
  showDelete = true,
  showStatus = true,
  showFeatured = true,
}) => {
  return (
    <div
      className='
        flex
        items-center
        justify-center
        gap-2
      '>
      {/* View */}

      {showView && (
        <button
          type='button'

          onClick={() => onView?.(portfolio)}

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

          onClick={() => onEdit?.(portfolio)}

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

      {/* Status Toggle */}

      {showStatus && (
        <button
          type='button'

          onClick={() => onToggleStatus?.(portfolio)}

          className='
              btn
              btn-ghost
              btn-sm
              btn-square
            '

          title='تغییر وضعیت'>
          <TickCircle size={18} />
        </button>
      )}

      {/* Featured Toggle */}

      {showFeatured && (
        <button
          type='button'

          onClick={() => onToggleFeatured?.(portfolio)}

          className='
              btn
              btn-ghost
              btn-sm
              btn-square
            '

          title='پروژه ویژه'>
          <Star1 size={18} />
        </button>
      )}

      {/* Delete */}

      {showDelete && (
        <button
          type='button'

          onClick={() => onDelete?.(portfolio)}

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

export default PortfolioActions;
