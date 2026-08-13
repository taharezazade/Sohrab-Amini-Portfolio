/** @format */

import { Refresh, TickCircle } from "iconsax-reactjs";

const AboutActions = ({
  isSubmitting = false,
  hasChanges = false,
  onSubmit,
  onReset,
}) => {
  return (
    <div className='card border border-base-300 bg-base-100 shadow-sm'>
      <div className='card-body'>
        <div className='flex flex-col gap-3 sm:flex-row sm:justify-end'>
          {/* Reset */}

          <button
            type='button'
            onClick={onReset}
            disabled={isSubmitting || !hasChanges}
            className='
              btn
              btn-ghost
              gap-2
            '>
            <Refresh size={18} />
            بازنشانی
          </button>

          {/* Update */}

          <button
            type='button'
            onClick={onSubmit}
            disabled={isSubmitting || !hasChanges}
            className='
              btn
              btn-primary
              gap-2
              min-w-40
            '>
            {isSubmitting ?
              <>
                <span className='loading loading-spinner loading-sm' />
                در حال ذخیره...
              </>
            : <>
                <TickCircle size={18} />
                ذخیره تغییرات
              </>
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutActions;
